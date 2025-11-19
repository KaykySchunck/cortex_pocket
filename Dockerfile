# ---------------------------------------------------
# STAGE 1 – BUILD DO EXPO WEB
# ---------------------------------------------------
FROM node:20-bullseye AS builder

WORKDIR /app

# Copiar dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar código
COPY . .

# Remover expo-router temporariamente (não é usado no projeto, apenas está instalado)
# Isso evita que o Expo tente usar static rendering que requer rotas do Expo Router
RUN npm uninstall expo-router || true

# Gerar build web estático do Expo (sem Expo Router)
# Força uso de dist/ como diretório de saída
RUN npx expo export --platform web --output-dir dist

# Verificar se o diretório foi criado
RUN if [ ! -d "dist" ]; then \
    echo "ERRO: Diretório dist não foi criado!" && \
    echo "Listando diretórios disponíveis:" && \
    ls -la /app/ && \
    exit 1; \
    else \
    echo "✓ Build criado em dist/" && \
    ls -la dist/ | head -20; \
    fi

# ---------------------------------------------------
# STAGE 2 – NGINX SERVINDO O BUILD
# ---------------------------------------------------
FROM nginx:alpine

# Copiar build web (expo export --platform web --output-dir dist cria dist/)
COPY --from=builder /app/dist /usr/share/nginx/html

# Criar configuração Nginx personalizada
RUN echo 'server { \
    listen 8081; \
    listen [::]:8081; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
    try_files $uri $uri/ /index.html; \
    } \
    }' > /etc/nginx/conf.d/default.conf

EXPOSE 8081

# Healthcheck interno (opcional)
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:8081 || exit 1

CMD ["nginx", "-g", "daemon off;"]
