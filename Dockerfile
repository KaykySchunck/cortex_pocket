# ---------------------------------------------------
# STAGE 1 – BUILD DO EXPO WEB
# ---------------------------------------------------
FROM node:20-bullseye AS builder

# Build arguments para flexibilidade
ARG NODE_ENV=production
ARG CI=true
ARG BUILDKIT_INLINE_CACHE=1

# Variáveis de ambiente (não usar NODE_ENV=production no build do Expo)
ENV CI=${CI}
ENV EXPO_NO_DOTENV=1
ENV EXPO_NO_TELEMETRY=1

WORKDIR /app

# Copiar apenas arquivos de dependências primeiro (cache layer otimizado)
COPY package.json package-lock.json* ./

# Instalar dependências com cache otimizado
# --only=production=false garante que devDependencies sejam instaladas
# (necessário para TypeScript, ESLint e build tools)
RUN echo "📦 Instalando dependências..." && \
    npm ci --only=production=false --prefer-offline --no-audit && \
    echo "✅ Dependências instaladas" && \
    echo "📊 Verificando instalação:" && \
    npm list --depth=0 | head -20 && \
    npm cache clean --force

# Copiar código fonte (após instalar dependências para melhor cache)
COPY . .

# Verificar estrutura do projeto antes do build
RUN echo "🔍 Verificando estrutura do projeto..." && \
    echo "Node: $(node --version)" && \
    echo "NPM: $(npm --version)" && \
    echo "Expo: $(npx expo --version 2>/dev/null || echo 'não encontrado')" && \
    echo "Estrutura de diretórios:" && \
    ls -la /app/ | head -15 && \
    echo "Arquivos TypeScript encontrados:" && \
    find /app -name "*.ts" -o -name "*.tsx" | head -10 || echo "Nenhum arquivo TS encontrado"

# Gerar build web estático do Expo
# Usa --output-dir dist para garantir diretório consistente
RUN echo "🏗️  Iniciando build do Expo..." && \
    npx expo export --platform web --output-dir dist || \
    (echo "❌ Erro no build. Diagnóstico:" && \
     echo "Node: $(node --version)" && \
     echo "NPM: $(npm --version)" && \
     echo "Expo: $(npx expo --version 2>/dev/null || echo 'erro ao obter versão')" && \
     echo "Diretórios disponíveis:" && \
     ls -la /app/ && \
     echo "Dependências instaladas:" && \
     npm list expo react react-native 2>/dev/null | head -10 || true && \
     exit 1)

# Verificar se o build foi criado com sucesso
RUN echo "🔍 Validando build..." && \
    if [ ! -d "dist" ] || [ -z "$(ls -A dist 2>/dev/null)" ]; then \
        echo "❌ ERRO: Diretório dist não foi criado ou está vazio!" && \
        echo "Listando diretórios disponíveis:" && \
        ls -la /app/ && \
        echo "Verificando se há outros diretórios de build:" && \
        ls -la /app/ | grep -E "build|web-build|out" || echo "Nenhum diretório de build encontrado" && \
        exit 1; \
    else \
        echo "✅ Build criado com sucesso em dist/" && \
        echo "📁 Estrutura do build:" && \
        find dist -type f | head -30 && \
        echo "📊 Tamanho do build:" && \
        du -sh dist && \
        echo "📄 Arquivos principais:" && \
        ls -lh dist/ | head -20; \
    fi

# ---------------------------------------------------
# STAGE 2 – NGINX SERVINDO O BUILD
# ---------------------------------------------------
FROM nginx:alpine

# Build arguments
ARG NODE_ENV=production

# Variáveis de ambiente para produção
ENV NODE_ENV=${NODE_ENV}

# Instalar wget para healthcheck
RUN apk add --no-cache wget && \
    echo "✅ Dependências do Nginx instaladas"

# Copiar build web estático do stage anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Verificar se os arquivos foram copiados
RUN echo "📦 Verificando arquivos copiados..." && \
    ls -la /usr/share/nginx/html/ | head -15 && \
    if [ ! -f "/usr/share/nginx/html/index.html" ]; then \
        echo "⚠️  AVISO: index.html não encontrado!" && \
        echo "Arquivos disponíveis:" && \
        find /usr/share/nginx/html -type f | head -20; \
    else \
        echo "✅ index.html encontrado"; \
    fi

# Criar configuração Nginx otimizada para SPA
RUN echo 'server { \
    listen 8081; \
    listen [::]:8081; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    \
    # Compressão gzip \
    gzip on; \
    gzip_vary on; \
    gzip_min_length 1024; \
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json; \
    \
    # Cache de assets estáticos \
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ { \
        expires 1y; \
        add_header Cache-Control "public, immutable"; \
    } \
    \
    # SPA routing - todas as rotas vão para index.html \
    location / { \
        try_files $uri $uri/ /index.html; \
        add_header X-Frame-Options "SAMEORIGIN" always; \
        add_header X-Content-Type-Options "nosniff" always; \
        add_header X-XSS-Protection "1; mode=block" always; \
    } \
    \
    # Security headers \
    add_header Referrer-Policy "no-referrer-when-downgrade" always; \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 8081

USER nginx

# Healthcheck otimizado
HEALTHCHECK --interval=30s --timeout=5s --retries=3 --start-period=10s \
    CMD wget --quiet --tries=1 --spider http://localhost:8081/ || exit 1

# Labels para identificação
LABEL maintainer="Cortex Pocket Team" \
      description="Plataforma de Reskilling e Qualificação" \
      version="1.0.0"

CMD ["nginx", "-g", "daemon off;"]
