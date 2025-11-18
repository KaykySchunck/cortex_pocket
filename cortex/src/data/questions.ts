import { EXPLANATIONS } from './explanations';

export type QuestionExplanation = {
  correctAnswer: string;
  whyCorrect: string;
  wrongAnswers: Array<{
    texto: string;
    whyWrong: string;
  }>;
  realWorldExample: string;
  companiesUsing: string[];
};

export type Question = {
  id: string;
  topicId: string;
  enunciado: string;
  alternativas: { texto: string; correta: boolean }[];
  explanation?: QuestionExplanation;
};

// Perguntas para cada tópico (10 perguntas por tópico)
export const QUESTIONS: Question[] = [
  // IA Generativa e Produtividade
  {
    id: 'ia-gen-001',
    topicId: 'ia-generativa',
    enunciado: 'O que é IA Generativa?',
    alternativas: [
      { texto: 'IA que apenas analisa dados existentes', correta: false },
      { texto: 'IA que cria conteúdo novo (texto, imagens, código) a partir de padrões aprendidos', correta: true },
      { texto: 'IA que só funciona offline', correta: false },
      { texto: 'IA que não precisa de treinamento', correta: false },
    ],
  },
  {
    id: 'ia-gen-002',
    topicId: 'ia-generativa',
    enunciado: 'Qual é a principal aplicação prática de IA Generativa no trabalho?',
    alternativas: [
      { texto: 'Substituir completamente os funcionários', correta: false },
      { texto: 'Aumentar produtividade criando rascunhos, resumos e automatizando tarefas repetitivas', correta: true },
      { texto: 'Apenas gerar imagens aleatórias', correta: false },
      { texto: 'Funcionar sem internet', correta: false },
    ],
  },
  {
    id: 'ia-gen-003',
    topicId: 'ia-generativa',
    enunciado: 'ChatGPT, Claude e Gemini são exemplos de:',
    alternativas: [
      { texto: 'Redes sociais', correta: false },
      { texto: 'Modelos de IA Generativa de linguagem', correta: true },
      { texto: 'Sistemas operacionais', correta: false },
      { texto: 'Bancos de dados', correta: false },
    ],
  },
  {
    id: 'ia-gen-004',
    topicId: 'ia-generativa',
    enunciado: 'O que significa "prompt" no contexto de IA Generativa?',
    alternativas: [
      { texto: 'Um comando de terminal', correta: false },
      { texto: 'A instrução ou pergunta que você dá para a IA gerar uma resposta', correta: true },
      { texto: 'Um tipo de erro', correta: false },
      { texto: 'Um arquivo de configuração', correta: false },
    ],
  },
  {
    id: 'ia-gen-005',
    topicId: 'ia-generativa',
    enunciado: 'Qual é um uso ético de IA Generativa?',
    alternativas: [
      { texto: 'Criar conteúdo plagiado sem crédito', correta: false },
      { texto: 'Usar como assistente para aumentar produtividade, sempre revisando e validando o resultado', correta: true },
      { texto: 'Substituir completamente o pensamento crítico', correta: false },
      { texto: 'Gerar informações falsas intencionalmente', correta: false },
    ],
  },
  {
    id: 'ia-gen-006',
    topicId: 'ia-generativa',
    enunciado: 'O que é "hallucination" em IA Generativa?',
    alternativas: [
      { texto: 'Quando a IA cria informações que parecem corretas mas são inventadas', correta: true },
      { texto: 'Quando a IA funciona perfeitamente', correta: false },
      { texto: 'Um tipo de erro de conexão', correta: false },
      { texto: 'Quando a IA desliga sozinha', correta: false },
    ],
  },
  {
    id: 'ia-gen-007',
    topicId: 'ia-generativa',
    enunciado: 'Qual ferramenta de IA Generativa é melhor para gerar código?',
    alternativas: [
      { texto: 'Apenas ChatGPT', correta: false },
      { texto: 'Ferramentas como GitHub Copilot, Cursor ou ChatGPT, dependendo da necessidade', correta: true },
      { texto: 'Apenas editores de texto tradicionais', correta: false },
      { texto: 'Nenhuma ferramenta funciona', correta: false },
    ],
  },
  {
    id: 'ia-gen-008',
    topicId: 'ia-generativa',
    enunciado: 'O que significa "fine-tuning" em IA Generativa?',
    alternativas: [
      { texto: 'Ajustar o modelo para tarefas específicas usando dados especializados', correta: true },
      { texto: 'Aumentar o tamanho da tela', correta: false },
      { texto: 'Melhorar a velocidade da internet', correta: false },
      { texto: 'Formatar um computador', correta: false },
    ],
  },
  {
    id: 'ia-gen-009',
    topicId: 'ia-generativa',
    enunciado: 'Qual é uma limitação importante da IA Generativa?',
    alternativas: [
      { texto: 'Pode gerar informações incorretas e precisa de validação humana', correta: true },
      { texto: 'Funciona apenas em computadores caros', correta: false },
      { texto: 'Não pode ser usada em nenhuma situação', correta: false },
      { texto: 'Precisa de internet 24/7 para funcionar', correta: false },
    ],
  },
  {
    id: 'ia-gen-010',
    topicId: 'ia-generativa',
    enunciado: 'Como a IA Generativa pode ajudar na produtividade?',
    alternativas: [
      { texto: 'Fazendo todo o trabalho sozinha sem supervisão', correta: false },
      { texto: 'Automatizando tarefas repetitivas, gerando rascunhos e acelerando processos criativos', correta: true },
      { texto: 'Substituindo completamente a necessidade de pensar', correta: false },
      { texto: 'Funcionando apenas para programadores', correta: false },
    ],
  },

  // Automação Inteligente no Trabalho
  {
    id: 'auto-001',
    topicId: 'automacao-trabalho',
    enunciado: 'O que é RPA (Robotic Process Automation)?',
    alternativas: [
      { texto: 'Robôs físicos que trabalham em fábricas', correta: false },
      { texto: 'Software que automatiza tarefas repetitivas em sistemas digitais', correta: true },
      { texto: 'Um tipo de inteligência artificial avançada', correta: false },
      { texto: 'Apenas automação de emails', correta: false },
    ],
  },
  {
    id: 'auto-002',
    topicId: 'automacao-trabalho',
    enunciado: 'Qual é a diferença entre RPA tradicional e Automação Inteligente?',
    alternativas: [
      { texto: 'Não há diferença', correta: false },
      { texto: 'Automação Inteligente combina RPA com IA para lidar com variações e decisões', correta: true },
      { texto: 'RPA é mais caro', correta: false },
      { texto: 'Automação Inteligente não usa computadores', correta: false },
    ],
  },
  {
    id: 'auto-003',
    topicId: 'automacao-trabalho',
    enunciado: 'O que significa "governança" em automação?',
    alternativas: [
      { texto: 'Controlar quem pode usar automação e como', correta: false },
      { texto: 'Gerenciar, monitorar e garantir que automações funcionem corretamente e de forma segura', correta: true },
      { texto: 'Apenas criar automações', correta: false },
      { texto: 'Desligar todas as automações', correta: false },
    ],
  },
  {
    id: 'auto-004',
    topicId: 'automacao-trabalho',
    enunciado: 'Qual tarefa é ideal para automação?',
    alternativas: [
      { texto: 'Tarefas criativas que precisam de julgamento humano', correta: false },
      { texto: 'Tarefas repetitivas, bem definidas e com regras claras', correta: true },
      { texto: 'Tarefas que mudam constantemente', correta: false },
      { texto: 'Tarefas que precisam de emoção', correta: false },
    ],
  },
  {
    id: 'auto-005',
    topicId: 'automacao-trabalho',
    enunciado: 'O que é um "bot" no contexto de automação?',
    alternativas: [
      { texto: 'Um robô físico', correta: false },
      { texto: 'Um programa que executa tarefas automatizadas', correta: true },
      { texto: 'Um tipo de vírus', correta: false },
      { texto: 'Um erro no sistema', correta: false },
    ],
  },
  {
    id: 'auto-006',
    topicId: 'automacao-trabalho',
    enunciado: 'Qual é um benefício da automação inteligente?',
    alternativas: [
      { texto: 'Eliminar todos os empregos', correta: false },
      { texto: 'Liberar tempo dos funcionários para tarefas mais estratégicas e reduzir erros', correta: true },
      { texto: 'Tornar tudo mais lento', correta: false },
      { texto: 'Aumentar custos sem benefícios', correta: false },
    ],
  },
  {
    id: 'auto-007',
    topicId: 'automacao-trabalho',
    enunciado: 'O que significa "process mining" em automação?',
    alternativas: [
      { texto: 'Extrair minérios com robôs', correta: false },
      { texto: 'Analisar processos reais para identificar oportunidades de automação', correta: true },
      { texto: 'Criar processos do zero', correta: false },
      { texto: 'Desligar processos', correta: false },
    ],
  },
  {
    id: 'auto-008',
    topicId: 'automacao-trabalho',
    enunciado: 'Qual é um risco da automação sem governança?',
    alternativas: [
      { texto: 'Automações podem causar erros em cascata e problemas de segurança', correta: true },
      { texto: 'Nenhum risco existe', correta: false },
      { texto: 'Apenas custos menores', correta: false },
      { texto: 'Funcionários trabalham menos', correta: false },
    ],
  },
  {
    id: 'auto-009',
    topicId: 'automacao-trabalho',
    enunciado: 'O que é "hyperautomation"?',
    alternativas: [
      { texto: 'Automação muito rápida', correta: false },
      { texto: 'Combinar múltiplas tecnologias (RPA, IA, ML) para automatizar processos complexos', correta: true },
      { texto: 'Automação apenas de uma tarefa', correta: false },
      { texto: 'Automação sem tecnologia', correta: false },
    ],
  },
  {
    id: 'auto-010',
    topicId: 'automacao-trabalho',
    enunciado: 'Como começar um projeto de automação?',
    alternativas: [
      { texto: 'Automatizar tudo de uma vez', correta: false },
      { texto: 'Identificar processos repetitivos, começar pequeno e escalar gradualmente', correta: true },
      { texto: 'Contratar apenas robôs físicos', correta: false },
      { texto: 'Ignorar processos existentes', correta: false },
    ],
  },

  // Dados, LGPD/GDPR e Governança
  {
    id: 'dados-001',
    topicId: 'dados-lgpd-gdpr',
    enunciado: 'O que significa LGPD?',
    alternativas: [
      { texto: 'Lei Geral de Proteção de Dados', correta: true },
      { texto: 'Linguagem de Programação de Dados', correta: false },
      { texto: 'Sistema de Gerenciamento de Dados', correta: false },
      { texto: 'Apenas uma sigla sem significado', correta: false },
    ],
  },
  {
    id: 'dados-002',
    topicId: 'dados-lgpd-gdpr',
    enunciado: 'O que são "dados pessoais" segundo a LGPD?',
    alternativas: [
      { texto: 'Apenas CPF e RG', correta: false },
      { texto: 'Qualquer informação que identifique uma pessoa natural', correta: true },
      { texto: 'Apenas dados bancários', correta: false },
      { texto: 'Dados de empresas', correta: false },
    ],
  },
  {
    id: 'dados-003',
    topicId: 'dados-lgpd-gdpr',
    enunciado: 'Qual é o princípio fundamental da LGPD?',
    alternativas: [
      { texto: 'Coletar o máximo de dados possível', correta: false },
      { texto: 'Proteger a privacidade e dar controle ao titular sobre seus dados', correta: true },
      { texto: 'Compartilhar dados livremente', correta: false },
      { texto: 'Armazenar dados sem limite de tempo', correta: false },
    ],
  },
  {
    id: 'dados-004',
    topicId: 'dados-lgpd-gdpr',
    enunciado: 'O que é GDPR?',
    alternativas: [
      { texto: 'Regulamento Geral de Proteção de Dados da União Europeia', correta: true },
      { texto: 'Sistema de gestão de dados', correta: false },
      { texto: 'Apenas uma lei brasileira', correta: false },
      { texto: 'Um tipo de banco de dados', correta: false },
    ],
  },
  {
    id: 'dados-005',
    topicId: 'dados-lgpd-gdpr',
    enunciado: 'O que significa "consentimento" na LGPD?',
    alternativas: [
      { texto: 'Aceitação livre, informada e inequívoca do titular', correta: true },
      { texto: 'Apenas um checkbox', correta: false },
      { texto: 'Coleta automática sem aviso', correta: false },
      { texto: 'Não precisa de consentimento', correta: false },
    ],
  },
  {
    id: 'dados-006',
    topicId: 'dados-lgpd-gdpr',
    enunciado: 'O que é "governança de dados"?',
    alternativas: [
      { texto: 'Apenas armazenar dados', correta: false },
      { texto: 'Gerenciar a disponibilidade, usabilidade, integridade e segurança dos dados', correta: true },
      { texto: 'Deletar todos os dados', correta: false },
      { texto: 'Compartilhar dados publicamente', correta: false },
    ],
  },
  {
    id: 'dados-007',
    topicId: 'dados-lgpd-gdpr',
    enunciado: 'Qual é uma violação de dados pessoais?',
    alternativas: [
      { texto: 'Acesso não autorizado a dados pessoais', correta: true },
      { texto: 'Armazenar dados com segurança', correta: false },
      { texto: 'Pedir consentimento', correta: false },
      { texto: 'Criptografar dados', correta: false },
    ],
  },
  {
    id: 'dados-008',
    topicId: 'dados-lgpd-gdpr',
    enunciado: 'O que é "anonimização" de dados?',
    alternativas: [
      { texto: 'Deletar dados', correta: false },
      { texto: 'Processo que torna dados impossíveis de identificar uma pessoa', correta: true },
      { texto: 'Compartilhar dados publicamente', correta: false },
      { texto: 'Criptografar dados', correta: false },
    ],
  },
  {
    id: 'dados-009',
    topicId: 'dados-lgpd-gdpr',
    enunciado: 'Qual é o papel do "Encarregado de Dados" (DPO)?',
    alternativas: [
      { texto: 'Coletar o máximo de dados', correta: false },
      { texto: 'Fiscalizar e orientar sobre proteção de dados pessoais', correta: true },
      { texto: 'Vender dados', correta: false },
      { texto: 'Ignorar a LGPD', correta: false },
    ],
  },
  {
    id: 'dados-010',
    topicId: 'dados-lgpd-gdpr',
    enunciado: 'Qual é uma sanção da LGPD?',
    alternativas: [
      { texto: 'Apenas advertência', correta: false },
      { texto: 'Multa de até 2% do faturamento ou R$ 50 milhões', correta: true },
      { texto: 'Nenhuma sanção existe', correta: false },
      { texto: 'Apenas bloqueio de dados', correta: false },
    ],
  },

  // Computação em Nuvem e Custos
  {
    id: 'cloud-001',
    topicId: 'cloud-custos',
    enunciado: 'O que é FinOps?',
    alternativas: [
      { texto: 'Finanças operacionais tradicionais', correta: false },
      { texto: 'Prática de gerenciar custos de nuvem de forma otimizada', correta: true },
      { texto: 'Um tipo de servidor', correta: false },
      { texto: 'Apenas calcular custos', correta: false },
    ],
  },
  {
    id: 'cloud-002',
    topicId: 'cloud-custos',
    enunciado: 'Qual é um princípio de otimização de custos em nuvem?',
    alternativas: [
      { texto: 'Usar sempre os recursos mais caros', correta: false },
      { texto: 'Desligar recursos não utilizados e usar instâncias reservadas', correta: true },
      { texto: 'Ignorar custos completamente', correta: false },
      { texto: 'Usar apenas servidores físicos', correta: false },
    ],
  },
  {
    id: 'cloud-003',
    topicId: 'cloud-custos',
    enunciado: 'O que significa "pay-as-you-go" em nuvem?',
    alternativas: [
      { texto: 'Pagar apenas pelo que usar', correta: true },
      { texto: 'Pagar tudo antecipadamente', correta: false },
      { texto: 'Serviço gratuito', correta: false },
      { texto: 'Pagar apenas uma vez', correta: false },
    ],
  },
  {
    id: 'cloud-004',
    topicId: 'cloud-custos',
    enunciado: 'O que é "right-sizing" em nuvem?',
    alternativas: [
      { texto: 'Ajustar recursos para o tamanho adequado da carga de trabalho', correta: true },
      { texto: 'Usar sempre o maior servidor', correta: false },
      { texto: 'Ignorar o tamanho', correta: false },
      { texto: 'Usar apenas servidores pequenos', correta: false },
    ],
  },
  {
    id: 'cloud-005',
    topicId: 'cloud-custos',
    enunciado: 'Qual é um benefício de usar instâncias reservadas?',
    alternativas: [
      { texto: 'Redução de custos para uso previsível', correta: true },
      { texto: 'Aumento automático de custos', correta: false },
      { texto: 'Sem benefícios', correta: false },
      { texto: 'Apenas flexibilidade', correta: false },
    ],
  },
  {
    id: 'cloud-006',
    topicId: 'cloud-custos',
    enunciado: 'O que é "cloud waste"?',
    alternativas: [
      { texto: 'Recursos de nuvem pagos mas não utilizados', correta: true },
      { texto: 'Lixo físico em datacenters', correta: false },
      { texto: 'Serviços gratuitos', correta: false },
      { texto: 'Recursos sempre utilizados', correta: false },
    ],
  },
  {
    id: 'cloud-007',
    topicId: 'cloud-custos',
    enunciado: 'Qual ferramenta ajuda a monitorar custos de nuvem?',
    alternativas: [
      { texto: 'Apenas planilhas Excel', correta: false },
      { texto: 'Dashboards nativos (AWS Cost Explorer, Azure Cost Management) e ferramentas terceirizadas', correta: true },
      { texto: 'Nenhuma ferramenta existe', correta: false },
      { texto: 'Apenas calculadoras manuais', correta: false },
    ],
  },
  {
    id: 'cloud-008',
    topicId: 'cloud-custos',
    enunciado: 'O que significa "auto-scaling" em relação a custos?',
    alternativas: [
      { texto: 'Ajustar recursos automaticamente conforme demanda, otimizando custos', correta: true },
      { texto: 'Aumentar custos automaticamente', correta: false },
      { texto: 'Manter sempre o mesmo tamanho', correta: false },
      { texto: 'Desligar tudo automaticamente', correta: false },
    ],
  },
  {
    id: 'cloud-009',
    topicId: 'cloud-custos',
    enunciado: 'Qual é uma estratégia de redução de custos em nuvem?',
    alternativas: [
      { texto: 'Usar sempre todos os recursos disponíveis', correta: false },
      { texto: 'Tagging adequado, monitoramento contínuo e otimização de arquitetura', correta: true },
      { texto: 'Ignorar custos', correta: false },
      { texto: 'Usar apenas servidores físicos', correta: false },
    ],
  },
  {
    id: 'cloud-010',
    topicId: 'cloud-custos',
    enunciado: 'O que é "multi-cloud strategy"?',
    alternativas: [
      { texto: 'Usar apenas um provedor', correta: false },
      { texto: 'Usar múltiplos provedores de nuvem para otimizar custos e evitar vendor lock-in', correta: true },
      { texto: 'Não usar nuvem', correta: false },
      { texto: 'Usar apenas servidores locais', correta: false },
    ],
  },

  // Cibersegurança
  {
    id: 'cyber-001',
    topicId: 'ciberseguranca',
    enunciado: 'O que é phishing?',
    alternativas: [
      { texto: 'Pescar peixes online', correta: false },
      { texto: 'Tentativa de enganar pessoas para obter informações sensíveis', correta: true },
      { texto: 'Um tipo de vírus', correta: false },
      { texto: 'Um protocolo de segurança', correta: false },
    ],
  },
  {
    id: 'cyber-002',
    topicId: 'ciberseguranca',
    enunciado: 'O que é ransomware?',
    alternativas: [
      { texto: 'Software que criptografa dados e exige pagamento para liberar', correta: true },
      { texto: 'Um tipo de antivírus', correta: false },
      { texto: 'Software de backup', correta: false },
      { texto: 'Um protocolo de rede', correta: false },
    ],
  },
  {
    id: 'cyber-003',
    topicId: 'ciberseguranca',
    enunciado: 'Qual é a melhor defesa contra phishing?',
    alternativas: [
      { texto: 'Ignorar todos os emails', correta: false },
      { texto: 'Educação dos usuários e verificação cuidadosa de links e remetentes', correta: true },
      { texto: 'Não usar email', correta: false },
      { texto: 'Abrir todos os links', correta: false },
    ],
  },
  {
    id: 'cyber-004',
    topicId: 'ciberseguranca',
    enunciado: 'O que é autenticação de dois fatores (2FA)?',
    alternativas: [
      { texto: 'Usar duas senhas iguais', correta: false },
      { texto: 'Adicionar uma segunda camada de verificação além da senha', correta: true },
      { texto: 'Não usar senha', correta: false },
      { texto: 'Usar apenas uma senha', correta: false },
    ],
  },
  {
    id: 'cyber-005',
    topicId: 'ciberseguranca',
    enunciado: 'O que significa "zero trust" em segurança?',
    alternativas: [
      { texto: 'Não confiar em ninguém, sempre verificar', correta: true },
      { texto: 'Confiar em todos', correta: false },
      { texto: 'Sem segurança', correta: false },
      { texto: 'Apenas firewall', correta: false },
    ],
  },
  {
    id: 'cyber-006',
    topicId: 'ciberseguranca',
    enunciado: 'O que é um "backup" em segurança?',
    alternativas: [
      { texto: 'Cópia de segurança dos dados para recuperação', correta: true },
      { texto: 'Deletar dados', correta: false },
      { texto: 'Criptografar dados', correta: false },
      { texto: 'Compartilhar dados', correta: false },
    ],
  },
  {
    id: 'cyber-007',
    topicId: 'ciberseguranca',
    enunciado: 'Qual é uma boa prática de senha?',
    alternativas: [
      { texto: 'Usar senhas simples e compartilhar', correta: false },
      { texto: 'Senhas fortes, únicas e uso de gerenciador de senhas', correta: true },
      { texto: 'Usar a mesma senha em tudo', correta: false },
      { texto: 'Não usar senhas', correta: false },
    ],
  },
  {
    id: 'cyber-008',
    topicId: 'ciberseguranca',
    enunciado: 'O que é "patch management"?',
    alternativas: [
      { texto: 'Aplicar atualizações de segurança regularmente', correta: true },
      { texto: 'Ignorar atualizações', correta: false },
      { texto: 'Desligar sistemas', correta: false },
      { texto: 'Não atualizar nada', correta: false },
    ],
  },
  {
    id: 'cyber-009',
    topicId: 'ciberseguranca',
    enunciado: 'O que é "social engineering"?',
    alternativas: [
      { texto: 'Manipular pessoas para obter informações ou acesso', correta: true },
      { texto: 'Engenharia social de redes', correta: false },
      { texto: 'Um tipo de software', correta: false },
      { texto: 'Proteção automática', correta: false },
    ],
  },
  {
    id: 'cyber-010',
    topicId: 'ciberseguranca',
    enunciado: 'Qual é a importância de uma "cultura de segurança"?',
    alternativas: [
      { texto: 'Segurança é responsabilidade apenas de TI', correta: false },
      { texto: 'Todos na organização devem estar conscientes e praticar segurança', correta: true },
      { texto: 'Apenas executivos precisam saber', correta: false },
      { texto: 'Não é importante', correta: false },
    ],
  },

  // IoT e Indústria 4.0
  {
    id: 'iot-001',
    topicId: 'iot-ind4',
    enunciado: 'O que significa IoT?',
    alternativas: [
      { texto: 'Internet of Things - Internet das Coisas', correta: true },
      { texto: 'Internet of Tools', correta: false },
      { texto: 'Apenas smartphones', correta: false },
      { texto: 'Um tipo de rede', correta: false },
    ],
  },
  {
    id: 'iot-002',
    topicId: 'iot-ind4',
    enunciado: 'O que é Indústria 4.0?',
    alternativas: [
      { texto: 'Quarta revolução industrial com IoT, IA e automação', correta: true },
      { texto: 'Apenas robôs', correta: false },
      { texto: 'Indústria tradicional', correta: false },
      { texto: 'Apenas computadores', correta: false },
    ],
  },
  {
    id: 'iot-003',
    topicId: 'iot-ind4',
    enunciado: 'O que é "edge computing" no contexto de IoT?',
    alternativas: [
      { texto: 'Processar dados próximo aos dispositivos, reduzindo latência', correta: true },
      { texto: 'Processar tudo na nuvem', correta: false },
      { texto: 'Não processar dados', correta: false },
      { texto: 'Apenas armazenar dados', correta: false },
    ],
  },
  {
    id: 'iot-004',
    topicId: 'iot-ind4',
    enunciado: 'Qual é um desafio de segurança em IoT?',
    alternativas: [
      { texto: 'Muitos dispositivos com pouca segurança', correta: true },
      { texto: 'Nenhum desafio existe', correta: false },
      { texto: 'Dispositivos sempre seguros', correta: false },
      { texto: 'Apenas velocidade', correta: false },
    ],
  },
  {
    id: 'iot-005',
    topicId: 'iot-ind4',
    enunciado: 'O que são "sensores" em IoT?',
    alternativas: [
      { texto: 'Dispositivos que coletam dados do ambiente físico', correta: true },
      { texto: 'Apenas câmeras', correta: false },
      { texto: 'Servidores', correta: false },
      { texto: 'Apenas computadores', correta: false },
    ],
  },
  {
    id: 'iot-006',
    topicId: 'iot-ind4',
    enunciado: 'O que é "digital twin" na Indústria 4.0?',
    alternativas: [
      { texto: 'Réplica digital de um sistema físico para simulação e monitoramento', correta: true },
      { texto: 'Dois sistemas idênticos', correta: false },
      { texto: 'Apenas um backup', correta: false },
      { texto: 'Um tipo de sensor', correta: false },
    ],
  },
  {
    id: 'iot-007',
    topicId: 'iot-ind4',
    enunciado: 'Qual é um benefício de IoT na indústria?',
    alternativas: [
      { texto: 'Monitoramento em tempo real e manutenção preditiva', correta: true },
      { texto: 'Apenas aumentar custos', correta: false },
      { texto: 'Reduzir produtividade', correta: false },
      { texto: 'Complicar processos', correta: false },
    ],
  },
  {
    id: 'iot-008',
    topicId: 'iot-ind4',
    enunciado: 'O que significa "IIoT"?',
    alternativas: [
      { texto: 'Industrial Internet of Things - IoT aplicado à indústria', correta: true },
      { texto: 'Internet Individual', correta: false },
      { texto: 'Apenas IoT doméstico', correta: false },
      { texto: 'Um protocolo', correta: false },
    ],
  },
  {
    id: 'iot-009',
    topicId: 'iot-ind4',
    enunciado: 'O que é "manutenção preditiva"?',
    alternativas: [
      { texto: 'Manutenção baseada em dados para prevenir falhas', correta: true },
      { texto: 'Manutenção apenas quando quebra', correta: false },
      { texto: 'Manutenção aleatória', correta: false },
      { texto: 'Não fazer manutenção', correta: false },
    ],
  },
  {
    id: 'iot-010',
    topicId: 'iot-ind4',
    enunciado: 'Qual é um protocolo comum em IoT?',
    alternativas: [
      { texto: 'MQTT, CoAP e outros protocolos leves', correta: true },
      { texto: 'Apenas HTTP', correta: false },
      { texto: 'Nenhum protocolo', correta: false },
      { texto: 'Apenas TCP/IP', correta: false },
    ],
  },

  // Ética e Viés Algorítmico
  {
    id: 'etica-001',
    topicId: 'etica-vies',
    enunciado: 'O que é "viés algorítmico"?',
    alternativas: [
      { texto: 'Tendência de sistemas de IA reproduzirem preconceitos dos dados de treinamento', correta: true },
      { texto: 'IA sempre justa', correta: false },
      { texto: 'Apenas um erro técnico', correta: false },
      { texto: 'Não existe viés', correta: false },
    ],
  },
  {
    id: 'etica-002',
    topicId: 'etica-vies',
    enunciado: 'O que significa "fairness" em IA?',
    alternativas: [
      { texto: 'Justiça e tratamento equitativo em sistemas de IA', correta: true },
      { texto: 'Apenas velocidade', correta: false },
      { texto: 'Apenas precisão', correta: false },
      { texto: 'Ignorar justiça', correta: false },
    ],
  },
  {
    id: 'etica-003',
    topicId: 'etica-vies',
    enunciado: 'O que é "transparência algorítmica"?',
    alternativas: [
      { texto: 'Capacidade de entender como um algoritmo toma decisões', correta: true },
      { texto: 'Algoritmos secretos', correta: false },
      { texto: 'Apenas código aberto', correta: false },
      { texto: 'Não explicar nada', correta: false },
    ],
  },
  {
    id: 'etica-004',
    topicId: 'etica-vies',
    enunciado: 'Qual é uma forma de reduzir viés em IA?',
    alternativas: [
      { texto: 'Diversificar dados de treinamento e testar para diferentes grupos', correta: true },
      { texto: 'Usar apenas dados de um grupo', correta: false },
      { texto: 'Ignorar viés', correta: false },
      { texto: 'Não testar', correta: false },
    ],
  },
  {
    id: 'etica-005',
    topicId: 'etica-vies',
    enunciado: 'O que é "responsabilidade algorítmica"?',
    alternativas: [
      { texto: 'Responsabilizar desenvolvedores e organizações pelas decisões de IA', correta: true },
      { texto: 'IA é sempre responsável sozinha', correta: false },
      { texto: 'Ninguém é responsável', correta: false },
      { texto: 'Apenas usuários são responsáveis', correta: false },
    ],
  },
  {
    id: 'etica-006',
    topicId: 'etica-vies',
    enunciado: 'O que significa "AI governance"?',
    alternativas: [
      { texto: 'Governança e regulação do uso ético de IA', correta: true },
      { texto: 'IA governando tudo', correta: false },
      { texto: 'Sem regras', correta: false },
      { texto: 'Apenas tecnologia', correta: false },
    ],
  },
  {
    id: 'etica-007',
    topicId: 'etica-vies',
    enunciado: 'O que é "privacy by design" em IA?',
    alternativas: [
      { texto: 'Incorporar privacidade desde o design do sistema', correta: true },
      { texto: 'Adicionar privacidade depois', correta: false },
      { texto: 'Ignorar privacidade', correta: false },
      { texto: 'Apenas criptografia', correta: false },
    ],
  },
  {
    id: 'etica-008',
    topicId: 'etica-vies',
    enunciado: 'Qual é um exemplo de viés algorítmico?',
    alternativas: [
      { texto: 'Sistema de recrutamento que discrimina grupos demográficos', correta: true },
      { texto: 'IA sempre justa', correta: false },
      { texto: 'Apenas erros técnicos', correta: false },
      { texto: 'Nenhum exemplo existe', correta: false },
    ],
  },
  {
    id: 'etica-009',
    topicId: 'etica-vies',
    enunciado: 'O que é "explainable AI" (XAI)?',
    alternativas: [
      { texto: 'IA que pode explicar suas decisões de forma compreensível', correta: true },
      { texto: 'IA que não explica nada', correta: false },
      { texto: 'Apenas IA simples', correta: false },
      { texto: 'IA secreta', correta: false },
    ],
  },
  {
    id: 'etica-010',
    topicId: 'etica-vies',
    enunciado: 'Por que é importante considerar ética em IA?',
    alternativas: [
      { texto: 'Para evitar danos, discriminação e garantir uso responsável', correta: true },
      { texto: 'Ética não importa', correta: false },
      { texto: 'Apenas tecnologia importa', correta: false },
      { texto: 'IA sempre ética automaticamente', correta: false },
    ],
  },

  // Sustentabilidade e TI Verde
  {
    id: 'ti-verde-001',
    topicId: 'ti-verde',
    enunciado: 'O que é "TI Verde" (Green IT)?',
    alternativas: [
      { texto: 'Práticas de TI que reduzem impacto ambiental', correta: true },
      { texto: 'Apenas usar energia verde', correta: false },
      { texto: 'Tecnologia sempre verde', correta: false },
      { texto: 'Apenas reciclagem', correta: false },
    ],
  },
  {
    id: 'ti-verde-002',
    topicId: 'ti-verde',
    enunciado: 'Qual é uma forma de reduzir pegada de carbono em TI?',
    alternativas: [
      { texto: 'Otimizar código, usar energia renovável e virtualizar servidores', correta: true },
      { texto: 'Usar sempre mais servidores', correta: false },
      { texto: 'Ignorar eficiência', correta: false },
      { texto: 'Apenas desligar tudo', correta: false },
    ],
  },
  {
    id: 'ti-verde-003',
    topicId: 'ti-verde',
    enunciado: 'O que significa "carbon footprint" em TI?',
    alternativas: [
      { texto: 'Emissões de carbono geradas por atividades de TI', correta: true },
      { texto: 'Apenas pegadas físicas', correta: false },
      { texto: 'Não existe pegada', correta: false },
      { texto: 'Apenas energia', correta: false },
    ],
  },
  {
    id: 'ti-verde-004',
    topicId: 'ti-verde',
    enunciado: 'O que é "e-waste"?',
    alternativas: [
      { texto: 'Lixo eletrônico de equipamentos descartados', correta: true },
      { texto: 'Energia elétrica', correta: false },
      { texto: 'Apenas papel', correta: false },
      { texto: 'Não existe lixo eletrônico', correta: false },
    ],
  },
  {
    id: 'ti-verde-005',
    topicId: 'ti-verde',
    enunciado: 'Qual é um benefício de virtualização?',
    alternativas: [
      { texto: 'Reduzir número de servidores físicos e consumo de energia', correta: true },
      { texto: 'Aumentar servidores', correta: false },
      { texto: 'Apenas custos', correta: false },
      { texto: 'Sem benefícios', correta: false },
    ],
  },
  {
    id: 'ti-verde-006',
    topicId: 'ti-verde',
    enunciado: 'O que são "ESG goals" em TI?',
    alternativas: [
      { texto: 'Metas Ambientais, Sociais e de Governança', correta: true },
      { texto: 'Apenas ambientais', correta: false },
      { texto: 'Apenas sociais', correta: false },
      { texto: 'Não são importantes', correta: false },
    ],
  },
  {
    id: 'ti-verde-007',
    topicId: 'ti-verde',
    enunciado: 'O que é "cloud sustainability"?',
    alternativas: [
      { texto: 'Uso de nuvem de forma ambientalmente responsável', correta: true },
      { texto: 'Apenas nuvem', correta: false },
      { texto: 'Sem sustentabilidade', correta: false },
      { texto: 'Apenas servidores locais', correta: false },
    ],
  },
  {
    id: 'ti-verde-008',
    topicId: 'ti-verde',
    enunciado: 'Qual é uma prática de TI Verde?',
    alternativas: [
      { texto: 'Reciclagem de equipamentos, eficiência energética e compras sustentáveis', correta: true },
      { texto: 'Descartar tudo no lixo comum', correta: false },
      { texto: 'Usar sempre equipamentos novos', correta: false },
      { texto: 'Ignorar sustentabilidade', correta: false },
    ],
  },
  {
    id: 'ti-verde-009',
    topicId: 'ti-verde',
    enunciado: 'O que é "PUE" (Power Usage Effectiveness)?',
    alternativas: [
      { texto: 'Métrica de eficiência energética de datacenters', correta: true },
      { texto: 'Apenas consumo', correta: false },
      { texto: 'Não é uma métrica', correta: false },
      { texto: 'Apenas custos', correta: false },
    ],
  },
  {
    id: 'ti-verde-010',
    topicId: 'ti-verde',
    enunciado: 'Por que TI Verde é importante?',
    alternativas: [
      { texto: 'TI consome muita energia e pode contribuir para sustentabilidade', correta: true },
      { texto: 'Não é importante', correta: false },
      { texto: 'Apenas custos', correta: false },
      { texto: 'TI não consome energia', correta: false },
    ],
  },

  // APIs, Integrações e ERP/CRM
  {
    id: 'apis-001',
    topicId: 'apis-integracao',
    enunciado: 'O que significa API?',
    alternativas: [
      { texto: 'Application Programming Interface - Interface de Programação de Aplicações', correta: true },
      { texto: 'Apenas um protocolo', correta: false },
      { texto: 'Um tipo de banco de dados', correta: false },
      { texto: 'Apenas uma linguagem', correta: false },
    ],
  },
  {
    id: 'apis-002',
    topicId: 'apis-integracao',
    enunciado: 'O que é "REST API"?',
    alternativas: [
      { texto: 'API que segue princípios REST (Representational State Transfer)', correta: true },
      { texto: 'Apenas uma API qualquer', correta: false },
      { texto: 'Um tipo de servidor', correta: false },
      { texto: 'Apenas HTTP', correta: false },
    ],
  },
  {
    id: 'apis-003',
    topicId: 'apis-integracao',
    enunciado: 'O que é "API governance"?',
    alternativas: [
      { texto: 'Gerenciar padrões, segurança e uso de APIs na organização', correta: true },
      { texto: 'Apenas criar APIs', correta: false },
      { texto: 'Ignorar padrões', correta: false },
      { texto: 'Apenas documentação', correta: false },
    ],
  },
  {
    id: 'apis-004',
    topicId: 'apis-integracao',
    enunciado: 'O que significa ERP?',
    alternativas: [
      { texto: 'Enterprise Resource Planning - Planejamento de Recursos Empresariais', correta: true },
      { texto: 'Apenas um sistema', correta: false },
      { texto: 'Um tipo de API', correta: false },
      { texto: 'Apenas banco de dados', correta: false },
    ],
  },
  {
    id: 'apis-005',
    topicId: 'apis-integracao',
    enunciado: 'O que significa CRM?',
    alternativas: [
      { texto: 'Customer Relationship Management - Gestão de Relacionamento com Cliente', correta: true },
      { texto: 'Apenas vendas', correta: false },
      { texto: 'Um tipo de servidor', correta: false },
      { texto: 'Apenas marketing', correta: false },
    ],
  },
  {
    id: 'apis-006',
    topicId: 'apis-integracao',
    enunciado: 'Qual é um benefício de integração entre sistemas?',
    alternativas: [
      { texto: 'Automatizar fluxos e eliminar retrabalho manual', correta: true },
      { texto: 'Aumentar trabalho manual', correta: false },
      { texto: 'Complicar processos', correta: false },
      { texto: 'Sem benefícios', correta: false },
    ],
  },
  {
    id: 'apis-007',
    topicId: 'apis-integracao',
    enunciado: 'O que é "webhook"?',
    alternativas: [
      { texto: 'Callback HTTP que notifica eventos em tempo real', correta: true },
      { texto: 'Apenas uma API', correta: false },
      { texto: 'Um tipo de banco', correta: false },
      { texto: 'Apenas polling', correta: false },
    ],
  },
  {
    id: 'apis-008',
    topicId: 'apis-integracao',
    enunciado: 'O que é "API versioning"?',
    alternativas: [
      { texto: 'Versionar APIs para manter compatibilidade e evoluir', correta: true },
      { texto: 'Apenas atualizar sempre', correta: false },
      { texto: 'Ignorar versões', correta: false },
      { texto: 'Apenas uma versão', correta: false },
    ],
  },
  {
    id: 'apis-009',
    topicId: 'apis-integracao',
    enunciado: 'O que é "middleware" em integrações?',
    alternativas: [
      { texto: 'Software que conecta e traduz comunicação entre sistemas', correta: true },
      { texto: 'Apenas um servidor', correta: false },
      { texto: 'Apenas um banco', correta: false },
      { texto: 'Não existe', correta: false },
    ],
  },
  {
    id: 'apis-010',
    topicId: 'apis-integracao',
    enunciado: 'Qual é um desafio de integração?',
    alternativas: [
      { texto: 'Diferentes formatos, segurança e sincronização de dados', correta: true },
      { texto: 'Nenhum desafio', correta: false },
      { texto: 'Apenas velocidade', correta: false },
      { texto: 'Sempre fácil', correta: false },
    ],
  },

  // Blockchain, Tokenização e Web3
  {
    id: 'blockchain-001',
    topicId: 'blockchain-web3',
    enunciado: 'O que é blockchain?',
    alternativas: [
      { texto: 'Registro distribuído e imutável de transações', correta: true },
      { texto: 'Apenas criptomoedas', correta: false },
      { texto: 'Um tipo de banco', correta: false },
      { texto: 'Apenas Bitcoin', correta: false },
    ],
  },
  {
    id: 'blockchain-002',
    topicId: 'blockchain-web3',
    enunciado: 'O que são "smart contracts"?',
    alternativas: [
      { texto: 'Contratos auto-executáveis baseados em código', correta: true },
      { texto: 'Apenas contratos legais', correta: false },
      { texto: 'Contratos físicos', correta: false },
      { texto: 'Apenas documentos', correta: false },
    ],
  },
  {
    id: 'blockchain-003',
    topicId: 'blockchain-web3',
    enunciado: 'O que significa "descentralização" em blockchain?',
    alternativas: [
      { texto: 'Sem autoridade central, controle distribuído entre participantes', correta: true },
      { texto: 'Apenas um servidor central', correta: false },
      { texto: 'Apenas governos', correta: false },
      { texto: 'Sem controle', correta: false },
    ],
  },
  {
    id: 'blockchain-004',
    topicId: 'blockchain-web3',
    enunciado: 'O que é "tokenização"?',
    alternativas: [
      { texto: 'Representar ativos reais como tokens digitais', correta: true },
      { texto: 'Apenas criar moedas', correta: false },
      { texto: 'Apenas NFTs', correta: false },
      { texto: 'Não existe', correta: false },
    ],
  },
  {
    id: 'blockchain-005',
    topicId: 'blockchain-web3',
    enunciado: 'O que é Web3?',
    alternativas: [
      { texto: 'Visão de internet descentralizada com blockchain e tokens', correta: true },
      { texto: 'Apenas web atual', correta: false },
      { texto: 'Apenas criptomoedas', correta: false },
      { texto: 'Não existe', correta: false },
    ],
  },
  {
    id: 'blockchain-006',
    topicId: 'blockchain-web3',
    enunciado: 'O que é "consensus mechanism" em blockchain?',
    alternativas: [
      { texto: 'Mecanismo para validar transações sem autoridade central', correta: true },
      { texto: 'Apenas votação', correta: false },
      { texto: 'Apenas um servidor decide', correta: false },
      { texto: 'Sem validação', correta: false },
    ],
  },
  {
    id: 'blockchain-007',
    topicId: 'blockchain-web3',
    enunciado: 'Qual é uma aplicação corporativa de blockchain?',
    alternativas: [
      { texto: 'Rastreamento de cadeia de suprimentos e verificação de autenticidade', correta: true },
      { texto: 'Apenas criptomoedas', correta: false },
      { texto: 'Apenas NFTs', correta: false },
      { texto: 'Sem aplicações', correta: false },
    ],
  },
  {
    id: 'blockchain-008',
    topicId: 'blockchain-web3',
    enunciado: 'O que é "NFT"?',
    alternativas: [
      { texto: 'Non-Fungible Token - Token não fungível representando propriedade única', correta: true },
      { texto: 'Apenas imagem', correta: false },
      { texto: 'Apenas arte', correta: false },
      { texto: 'Não existe', correta: false },
    ],
  },
  {
    id: 'blockchain-009',
    topicId: 'blockchain-web3',
    enunciado: 'O que é "DeFi"?',
    alternativas: [
      { texto: 'Decentralized Finance - Finanças descentralizadas', correta: true },
      { texto: 'Apenas bancos', correta: false },
      { texto: 'Apenas criptomoedas', correta: false },
      { texto: 'Não existe', correta: false },
    ],
  },
  {
    id: 'blockchain-010',
    topicId: 'blockchain-web3',
    enunciado: 'Qual é um desafio de blockchain?',
    alternativas: [
      { texto: 'Escalabilidade, consumo de energia e complexidade técnica', correta: true },
      { texto: 'Nenhum desafio', correta: false },
      { texto: 'Apenas velocidade', correta: false },
      { texto: 'Sempre fácil', correta: false },
    ],
  },
];

// Adiciona explicações às perguntas
QUESTIONS.forEach(question => {
  if (EXPLANATIONS[question.id]) {
    question.explanation = EXPLANATIONS[question.id];
  }
});

export const QUESTION_MAP = QUESTIONS.reduce<Record<string, Question>>((acc, question) => {
  acc[question.id] = question;
  return acc;
}, {});

export const QUESTIONS_BY_TOPIC = QUESTIONS.reduce<Record<string, Question[]>>((acc, question) => {
  if (!acc[question.topicId]) {
    acc[question.topicId] = [];
  }
  acc[question.topicId].push(question);
  return acc;
}, {});

Object.values(QUESTIONS_BY_TOPIC).forEach(list => {
  list.sort((a, b) => a.id.localeCompare(b.id));
});
