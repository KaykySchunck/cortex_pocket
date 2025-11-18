FROM node:18-alpine

WORKDIR /app

# Copiar arquivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install --production

# Copiar codigo da aplicacao
COPY . .

# Criar usuario nao-root para seguranca
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 && \
    chown -R nodejs:nodejs /app

USER nodejs

# Expor porta
EXPOSE 8081

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:8081/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Comando para iniciar
CMD ["node", "server.js"]

