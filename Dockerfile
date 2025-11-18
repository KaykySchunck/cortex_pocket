# Stage 1: Build
FROM node:18-alpine AS builder


WORKDIR /app

# Copiar arquivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar codigo
COPY . .

# Build web do Expo
RUN npx expo export:web --output-dir web-build

# Stage 2: Serve com nginx
FROM nginx:alpine

# Copiar arquivos buildados
COPY --from=builder /app/web-build /usr/share/nginx/html

# Configurar nginx para porta 8081
RUN sed -i 's/listen       80;/listen       8081;/' /etc/nginx/conf.d/default.conf && \
    sed -i 's/server_name  localhost;/server_name  localhost;\n        listen [::]:8081;/' /etc/nginx/conf.d/default.conf

# Expor porta
EXPOSE 8081

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:8081 || exit 1

# Iniciar nginx
CMD ["nginx", "-g", "daemon off;"]

