const express = require("express");
const path = require("path");
const app = express();

// Middleware para parsing JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos (se houver build web)
app.use(express.static(path.join(__dirname, "public")));

// Rota principal
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cortex Pocket - Servidor de Teste</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: 50px auto;
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        .container {
          background: rgba(255, 255, 255, 0.1);
          padding: 30px;
          border-radius: 10px;
          backdrop-filter: blur(10px);
        }
        h1 { color: #fff; }
        .endpoint {
          background: rgba(0, 0, 0, 0.2);
          padding: 15px;
          margin: 10px 0;
          border-radius: 5px;
          border-left: 4px solid #fff;
        }
        code {
          background: rgba(0, 0, 0, 0.3);
          padding: 2px 6px;
          border-radius: 3px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🧠 Cortex Pocket</h1>
        <p>Servidor de Teste para OWASP ZAP</p>
        
        <div class="endpoint">
          <h3>Endpoints Disponíveis:</h3>
          <ul>
            <li><code>GET /</code> - Página principal</li>
            <li><code>GET /health</code> - Health check</li>
            <li><code>GET /api/info</code> - Informações da API</li>
            <li><code>POST /api/login</code> - Endpoint de login (teste)</li>
            <li><code>GET /api/data</code> - Endpoint de dados (teste)</li>
          </ul>
        </div>
      </div>
    </body>
    </html>
  `);
});

// Health check
app.get("/health", (req, res) => {
  res.json({ 
    status: "ok", 
    message: "Servidor funcionando",
    timestamp: new Date().toISOString()
  });
});

// API Info
app.get("/api/info", (req, res) => {
  res.json({
    name: "Cortex Pocket API",
    version: "1.0.0",
    description: "API de teste para OWASP ZAP",
    endpoints: [
      "/",
      "/health",
      "/api/info",
      "/api/login",
      "/api/data"
    ]
  });
});

// Endpoint de login (para testar vulnerabilidades)
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  
  // Simulação de login (NUNCA fazer isso em produção!)
  if (username === "admin" && password === "admin123") {
    res.json({ 
      success: true, 
      message: "Login realizado com sucesso",
      token: "fake-jwt-token-12345"
    });
  } else {
    res.status(401).json({ 
      success: false, 
      message: "Credenciais inválidas" 
    });
  }
});

// Endpoint de dados
app.get("/api/data", (req, res) => {
  res.json({
    topics: [
      { id: 1, name: "Inteligência Artificial", questions: 10 },
      { id: 2, name: "Cloud Computing", questions: 10 },
      { id: 3, name: "Blockchain", questions: 10 },
      { id: 4, name: "IoT", questions: 10 }
    ],
    users: [
      { id: 1, name: "Usuário Teste", level: 5, xp: 1250 }
    ]
  });
});

// Endpoint com parâmetros (para testar SQL injection, XSS, etc)
app.get("/api/search", (req, res) => {
  const query = req.query.q || "";
  res.json({
    query: query,
    results: `Resultados para: ${query}`
  });
});

const PORT = process.env.PORT || 8081;
const HOST = process.env.HOST || "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log(`Servidor rodando em http://${HOST}:${PORT}`);
  console.log(`Health check: http://${HOST}:${PORT}/health`);
});

