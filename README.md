# 🧠 Cortex Pocket  
**Desenvolvedores:** RM99756 – Kayky Oliveira Schunck | RM99902 – Leonardo Schunck Rainha  

> Plataforma de Reskilling e Qualificação para o Futuro do Trabalho

Cortex Pocket é um aplicativo mobile gamificado que utiliza **microlearning**, **aprendizado interativo** e **persistência local** para preparar profissionais para as transformações digitais. Com perguntas sobre tecnologias emergentes e explicações detalhadas, o app promove **reskilling**, **aprendizado adaptativo** e **desenvolvimento contínuo**, acessível em qualquer dispositivo.

---

# 🎯 Alinhamento ao Tema: *O Futuro do Trabalho*

## ✅ Reskilling e Requalificação
- Conteúdos sobre **IA, Cloud, IoT, Blockchain, Segurança, APIs e TI Verde**.  
- Mapeamento de competências através de XP, níveis e progresso por tópico.  
- Adaptado às exigências do mercado de trabalho moderno.

## ✅ Novas Formas de Aprender
- **Gamificação**: XP, níveis e conquistas.  
- **Microlearning**: sessões curtas e eficientes com 10 perguntas por tema.  
- **Explicações inteligentes**: justificativa da resposta correta e das incorretas.

## ✅ IA como Parceira do Humano
- Conteúdo sobre IA generativa, ética, governança e automação inteligente.  
- Casos reais de uso de IA no ambiente corporativo.

## ✅ Ambientes Híbridos e Remotos
- App acessível no celular, web e emuladores.  
- Aprendizado assíncrono, flexível e contínuo.

## ✅ Oportunidades Justas e Inclusivas
- 100% gratuito  
- Democratiza o acesso ao conhecimento emergente  
- Ideal para estudantes, profissionais e empresas

---

# 🛠️ Tecnologias Utilizadas

### Frameworks
- **React Native 0.81.5**  
- **TypeScript 5.9.2**  
- **React 19.1.0**  
- **Expo 54.0.23**

### Persistência de Dados (CRUD completo)
- **AsyncStorage**  
  - Salvar progresso (XP, níveis, missões concluídas)  
  - Atualizar estatísticas  
  - Reset completo de dados  
  - Carregar tudo automaticamente a cada sessão  

### Navegação
- **React Navigation** com Stack Navigator

---

# 📱 Funcionalidades

## 🏠 Dashboard de Reskilling
- Exibe XP, nível, progresso e competências desenvolvidas  
- 10 tópicos críticos, cada um com 10 perguntas  
- Indicador de progresso por tema (X/10)

## 📚 Sessões de Microlearning
- Perguntas interativas com feedback imediato  
- Explicações detalhadas  
- Exemplos reais de empresas que aplicam cada tecnologia  

## 👤 Perfil e Estatísticas
- Sistema de níveis:
  - 🟢 *Iniciante*: 0–99 XP  
  - 🟡 *Explorador*: 100–249 XP  
  - 🔴 *Futurista*: 250+ XP  
- Histórico de missões  
- Refazer tópicos  
- Reset de progresso  

## 🎮 Gamificação
- +10 XP por resposta correta  
- Conquistas visuais  
- Progresso salvo automaticamente

---

# 📁 Estrutura do Projeto

```
cortex-pocket/
├── cortex/
│   ├── App.tsx                      # App principal
│   └── src/
│       ├── AppNavigator.tsx         # Navegação
│       ├── components/
│       │   ├── Header.tsx
│       │   ├── MissionList.tsx
│       │   ├── ConfirmModal.tsx
│       │   └── WelcomeModal.tsx
│       ├── data/
│       │   ├── questions.ts         # 100 perguntas
│       │   ├── explanations.ts      # Explicações
│       │   └── topics.ts            # Tópicos e categorias
│       ├── screens/
│       │   ├── HomeScreen.tsx
│       │   ├── MissionScreen.tsx
│       │   └── ProfileScreen.tsx
│       └── storage/
│           └── userStorage.ts       # CRUD de persistência
├── Dockerfile                       # Deploy
├── docker-compose.yml
├── index.js
├── package.json
├── app.json
└── README.md
```

---

# 🧩 Conteúdo Educacional

**100 perguntas** organizadas em **10 tópicos essenciais** para o futuro do trabalho:

- IA Generativa  
- Automação Inteligente  
- LGPD/GDPR  
- Ética & Viés Algorítmico  
- Cloud Computing  
- IoT  
- TI Verde  
- Cibersegurança  
- APIs & Integração  
- Blockchain  

Cada pergunta inclui:
- Explicação da correta  
- Motivo das incorretas  
- Caso real corporativo  

---

# 🚀 Instalação

```bash
git clone <url-do-repositorio>
cd cortex-pocket
npm install
npm start
```

---

# ▶️ Execução

## Desenvolvimento
```bash
npm start
npm run ios
npm run android
npm run web
```

## Testar no Celular
1. Instale o app **Expo Go**  
2. Rode `npm start`  
3. Escaneie o QR Code exibido  

---

# 🐳 Docker (Deploy)

```bash
docker compose up -d --build
docker compose logs -f
docker compose down
```

Aplicação:  
**http://localhost:8081**

---

# ✅ Requisitos Atendidos

- ✔️ React Native  
- ✔️ Persistência (AsyncStorage com CRUD completo)  
- ✔️ Gamificação  
- ✔️ Microlearning  
- ✔️ 100 perguntas + explicações  
- ✔️ Multiplataforma  
- ✔️ Aderente ao tema “O Futuro do Trabalho”

---

# 👥 Sobre

Projeto desenvolvido para a disciplina **Desenvolvimento Mobile – FIAP**.

**Autores:**
- RM99756 – Kayky Oliveira Schunck  
- RM99902 – Leonardo Schunck Rainha
