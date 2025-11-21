# 🧠 Cortex Pocket
  Desenvolvedores: RM99756 Kayky Oliveira Schunck - RM99902 Leonardo Schunck Rainha
> Plataforma de Reskilling e Qualificação para o Futuro do Trabalho

Cortex Pocket é uma solução mobile que utiliza **gamificação e microlearning** para preparar profissionais para as transformações digitais. O app foca em **reskilling** (requalificação) através de perguntas interativas sobre tecnologias emergentes, ajudando pessoas a se adaptarem às novas demandas do mercado e empresas a formarem equipes preparadas para os novos tempos.

## 🎯 Alinhamento com o Tema: "O Futuro do Trabalho"

### Como Resolvemos os Desafios Propostos:

#### ✅ **Reskilling e Requalificação**
- Plataforma focada em tecnologias emergentes (IA, Cloud, Blockchain, IoT)
- Sistema de progresso que mapeia competências adquiridas
- Preparação para carreiras que ainda não existem

#### ✅ **Novas Formas de Aprendizado**
- **Gamificação**: Sistema de XP, níveis e conquistas
- **Microlearning**: Sessões de 10 perguntas por tópico
- **Aprendizado Adaptativo**: Progresso salvo e rastreável

#### ✅ **IA como Parceira do Ser Humano**
- Conteúdo sobre IA Generativa e Automação Inteligente
- Ensina como usar IA para aumentar produtividade
- Exemplos práticos de empresas que utilizam IA no trabalho

#### ✅ **Ambientes Híbridos/Remotos**
- App multiplataforma (mobile e web) - funciona em qualquer lugar
- Aprendizado assíncrono, no ritmo do usuário
- Acessível de casa, escritório ou em trânsito

#### ✅ **Oportunidades Justas, Inclusivas e Sustentáveis**
- **Acesso Gratuito**: Qualquer pessoa pode aprender
- **Inclusão Digital**: Democratiza conhecimento sobre tecnologias críticas
- **Preparação Empresarial**: Ajuda empresas a qualificar equipes

## 🚀 Tecnologias Utilizadas

### Linguagem e Framework
- **TypeScript** `5.9.2` - Tipagem estática para maior confiabilidade
- **React Native** `0.81.5` - Desenvolvimento multiplataforma (iOS, Android, Web)
- **React** `19.1.0` - Biblioteca para construção de interfaces
- **Expo** `54.0.23` - Plataforma de desenvolvimento e deploy

### Persistência de Dados (Requisito Obrigatório)
- **AsyncStorage** (`@react-native-async-storage/async-storage`) - Armazenamento local persistente
  - ✅ Salva progresso do usuário (XP, nível, missões concluídas)
  - ✅ Persistência entre sessões sem necessidade de backend
  - ✅ Dados armazenados localmente no dispositivo
  - ✅ Implementação completa de CRUD (Create, Read, Update, Delete)

### Navegação
- **React Navigation** - Sistema de navegação entre telas
- **Stack Navigator** - Navegação em pilha para fluxo linear

## 📱 Funcionalidades do App

### 🏠 Tela Inicial - Dashboard de Reskilling
- **Progresso de Qualificação**: Visualize seu nível, XP acumulado e competências desenvolvidas
- **Mapeamento de Tópicos**: 10 temas críticos organizados por categoria:
  - **IA & Automação**: IA Generativa, Automação Inteligente no Trabalho
  - **Dados, Ética & Governança**: LGPD/GDPR, Ética e Viés em IA
  - **Operações Digitais**: Cloud e Custos, IoT, TI Verde
  - **Segurança & Integração**: Cibersegurança, APIs e Integração
  - **Inovação & Web3**: Blockchain e Tecnologias Emergentes
- **Indicador de Progresso**: Veja quantas perguntas você já respondeu de cada tema (X/10)

### 📚 Sessão de Aprendizado - Microlearning
- **10 Perguntas por Tópico**: Sessões focadas para aprendizado eficiente
- **Feedback Imediato**: Respostas corretas/incorretas com feedback visual
- **Explicações Detalhadas**: Após cada resposta, você aprende:
  - ✅ Por que a resposta correta está certa
  - ❌ Por que as outras alternativas estão erradas
  - 🌍 Exemplos do mundo real de aplicação no trabalho
  - 🏢 Empresas que utilizam essa tecnologia
- **Progresso Visual**: "Pergunta X de Y" e "Restam Z perguntas neste tema"

### 👤 Perfil e Estatísticas - Rastreamento de Competências
- **Sistema de Níveis** (mapeamento de progresso):
  - 🟢 **Iniciante** (0-99 XP) - Iniciando jornada de reskilling
  - 🟡 **Explorador** (100-249 XP) - Expandindo conhecimentos
  - 🔴 **Futurista** (250+ XP) - Preparado para o futuro do trabalho
- **Histórico de Missões**: Veja todas as competências desenvolvidas
- **Refazer Missões**: Revise tópicos já completados para reforçar aprendizado
- **Reset de Progresso**: Comece do zero quando quiser

### 🎮 Gamificação - Engajamento e Motivação
- **Sistema de XP**: Ganhe 10 XP por pergunta respondida corretamente
- **Progresso Persistente**: Seu avanço é salvo automaticamente no AsyncStorage
- **Conquistas Visuais**: Acompanhe sua evolução através dos níveis

## 🛠️ Como Executar

### Pré-requisitos
- Node.js 18+
- npm, yarn ou pnpm
- Expo Go (para testar no celular) ou Android Studio / Xcode (para emuladores)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/cortex-pocket.git
cd cortex-pocket

# Instale as dependências
npm install
```

### Executar

```bash
# Iniciar servidor de desenvolvimento
npm start

# Executar no iOS (requer macOS)
npm run ios

# Executar no Android
npm run android

# Executar na Web
npm run web
```

### Testar no Celular
1. Instale o app **Expo Go** ([iOS](https://apps.apple.com/app/expo-go/id982107779) | [Android](https://play.google.com/store/apps/details?id=host.exp.exponent))
2. Execute `npm start`
3. Escaneie o QR code com o Expo Go

## 📁 Estrutura do Projeto

```
cortex-pocket/
├── cortex/
│   ├── App.tsx              # Componente raiz
│   └── src/
│       ├── AppNavigator.tsx # Configuração de navegação
│       ├── components/      # Componentes reutilizáveis
│       ├── data/            # 100 perguntas + explicações
│       ├── screens/         # Telas (Home, Mission, Profile)
│       └── storage/         # Gerenciamento AsyncStorage
├── package.json
└── app.json
```

## 🎯 Conteúdo Educacional

- **10 Tópicos Críticos** sobre tecnologias emergentes do futuro do trabalho
- **100 Perguntas** com explicações detalhadas
- **Exemplos Reais** de aplicação no mundo corporativo
- **Empresas de Referência** que utilizam cada tecnologia

## ✅ Atendimento aos Requisitos Técnicos

- ✅ **React Native**: Aplicativo desenvolvido em React Native
- ✅ **AsyncStorage**: Persistência completa de dados localmente
- ✅ **Tema "O Futuro do Trabalho"**: Solução focada em reskilling e preparação profissional
- ✅ **Criatividade**: Gamificação e microlearning para engajamento
- ✅ **Simplicidade**: Solução funcional e direta ao ponto


**Desenvolvido para preparar profissionais para o futuro do trabalho** 🚀
