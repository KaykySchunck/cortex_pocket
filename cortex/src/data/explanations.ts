import { QuestionExplanation } from './questions';

export const EXPLANATIONS: Record<string, QuestionExplanation> = {
  // IA Generativa e Produtividade
  'ia-gen-001': {
    correctAnswer: 'IA que cria conteúdo novo (texto, imagens, código) a partir de padrões aprendidos',
    whyCorrect: 'IA Generativa não apenas analisa dados existentes, mas aprende padrões e cria conteúdo completamente novo, como textos, imagens, músicas ou código que nunca existiram antes.',
    wrongAnswers: [
      {
        texto: 'IA que apenas analisa dados existentes',
        whyWrong: 'Isso é IA analítica, não generativa. IA Generativa vai além e cria coisas novas.',
      },
      {
        texto: 'IA que só funciona offline',
        whyWrong: 'IA Generativa geralmente precisa de conexão para acessar modelos grandes na nuvem.',
      },
      {
        texto: 'IA que não precisa de treinamento',
        whyWrong: 'IA Generativa precisa ser treinada com milhões de exemplos para aprender padrões.',
      },
    ],
    realWorldExample: 'Imagine pedir para uma IA escrever um e-mail profissional: ela não copia um e-mail existente, mas cria um novo baseado em padrões de e-mails profissionais que aprendeu. É como ter um assistente que nunca cansa e sempre tem ideias novas!',
    companiesUsing: ['OpenAI (ChatGPT)', 'Google (Gemini)', 'Microsoft (Copilot)', 'Anthropic (Claude)', 'Meta (LLaMA)'],
  },
  'ia-gen-002': {
    correctAnswer: 'Aumentar produtividade criando rascunhos, resumos e automatizando tarefas repetitivas',
    whyCorrect: 'IA Generativa funciona como um assistente inteligente que acelera o trabalho criativo e repetitivo, permitindo que você se concentre em decisões estratégicas.',
    wrongAnswers: [
      {
        texto: 'Substituir completamente os funcionários',
        whyWrong: 'IA é uma ferramenta de apoio, não substitui o julgamento humano e criatividade essenciais.',
      },
      {
        texto: 'Apenas gerar imagens aleatórias',
        whyWrong: 'IA Generativa vai muito além de imagens - ajuda em escrita, código, análise e muito mais.',
      },
      {
        texto: 'Funcionar sem internet',
        whyWrong: 'A maioria das IAs Generativas precisa de conexão para acessar modelos poderosos na nuvem.',
      },
    ],
    realWorldExample: 'Um redator pode usar ChatGPT para criar 10 variações de um título, escolher a melhor e refinar. Isso economiza horas de brainstorming!',
    companiesUsing: ['Jasper.ai', 'Copy.ai', 'Notion AI', 'Grammarly', 'GitHub Copilot'],
  },
  'ia-gen-003': {
    correctAnswer: 'Modelos de IA Generativa de linguagem',
    whyCorrect: 'ChatGPT, Claude e Gemini são LLMs (Large Language Models) - modelos treinados para entender e gerar texto natural, conversando como humanos.',
    wrongAnswers: [
      {
        texto: 'Redes sociais',
        whyWrong: 'São ferramentas de IA, não plataformas sociais como Facebook ou Instagram.',
      },
      {
        texto: 'Sistemas operacionais',
        whyWrong: 'São aplicações que rodam sobre sistemas operacionais, não são OS em si.',
      },
      {
        texto: 'Bancos de dados',
        whyWrong: 'São modelos de IA que processam linguagem, não sistemas de armazenamento de dados.',
      },
    ],
    realWorldExample: 'É como ter um bibliotecário super inteligente que leu milhões de livros e pode conversar sobre qualquer assunto, ajudando você a escrever, pensar e resolver problemas.',
    companiesUsing: ['OpenAI (ChatGPT)', 'Anthropic (Claude)', 'Google (Gemini)', 'Microsoft (Copilot)', 'Meta (LLaMA)'],
  },
  'ia-gen-004': {
    correctAnswer: 'A instrução ou pergunta que você dá para a IA gerar uma resposta',
    whyCorrect: 'O prompt é como você "conversa" com a IA - quanto melhor você explicar o que quer, melhor será o resultado. É a arte de comunicar com máquinas inteligentes!',
    wrongAnswers: [
      {
        texto: 'Um comando de terminal',
        whyWrong: 'Prompt de IA é diferente - é uma instrução em linguagem natural, não código de terminal.',
      },
      {
        texto: 'Um tipo de erro',
        whyWrong: 'Prompt não é um erro, é a entrada que você fornece para a IA trabalhar.',
      },
      {
        texto: 'Um arquivo de configuração',
        whyWrong: 'Prompt é uma interação dinâmica em tempo real, não um arquivo estático.',
      },
    ],
    realWorldExample: 'Se você pedir "escreva um e-mail", a IA pode criar algo genérico. Mas se você pedir "escreva um e-mail profissional para meu chefe pedindo férias em dezembro, sendo respeitoso mas direto", o resultado será muito melhor!',
    companiesUsing: ['OpenAI', 'Anthropic', 'Google', 'Microsoft', 'Jasper.ai'],
  },
  'ia-gen-005': {
    correctAnswer: 'Usar como assistente para aumentar produtividade, sempre revisando e validando o resultado',
    whyCorrect: 'IA é uma ferramenta poderosa, mas você sempre deve revisar e validar. É como ter um assistente brilhante que às vezes comete erros - você confia, mas sempre verifica!',
    wrongAnswers: [
      {
        texto: 'Criar conteúdo plagiado sem crédito',
        whyWrong: 'Isso é antiético e pode ter consequências legais. Sempre dê crédito e revise o conteúdo.',
      },
      {
        texto: 'Substituir completamente o pensamento crítico',
        whyWrong: 'IA deve aumentar seu pensamento, não substituí-lo. Você sempre precisa pensar criticamente.',
      },
      {
        texto: 'Gerar informações falsas intencionalmente',
        whyWrong: 'Isso é antiético e pode causar danos. Use IA de forma responsável e honesta.',
      },
    ],
    realWorldExample: 'Um jornalista pode usar IA para gerar um rascunho de artigo, mas sempre verifica fatos, adiciona contexto pessoal e garante que a voz única dele está presente. IA acelera, mas o jornalista adiciona a humanidade!',
    companiesUsing: ['The New York Times', 'Reuters', 'Associated Press', 'Bloomberg', 'Forbes'],
  },
  'ia-gen-006': {
    correctAnswer: 'Quando a IA cria informações que parecem corretas mas são inventadas',
    whyCorrect: 'Hallucination é um problema real - a IA pode criar fatos convincentes que não existem. Por isso sempre devemos verificar informações importantes!',
    wrongAnswers: [
      {
        texto: 'Quando a IA funciona perfeitamente',
        whyWrong: 'Hallucination é um problema, não um sucesso. Significa que a IA inventou algo falso.',
      },
      {
        texto: 'Um tipo de erro de conexão',
        whyWrong: 'Não é problema técnico de rede, é um problema de confiabilidade do conteúdo gerado.',
      },
      {
        texto: 'Quando a IA desliga sozinha',
        whyWrong: 'Hallucination não é sobre o sistema desligar, é sobre gerar informações falsas.',
      },
    ],
    realWorldExample: 'Uma IA pode te dizer que "o presidente do Brasil em 2025 é João Silva" com total confiança, mesmo que isso seja completamente inventado. Por isso sempre verificamos fatos importantes!',
    companiesUsing: ['OpenAI', 'Google', 'Microsoft', 'Anthropic', 'Meta'],
  },
  'ia-gen-007': {
    correctAnswer: 'Ferramentas como GitHub Copilot, Cursor ou ChatGPT, dependendo da necessidade',
    whyCorrect: 'Diferentes ferramentas têm diferentes forças - Copilot é ótimo para código, Cursor combina IA com editor, ChatGPT é versátil. Escolha a ferramenta certa para cada tarefa!',
    wrongAnswers: [
      {
        texto: 'Apenas ChatGPT',
        whyWrong: 'Há várias ferramentas especializadas em código que podem ser melhores que ChatGPT para programação.',
      },
      {
        texto: 'Apenas editores de texto tradicionais',
        whyWrong: 'Editores tradicionais não têm IA integrada para gerar código automaticamente.',
      },
      {
        texto: 'Nenhuma ferramenta funciona',
        whyWrong: 'Muitas ferramentas funcionam muito bem para gerar código, como Copilot e Cursor.',
      },
    ],
    realWorldExample: 'GitHub Copilot sugere código enquanto você digita, como um par de programação sempre presente. Cursor permite conversar com seu código. ChatGPT ajuda a debugar e explicar código complexo.',
    companiesUsing: ['GitHub (Copilot)', 'Cursor', 'Replit', 'Amazon (CodeWhisperer)', 'Tabnine'],
  },
  'ia-gen-008': {
    correctAnswer: 'Ajustar o modelo para tarefas específicas usando dados especializados',
    whyCorrect: 'Fine-tuning pega um modelo geral (como GPT) e o treina com dados específicos da sua área, tornando-o especialista no seu domínio.',
    wrongAnswers: [
      {
        texto: 'Aumentar o tamanho da tela',
        whyWrong: 'Fine-tuning não tem nada a ver com hardware ou interface, é sobre treinar o modelo de IA.',
      },
      {
        texto: 'Melhorar a velocidade da internet',
        whyWrong: 'Fine-tuning é sobre melhorar o modelo de IA, não sobre conexão de rede.',
      },
      {
        texto: 'Formatar um computador',
        whyWrong: 'Fine-tuning é um processo de machine learning, não formatação de sistema.',
      },
    ],
    realWorldExample: 'Uma empresa de saúde pode fazer fine-tuning de um modelo geral com artigos médicos, tornando-o especialista em diagnóstico. É como pegar um estudante geral e transformá-lo em médico especialista!',
    companiesUsing: ['OpenAI', 'Anthropic', 'Google', 'Hugging Face', 'Cohere'],
  },
  'ia-gen-009': {
    correctAnswer: 'Pode gerar informações incorretas e precisa de validação humana',
    whyCorrect: 'IA Generativa não é perfeita - pode inventar fatos, cometer erros ou ter viés. Sempre valide informações importantes, especialmente em contextos críticos.',
    wrongAnswers: [
      {
        texto: 'Funciona apenas em computadores caros',
        whyWrong: 'Muitas IAs funcionam em qualquer dispositivo com internet, não precisam de hardware especial.',
      },
      {
        texto: 'Não pode ser usada em nenhuma situação',
        whyWrong: 'IA pode ser muito útil, apenas precisa ser usada com cuidado e validação.',
      },
      {
        texto: 'Precisa de internet 24/7 para funcionar',
        whyWrong: 'Algumas IAs podem funcionar offline, e internet não é o problema principal - é a confiabilidade.',
      },
    ],
    realWorldExample: 'Um advogado pode usar IA para pesquisar precedentes, mas sempre verifica cada caso citado porque a IA pode inventar casos que não existem. Confie, mas verifique!',
    companiesUsing: ['LexisNexis', 'Westlaw', 'Casetext', 'LegalTech', 'LawGeex'],
  },
  'ia-gen-010': {
    correctAnswer: 'Automatizando tarefas repetitivas, gerando rascunhos e acelerando processos criativos',
    whyCorrect: 'IA Generativa é como ter um assistente super rápido que nunca cansa - ela faz o trabalho pesado de criar rascunhos, permitindo que você se concentre em refinar e melhorar.',
    wrongAnswers: [
      {
        texto: 'Fazendo todo o trabalho sozinha sem supervisão',
        whyWrong: 'IA precisa de supervisão humana - ela acelera, mas você ainda precisa revisar e aprovar.',
      },
      {
        texto: 'Substituindo completamente a necessidade de pensar',
        whyWrong: 'IA aumenta seu pensamento, não substitui. Você ainda precisa pensar criticamente.',
      },
      {
        texto: 'Funcionando apenas para programadores',
        whyWrong: 'IA Generativa ajuda em muitas áreas: escrita, design, análise, marketing, não só programação.',
      },
    ],
    realWorldExample: 'Um designer pode pedir para IA gerar 50 variações de um logo, escolher as 3 melhores e refinar manualmente. Isso economiza dias de trabalho!',
    companiesUsing: ['Canva', 'Adobe (Firefly)', 'Figma', 'Midjourney', 'DALL-E'],
  },

  // Automação Inteligente no Trabalho
  'auto-001': {
    correctAnswer: 'Software que automatiza tarefas repetitivas em sistemas digitais',
    whyCorrect: 'RPA é como ter um robô digital que imita ações humanas em sistemas - clica, digita, copia dados - mas muito mais rápido e sem erros.',
    wrongAnswers: [
      {
        texto: 'Robôs físicos que trabalham em fábricas',
        whyWrong: 'RPA é software, não hardware. Robôs físicos são automação industrial, não RPA.',
      },
      {
        texto: 'Um tipo de inteligência artificial avançada',
        whyWrong: 'RPA tradicional é baseado em regras, não IA. Automação Inteligente combina RPA com IA.',
      },
      {
        texto: 'Apenas automação de emails',
        whyWrong: 'RPA pode automatizar muito mais: sistemas ERP, planilhas, processos completos, não só emails.',
      },
    ],
    realWorldExample: 'Imagine um bot que todas as manhãs acessa seu sistema, copia dados de vendas, cola em uma planilha Excel e envia um relatório por email - tudo sozinho, enquanto você dorme!',
    companiesUsing: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Microsoft Power Automate', 'Pegasystems'],
  },
  'auto-002': {
    correctAnswer: 'Automação Inteligente combina RPA com IA para lidar com variações e decisões',
    whyCorrect: 'RPA tradicional segue regras fixas. Automação Inteligente adiciona IA para entender contexto, tomar decisões e lidar com situações inesperadas - como um assistente que pensa!',
    wrongAnswers: [
      {
        texto: 'Não há diferença',
        whyWrong: 'Há diferença significativa - Automação Inteligente tem IA, RPA tradicional não.',
      },
      {
        texto: 'RPA é mais caro',
        whyWrong: 'Custo não é a diferença principal - é a capacidade de lidar com variações e decisões.',
      },
      {
        texto: 'Automação Inteligente não usa computadores',
        whyWrong: 'Ambas usam computadores - a diferença é a inteligência, não o hardware.',
      },
    ],
    realWorldExample: 'RPA tradicional: "Se o campo tem 10 caracteres, copie". Automação Inteligente: "Analise o documento, identifique o campo relevante mesmo que esteja em posições diferentes, e extraia". É a diferença entre seguir regras e entender contexto!',
    companiesUsing: ['UiPath', 'Automation Anywhere', 'Microsoft', 'IBM', 'SAP'],
  },
  'auto-003': {
    correctAnswer: 'Gerenciar, monitorar e garantir que automações funcionem corretamente e de forma segura',
    whyCorrect: 'Governança é como ter um "chefe" para os bots - garante que eles sigam regras, sejam seguros, e não causem problemas. Sem governança, automações podem virar um caos!',
    wrongAnswers: [
      {
        texto: 'Controlar quem pode usar automação e como',
        whyWrong: 'Isso é parte da governança, mas governança é muito mais - inclui monitoramento, segurança, qualidade.',
      },
      {
        texto: 'Apenas criar automações',
        whyWrong: 'Governança é sobre gerenciar e controlar automações existentes, não apenas criá-las.',
      },
      {
        texto: 'Desligar todas as automações',
        whyWrong: 'Governança é para garantir que automações funcionem bem, não para desligá-las.',
      },
    ],
    realWorldExample: 'É como ter um sistema de trânsito - sem semáforos e regras (governança), todos os carros (bots) colidiriam. Com governança, cada bot sabe o que fazer, quando fazer, e como fazer com segurança.',
    companiesUsing: ['UiPath', 'Automation Anywhere', 'ServiceNow', 'Pegasystems', 'Appian'],
  },
  'auto-004': {
    correctAnswer: 'Tarefas repetitivas, bem definidas e com regras claras',
    whyCorrect: 'Automação funciona melhor quando há padrão claro - como uma receita de bolo. Se a receita muda toda vez, é difícil automatizar. Se é sempre igual, automação brilha!',
    wrongAnswers: [
      {
        texto: 'Tarefas criativas que precisam de julgamento humano',
        whyWrong: 'Automação não é boa para criatividade - precisa de padrões e regras claras.',
      },
      {
        texto: 'Tarefas que mudam constantemente',
        whyWrong: 'Tarefas que mudam muito são difíceis de automatizar - automação precisa de estabilidade.',
      },
      {
        texto: 'Tarefas que precisam de emoção',
        whyWrong: 'Automação não tem emoção - tarefas emocionais precisam de humanos.',
      },
    ],
    realWorldExample: 'Ideal: "Todas as segundas-feiras, copiar vendas da semana passada para relatório". Ruim: "Criar uma campanha de marketing inovadora que emocione clientes". O primeiro é repetitivo e claro, o segundo precisa de criatividade humana.',
    companiesUsing: ['UiPath', 'Automation Anywhere', 'Microsoft', 'IBM', 'SAP'],
  },
  'auto-005': {
    correctAnswer: 'Um programa que executa tarefas automatizadas',
    whyCorrect: 'Bot é como um "robô de software" - um programa que executa ações automaticamente, como clicar, digitar, processar dados, sem intervenção humana.',
    wrongAnswers: [
      {
        texto: 'Um robô físico',
        whyWrong: 'Bot é software, não hardware. Robôs físicos são máquinas reais, bots são programas.',
      },
      {
        texto: 'Um tipo de vírus',
        whyWrong: 'Bots legítimos não são vírus - são ferramentas úteis. Apenas bots maliciosos são perigosos.',
      },
      {
        texto: 'Um erro no sistema',
        whyWrong: 'Bot não é um erro - é uma funcionalidade intencional para automatizar tarefas.',
      },
    ],
    realWorldExample: 'Um bot pode ser programado para verificar seu email a cada hora, identificar faturas, extrair valores e atualizar uma planilha financeira - tudo automaticamente, como um assistente invisível trabalhando 24/7.',
    companiesUsing: ['UiPath', 'Automation Anywhere', 'Microsoft Power Automate', 'Zapier', 'Make (Integromat)'],
  },
  'auto-006': {
    correctAnswer: 'Liberar tempo dos funcionários para tarefas mais estratégicas e reduzir erros',
    whyCorrect: 'Automação faz o trabalho repetitivo e chato, deixando humanos livres para pensar, criar e tomar decisões importantes. E como não cansa, comete menos erros!',
    wrongAnswers: [
      {
        texto: 'Eliminar todos os empregos',
        whyWrong: 'Automação muda empregos, não elimina. Humanos ainda são essenciais para estratégia e criatividade.',
      },
      {
        texto: 'Tornar tudo mais lento',
        whyWrong: 'Automação geralmente torna processos mais rápidos, não mais lentos.',
      },
      {
        texto: 'Aumentar custos sem benefícios',
        whyWrong: 'Automação bem feita reduz custos e aumenta eficiência, não aumenta custos sem benefícios.',
      },
    ],
    realWorldExample: 'Antes: funcionário gasta 4 horas por dia copiando dados entre sistemas. Depois: bot faz em 10 minutos, funcionário usa essas 4 horas para analisar dados e criar estratégias. É transformar trabalho operacional em trabalho estratégico!',
    companiesUsing: ['Amazon', 'Walmart', 'FedEx', 'DHL', 'Maersk'],
  },
  'auto-007': {
    correctAnswer: 'Analisar processos reais para identificar oportunidades de automação',
    whyCorrect: 'Process Mining é como ter um "detetive de processos" - analisa logs e dados reais para descobrir como processos realmente funcionam (não como achamos que funcionam) e onde automatizar.',
    wrongAnswers: [
      {
        texto: 'Extrair minérios com robôs',
        whyWrong: 'Process Mining não tem nada a ver com mineração física - é sobre mineração de dados de processos.',
      },
      {
        texto: 'Criar processos do zero',
        whyWrong: 'Process Mining analisa processos existentes, não cria novos.',
      },
      {
        texto: 'Desligar processos',
        whyWrong: 'Process Mining é para entender e melhorar processos, não desligá-los.',
      },
    ],
    realWorldExample: 'Process Mining mostra que um processo que deveria levar 5 passos na verdade tem 12, com 3 voltas desnecessárias. Agora você sabe exatamente onde automatizar para eliminar essas voltas!',
    companiesUsing: ['Celonis', 'UiPath Process Mining', 'IBM Process Mining', 'SAP Signavio', 'Microsoft Process Advisor'],
  },
  'auto-008': {
    correctAnswer: 'Automações podem causar erros em cascata e problemas de segurança',
    whyCorrect: 'Sem governança, um bot pode fazer coisas erradas milhares de vezes muito rápido, ou acessar dados que não deveria. É como dar carro para adolescente sem ensinar a dirigir - pode dar muito errado!',
    wrongAnswers: [
      {
        texto: 'Nenhum risco existe',
        whyWrong: 'Há muitos riscos - automações podem causar danos se não forem bem gerenciadas.',
      },
      {
        texto: 'Apenas custos menores',
        whyWrong: 'Sem governança, custos podem aumentar devido a erros e retrabalho.',
      },
      {
        texto: 'Funcionários trabalham menos',
        whyWrong: 'Sem governança, funcionários podem trabalhar mais corrigindo erros dos bots.',
      },
    ],
    realWorldExample: 'Um bot sem governança pode deletar 10.000 registros errados em segundos, ou enviar emails para clientes errados. Com governança, há aprovações, logs e controles que previnem desastres.',
    companiesUsing: ['UiPath', 'Automation Anywhere', 'ServiceNow', 'Pegasystems', 'Appian'],
  },
  'auto-009': {
    correctAnswer: 'Combinar múltiplas tecnologias (RPA, IA, ML) para automatizar processos complexos',
    whyCorrect: 'Hyperautomation é como criar um "exército de automação" - combina RPA (robôs), IA (inteligência), ML (aprendizado) e outras tecnologias para automatizar até processos complexos que antes pareciam impossíveis.',
    wrongAnswers: [
      {
        texto: 'Automação muito rápida',
        whyWrong: 'Hyperautomation não é sobre velocidade, é sobre combinar múltiplas tecnologias.',
      },
      {
        texto: 'Automação apenas de uma tarefa',
        whyWrong: 'Hyperautomation automatiza processos complexos inteiros, não apenas uma tarefa.',
      },
      {
        texto: 'Automação sem tecnologia',
        whyWrong: 'Hyperautomation usa muita tecnologia - RPA, IA, ML, analytics.',
      },
    ],
    realWorldExample: 'Hyperautomation pode automatizar todo o processo de onboarding: RPA preenche formulários, IA analisa documentos, ML aprende padrões, analytics gera relatórios. É automação em esteroides!',
    companiesUsing: ['UiPath', 'Microsoft', 'IBM', 'SAP', 'ServiceNow'],
  },
  'auto-010': {
    correctAnswer: 'Identificar processos repetitivos, começar pequeno e escalar gradualmente',
    whyCorrect: 'Começar pequeno permite aprender, ajustar e provar valor antes de escalar. É como aprender a nadar na piscina antes de ir para o oceano!',
    wrongAnswers: [
      {
        texto: 'Automatizar tudo de uma vez',
        whyWrong: 'Isso é arriscado - pode causar muitos problemas. Melhor começar pequeno.',
      },
      {
        texto: 'Contratar apenas robôs físicos',
        whyWrong: 'Automação de processos geralmente começa com software, não robôs físicos.',
      },
      {
        texto: 'Ignorar processos existentes',
        whyWrong: 'Você precisa entender processos existentes antes de automatizá-los.',
      },
    ],
    realWorldExample: 'Comece automatizando um processo simples como "enviar relatório semanal". Depois que funcionar bem, automatize processos maiores. É como construir uma casa - começa pela fundação!',
    companiesUsing: ['UiPath', 'Automation Anywhere', 'Microsoft', 'Zapier', 'Make'],
  },

  // Dados, LGPD/GDPR e Governança
  'dados-001': {
    correctAnswer: 'Lei Geral de Proteção de Dados',
    whyCorrect: 'LGPD é a lei brasileira que protege dados pessoais, garantindo privacidade e controle aos cidadãos sobre suas informações.',
    wrongAnswers: [
      {
        texto: 'Linguagem de Programação de Dados',
        whyWrong: 'LGPD não é uma linguagem de programação, é uma lei de proteção de dados.',
      },
      {
        texto: 'Sistema de Gerenciamento de Dados',
        whyWrong: 'LGPD não é um sistema, é uma legislação que regula como dados devem ser tratados.',
      },
      {
        texto: 'Apenas uma sigla sem significado',
        whyWrong: 'LGPD tem significado muito importante - é uma lei que afeta todas as empresas que lidam com dados pessoais.',
      },
    ],
    realWorldExample: 'Quando você se cadastra em um site, a empresa precisa seguir a LGPD: pedir seu consentimento, explicar como usa seus dados, e permitir que você os exclua. É seu direito!',
    companiesUsing: ['Todas as empresas brasileiras que coletam dados pessoais', 'iFood', 'Nubank', 'Magazine Luiza', 'Mercado Livre'],
  },
  'dados-002': {
    correctAnswer: 'Qualquer informação que identifique uma pessoa natural',
    whyCorrect: 'Dados pessoais são qualquer coisa que possa identificar você - nome, email, CPF, endereço IP, até preferências se combinadas com outros dados.',
    wrongAnswers: [
      {
        texto: 'Apenas CPF e RG',
        whyWrong: 'Dados pessoais vão muito além - incluem email, telefone, localização, preferências, etc.',
      },
      {
        texto: 'Apenas dados bancários',
        whyWrong: 'Dados pessoais incluem muito mais que dados bancários - qualquer informação identificável.',
      },
      {
        texto: 'Dados de empresas',
        whyWrong: 'Dados de empresas (pessoas jurídicas) não são dados pessoais - dados pessoais são de pessoas físicas.',
      },
    ],
    realWorldExample: 'Seu nome + email já são dados pessoais. Seu CPF sozinho é dado pessoal. Até seu endereço IP pode ser dado pessoal se identificar você. Tudo que pode te identificar conta!',
    companiesUsing: ['Todas as empresas que coletam dados', 'Google', 'Facebook', 'Amazon', 'Microsoft'],
  },
  'dados-003': {
    correctAnswer: 'Proteger a privacidade e dar controle ao titular sobre seus dados',
    whyCorrect: 'LGPD coloca você no controle - você decide como seus dados são usados, pode pedir para ver, corrigir ou deletar. É seu direito fundamental!',
    wrongAnswers: [
      {
        texto: 'Coletar o máximo de dados possível',
        whyWrong: 'LGPD promove coleta mínima necessária, não máxima. Menos é mais quando se trata de privacidade.',
      },
      {
        texto: 'Compartilhar dados livremente',
        whyWrong: 'LGPD restringe compartilhamento - dados só podem ser compartilhados com consentimento ou base legal.',
      },
      {
        texto: 'Armazenar dados sem limite de tempo',
        whyWrong: 'LGPD exige que dados sejam mantidos apenas pelo tempo necessário, não indefinidamente.',
      },
    ],
    realWorldExample: 'Você pode pedir para uma empresa mostrar todos os dados que ela tem sobre você, corrigir informações erradas, ou deletar tudo. É como ter controle total sobre sua "pegada digital"!',
    companiesUsing: ['Todas as empresas brasileiras', 'Serpro', 'Receita Federal', 'Bancos', 'E-commerces'],
  },
  'dados-004': {
    correctAnswer: 'Regulamento Geral de Proteção de Dados da União Europeia',
    whyCorrect: 'GDPR é a lei europeia de proteção de dados, uma das mais rigorosas do mundo. Empresas que lidam com dados de europeus devem seguir, mesmo estando fora da Europa!',
    wrongAnswers: [
      {
        texto: 'Sistema de gestão de dados',
        whyWrong: 'GDPR não é um sistema, é uma regulamentação legal da União Europeia.',
      },
      {
        texto: 'Apenas uma lei brasileira',
        whyWrong: 'GDPR é europeia, não brasileira. A lei brasileira equivalente é a LGPD.',
      },
      {
        texto: 'Um tipo de banco de dados',
        whyWrong: 'GDPR não é tecnologia, é legislação que regula como dados devem ser tratados.',
      },
    ],
    realWorldExample: 'Se uma empresa brasileira vende para clientes europeus, ela deve seguir GDPR. Multas podem chegar a 4% do faturamento global ou €20 milhões!',
    companiesUsing: ['Todas as empresas que lidam com dados de europeus', 'Google', 'Meta', 'Amazon', 'Microsoft'],
  },
  'dados-005': {
    correctAnswer: 'Aceitação livre, informada e inequívoca do titular',
    whyCorrect: 'Consentimento não pode ser forçado ou enganoso - você deve entender claramente o que está consentindo e poder recusar sem prejuízo. É sobre escolha real!',
    wrongAnswers: [
      {
        texto: 'Apenas um checkbox',
        whyWrong: 'Consentimento precisa ser informado e claro, não apenas um checkbox sem explicação.',
      },
      {
        texto: 'Coleta automática sem aviso',
        whyWrong: 'Isso viola LGPD - consentimento precisa ser explícito, não automático.',
      },
      {
        texto: 'Não precisa de consentimento',
        whyWrong: 'Para muitos casos, consentimento é necessário. Há exceções, mas são limitadas.',
      },
    ],
    realWorldExample: 'Consentimento válido: "Aceito que meus dados sejam usados para envio de newsletter. Posso cancelar a qualquer momento." Consentimento inválido: checkbox pré-marcado sem explicação.',
    companiesUsing: ['Todas as empresas que coletam dados', 'Spotify', 'Netflix', 'Uber', 'iFood'],
  },
  'dados-006': {
    correctAnswer: 'Gerenciar a disponibilidade, usabilidade, integridade e segurança dos dados',
    whyCorrect: 'Governança de dados é como ser o "guardião" dos dados - garante que estejam disponíveis quando precisar, corretos, seguros e bem organizados. É a base de tudo!',
    wrongAnswers: [
      {
        texto: 'Apenas armazenar dados',
        whyWrong: 'Governança vai muito além de armazenar - inclui qualidade, segurança, acesso, uso.',
      },
      {
        texto: 'Deletar todos os dados',
        whyWrong: 'Governança é sobre gerenciar dados bem, não deletá-los todos.',
      },
      {
        texto: 'Compartilhar dados publicamente',
        whyWrong: 'Governança protege dados e controla acesso, não os compartilha publicamente.',
      },
    ],
    realWorldExample: 'Governança garante que quando você precisa de um dado, ele está lá, está correto, e apenas pessoas autorizadas podem acessá-lo. É como ter uma biblioteca bem organizada com segurança!',
    companiesUsing: ['IBM', 'Microsoft', 'Oracle', 'SAP', 'Informatica'],
  },
  'dados-007': {
    correctAnswer: 'Acesso não autorizado a dados pessoais',
    whyCorrect: 'Violação é quando dados pessoais são acessados, alterados, deletados ou compartilhados sem autorização - como um hacker invadindo ou um funcionário vazando dados.',
    wrongAnswers: [
      {
        texto: 'Armazenar dados com segurança',
        whyWrong: 'Isso é proteção, não violação. Violação é quando a segurança falha.',
      },
      {
        texto: 'Pedir consentimento',
        whyWrong: 'Pedir consentimento é correto, não é violação.',
      },
      {
        texto: 'Criptografar dados',
        whyWrong: 'Criptografar protege dados, não viola. Violação é quando dados são expostos.',
      },
    ],
    realWorldExample: 'Se um hacker invade um banco de dados e rouba informações de clientes, isso é violação. Se um funcionário envia lista de clientes por email sem criptografia, também é violação. Qualquer acesso não autorizado conta!',
    companiesUsing: ['Empresas que sofreram vazamentos', 'Facebook (Cambridge Analytica)', 'Equifax', 'Yahoo', 'Marriott'],
  },
  'dados-008': {
    correctAnswer: 'Processo que torna dados impossíveis de identificar uma pessoa',
    whyCorrect: 'Anonimização remove ou altera informações de forma que você não consiga mais identificar a pessoa. É como remover o nome de um teste - você vê as respostas, mas não sabe de quem são.',
    wrongAnswers: [
      {
        texto: 'Deletar dados',
        whyWrong: 'Anonimização mantém dados úteis, apenas remove identificação. Deletar remove tudo.',
      },
      {
        texto: 'Compartilhar dados publicamente',
        whyWrong: 'Anonimização é para proteger privacidade, não para compartilhar publicamente.',
      },
      {
        texto: 'Criptografar dados',
        whyWrong: 'Criptografia pode ser revertida. Anonimização é permanente - uma vez anonimizado, não dá para voltar.',
      },
    ],
    realWorldExample: 'Dados anonimizados: "Pessoa de 30-40 anos, São Paulo, comprou produto X". Dados identificáveis: "João Silva, 35 anos, Rua ABC 123, comprou produto X". O primeiro não identifica ninguém!',
    companiesUsing: ['Google (analytics anonimizado)', 'Facebook (pesquisas)', 'Institutos de pesquisa', 'Universidades', 'Hospitais (pesquisas)'],
  },
  'dados-009': {
    correctAnswer: 'Fiscalizar e orientar sobre proteção de dados pessoais',
    whyCorrect: 'O DPO (Data Protection Officer) é como um "advogado de dados" - garante que a empresa siga LGPD/GDPR, educa funcionários e é ponto de contato com autoridades.',
    wrongAnswers: [
      {
        texto: 'Coletar o máximo de dados',
        whyWrong: 'DPO promove coleta responsável, não máxima. Seu papel é proteger dados, não coletar mais.',
      },
      {
        texto: 'Vender dados',
        whyWrong: 'DPO protege dados e privacidade, não vende dados.',
      },
      {
        texto: 'Ignorar a LGPD',
        whyWrong: 'DPO existe para garantir que LGPD seja seguida, não ignorada.',
      },
    ],
    realWorldExample: 'DPO ajuda a empresa a criar políticas de privacidade, treina funcionários sobre proteção de dados, responde pedidos de titulares e garante que tudo está em conformidade. É o guardião da privacidade!',
    companiesUsing: ['Todas as empresas que precisam de DPO', 'Bancos', 'Hospitais', 'E-commerces', 'Empresas de tecnologia'],
  },
  'dados-010': {
    correctAnswer: 'Multa de até 2% do faturamento ou R$ 50 milhões',
    whyCorrect: 'LGPD tem dentes afiados! Multas podem ser enormes - até 2% do faturamento (limitado a R$ 50 milhões por infração). É melhor seguir a lei!',
    wrongAnswers: [
      {
        texto: 'Apenas advertência',
        whyWrong: 'LGPD tem sanções graves além de advertência - multas podem ser milhões de reais.',
      },
      {
        texto: 'Nenhuma sanção existe',
        whyWrong: 'LGPD tem várias sanções: advertência, multa, bloqueio, eliminação de dados.',
      },
      {
        texto: 'Apenas bloqueio de dados',
        whyWrong: 'Além de bloqueio, há multas financeiras que podem ser devastadoras para empresas.',
      },
    ],
    realWorldExample: 'Uma empresa que vaza dados de 1 milhão de clientes pode receber multa de R$ 50 milhões. É como ter um acidente de carro - melhor prevenir do que pagar as consequências!',
    companiesUsing: ['ANPD (Autoridade Nacional de Proteção de Dados)', 'Todas as empresas sujeitas à LGPD'],
  },
};
