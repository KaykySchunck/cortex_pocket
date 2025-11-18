export type Topic = {
  id: string;
  title: string;
  summary: string;
};

export const TOPICS: Topic[] = [
  {
    id: 'ia-generativa',
    title: 'IA Generativa e Produtividade',
    summary: 'Modelos generativos aplicados ao dia a dia e à performance individual.',
  },
  {
    id: 'automacao-trabalho',
    title: 'Automação Inteligente no Trabalho',
    summary: 'Combinação de RPA + IA para processos repetitivos com governança.',
  },
  {
    id: 'dados-lgpd-gdpr',
    title: 'Dados, LGPD/GDPR e Governança',
    summary: 'Fundamentos de privacidade, compliance e proteção de dados pessoais.',
  },
  {
    id: 'cloud-custos',
    title: 'Computação em Nuvem e Custos',
    summary: 'FinOps, otimização e boas práticas para operar nuvem com eficiência.',
  },
  {
    id: 'ciberseguranca',
    title: 'Cibersegurança (Phishing/Ransomware)',
    summary: 'Defesa contra ameaças digitais e cultura de segurança contínua.',
  },
  {
    id: 'iot-ind4',
    title: 'IoT e Indústria 4.0',
    summary: 'Sensores conectados, edge computing e dados em tempo real no chão de fábrica.',
  },
  {
    id: 'etica-vies',
    title: 'Ética e Viés Algorítmico',
    summary: 'Uso responsável de IA, fairness e transparência em modelos.',
  },
  {
    id: 'ti-verde',
    title: 'Sustentabilidade e TI Verde',
    summary: 'Tecnologia a favor de metas ESG e redução de pegada de carbono.',
  },
  {
    id: 'apis-integracao',
    title: 'APIs, Integrações e ERP/CRM',
    summary: 'Arquiteturas conectadas, governança de APIs e automação entre sistemas.',
  },
  {
    id: 'blockchain-web3',
    title: 'Blockchain, Tokenização e Web3',
    summary: 'Registros distribuídos, smart contracts e aplicações corporativas.',
  },
];

export const TOPIC_TITLES = TOPICS.reduce<Record<string, string>>((acc, topic) => {
  acc[topic.id] = topic.title;
  return acc;
}, {});

export const TOPIC_MAP = TOPICS.reduce<Record<string, Topic>>((acc, topic) => {
  acc[topic.id] = topic;
  return acc;
}, {});

export type TopicGroup = {
  id: string;
  title: string;
  topicIds: string[];
};

export const TOPIC_GROUPS: TopicGroup[] = [
  {
    id: 'grupo-ia-automacao',
    title: 'IA & Automação',
    topicIds: ['ia-generativa', 'automacao-trabalho'],
  },
  {
    id: 'grupo-dados-governanca',
    title: 'Dados, Ética & Governança',
    topicIds: ['dados-lgpd-gdpr', 'etica-vies'],
  },
  {
    id: 'grupo-operacoes',
    title: 'Operações Digitais',
    topicIds: ['cloud-custos', 'iot-ind4', 'ti-verde'],
  },
  {
    id: 'grupo-seguranca-integracao',
    title: 'Segurança & Integração',
    topicIds: ['ciberseguranca', 'apis-integracao'],
  },
  {
    id: 'grupo-inovacao',
    title: 'Inovação & Web3',
    topicIds: ['blockchain-web3'],
  },
];
