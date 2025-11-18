# Cortex Pocket - Web Server

Servidor web para testes OWASP ZAP.

## Comandos Rápidos

### Build e Executar

```bash
cd cortex-pocket/web-server

# Build da imagem
docker build -t cortex-pocket-web:latest .

# Executar
docker run -d --name cortex-pocket-web -p 8081:8081 cortex-pocket-web:latest
```

### Com Docker Compose (Recomendado)

```bash
cd cortex-pocket/web-server
docker compose up -d
```

### Verificar

```bash
# Ver logs
docker logs cortex-pocket-web

# Testar
curl http://localhost:8081
curl http://localhost:8081/health
```

## Endpoints Disponíveis

- `GET /` - Página principal
- `GET /health` - Health check
- `GET /api/info` - Informações da API
- `POST /api/login` - Endpoint de login (teste)
- `GET /api/data` - Endpoint de dados
- `GET /api/search?q=termo` - Busca com parâmetros

## Para OWASP ZAP

O servidor está configurado para rodar em `http://localhost:8081` e pode ser escaneado pelo OWASP ZAP.

