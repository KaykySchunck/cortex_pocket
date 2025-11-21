🎯 Alinhamento ao Tema: O Futuro do Trabalho
Como o Cortex Pocket responde aos desafios atuais:
✅ Reskilling e Requalificação

Conteúdos sobre IA, Cloud, IoT, Blockchain, Segurança, APIs, TI Verde e mais.

Mapeamento de competências com XP, níveis e progresso visual.

Ajuda profissionais e empresas a acompanhar carreiras em transformação.

✅ Novas Formas de Aprender

Gamificação: XP, níveis, conquistas.

Microlearning: sessões de 10 perguntas por tema.

Explicações inteligentes: por que a resposta certa é certa e as erradas são erradas.

✅ IA como Parceira do Humano

Conteúdo sobre IA generativa, ética, governança e automação inteligente.

Exemplos práticos de uso no mercado de trabalho.

✅ Ambientes Híbridos e Remotos

Funciona no celular, computador e navegador.

Aprendizagem assíncrona, acessível, no ritmo do usuário.

✅ Oportunidades Justas, Inclusivas e Sustentáveis

100% gratuito

Democratiza conhecimento sobre tecnologias críticas

Ideal para equipes corporativas e estudantes que querem se preparar

🛠️ Tecnologias Utilizadas
Linguagens e Frameworks

React Native 0.81.5 — Multiplataforma (iOS, Android, Web)

TypeScript 5.9.2 — Tipagem estática

React 19.1.0 — Interfaces reativas

Expo 54.0.23 — Facilita desenvolvimento e deploy

Persistência de Dados (Requisito Obrigatório atendido)

AsyncStorage – CRUD completo:

✔️ Salva XP, nível e progresso

✔️ Atualiza missões e temas concluídos

✔️ Carrega dados automaticamente

✔️ Permite reset de conta

✔️ Sem necessidade de backend

Navegação

React Navigation

Stack Navigator para fluxo linear e intuitivo

📱 Funcionalidades do Aplicativo
🏠 Dashboard de Reskilling

Exibe XP, nível e competências desenvolvidas

10 tópicos críticos organizados por categoria

Progresso de cada tema (X/10 perguntas)

📚 Sessões de Microlearning

10 perguntas por tema

Feedback imediato

Explicações completas

Exemplos reais de empresas (Google, IBM, Tesla, Nubank, AWS etc.)

👤 Perfil & Estatísticas

3 níveis de evolução:

🟢 Iniciante: 0–99 XP

🟡 Explorador: 100–249 XP

🔴 Futurista: 250+ XP

Histórico de missões

Refazer tópicos

Reset geral de progresso

🎮 Gamificação

+10 XP por resposta certa

Conquistas visuais

Progresso salvo automaticamente

📁 Estrutura do Projeto
cortex-pocket/
├── cortex/
│   ├── App.tsx                      # App principal
│   └── src/
│       ├── AppNavigator.tsx         # Navegação
│       ├── components/              # Componentes globais
│       │   ├── Header.tsx
│       │   ├── MissionList.tsx
│       │   ├── ConfirmModal.tsx
│       │   └── WelcomeModal.tsx
│       ├── data/                    # Conteúdo educacional
│       │   ├── questions.ts         # 100 perguntas
│       │   ├── explanations.ts      # Explicações detalhadas
│       │   └── topics.ts            # Tópicos e categorias
│       ├── screens/                 # Telas principais
│       │   ├── HomeScreen.tsx
│       │   ├── MissionScreen.tsx
│       │   └── ProfileScreen.tsx
│       └── storage/
│           └── userStorage.ts       # AsyncStorage (CRUD)
├── Dockerfile                       # Deploy
├── docker-compose.yml
├── index.js
├── package.json
├── app.json
└── README.md

🧩 Conteúdo Educacional

100 perguntas distribuídas em 10 tópicos:

IA & Automação

IA Generativa

Automação Inteligente

Dados & Governança

LGPD/GDPR

Ética e Viés em IA

Operações Digitais

Cloud Computing

IoT

TI Verde

Segurança & Integração

Cibersegurança

APIs

Inovação & Web3

Blockchain

Tecnologias emergentes

Cada pergunta possui:

Explicação do acerto

Por que as alternativas estavam erradas

Caso real de aplicação no mercado

🚀 Instalação
git clone <url-do-repositorio>
cd cortex-pocket
npm install
npm start

▶️ Como Executar
No Desenvolvimento Local
npm start
npm run ios
npm run android
npm run web

Testar no Celular

Baixe o Expo Go

Rode npm start

Escaneie o QR Code

🐳 Docker (Produção)
docker compose up -d --build
docker compose logs -f
docker compose down


Aplicação disponível em:
http://localhost:8081

✅ Requisitos Técnicos Atendidos
✔️ React Native
✔️ Persistência (AsyncStorage + CRUD completo)
✔️ Tema “Futuro do Trabalho”
✔️ Microlearning
✔️ Gamificação
✔️ Multiplataforma
✔️ 100 perguntas + explicações
👥 Sobre

Projeto desenvolvido para a disciplina Desenvolvimento Mobile – FIAP
Criado por:

RM99756 – Kayky Oliveira Schunck

RM99902 – Leonardo Schunck Rainha
