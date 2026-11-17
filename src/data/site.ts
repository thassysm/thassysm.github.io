// Todo o conteúdo do site fica aqui — edite este arquivo para atualizar textos.
export const profile = {
  brand: 'TM Tech & AI',
  brandTagline: 'Dados, BI, engenharia de dados e IA',
  name: 'Thassys Meira',
  role: 'Engenheiro & Analista de Dados',
  city: 'Curitiba, PR',
  phone: '+55 41 99533-3339',
  phoneRaw: '5541995333339',
  email: 'thassysm@hotmail.com',
  linkedin: 'https://linkedin.com/in/thassys',
  github: 'https://github.com/thassysm',
  cnpj: '60.532.999/0001-41',
  years: '12+',
  whatsappMessage:
    'Olá, Thassys! Vi seu site e gostaria de conversar sobre um projeto de dados / automação.',
};

export const stats = [
  { value: '12+', label: 'anos em dados, BI e engenharia' },
  { value: '16%', label: 'de redução de custos com BI financeiro' },
  { value: '80%', label: 'menos tempo na entrega de dados via ETL' },
  { value: '60%', label: 'mais precisão em dados para IA médica' },
];

export const services = [
  {
    icon: 'pipeline',
    title: 'Engenharia de Dados',
    description:
      'Arquiteturas analíticas ponta a ponta com camadas Bronze, Silver e Gold, ingestão de múltiplas fontes, modelagem e orquestração de pipelines.',
    tags: ['Databricks', 'Airflow', 'dbt', 'SQL'],
  },
  {
    icon: 'chart',
    title: 'BI & Dashboards',
    description:
      'Do dado bruto ao painel que a diretoria realmente usa. Indicadores confiáveis, modelagem semântica e substituição de planilhas manuais.',
    tags: ['Power BI', 'Tableau', 'Superset', 'QlikView'],
  },
  {
    icon: 'automation',
    title: 'Automação & Integrações',
    description:
      'Rotinas que eliminam trabalho manual e erro operacional: scripts, jobs, APIs, webhooks e troca segura de arquivos entre sistemas.',
    tags: ['Python', 'APIs REST', 'Webhooks', 'SFTP'],
  },
  {
    icon: 'ai',
    title: 'IA aplicada & LLMs',
    description:
      'Estruturação de dados para modelos e assistentes internos, com foco em qualidade, contexto e uso responsável de IA no negócio.',
    tags: ['LLMs', 'Qualidade de Dados', 'Python'],
  },
  {
    icon: 'shield',
    title: 'Qualidade & Governança',
    description:
      'Métricas que merecem confiança: validação, linhagem, padronização, segurança de acesso e monitoramento preventivo dos ambientes.',
    tags: ['Governança', 'Segurança', 'Monitoramento'],
  },
  {
    icon: 'code',
    title: 'Sites, Sistemas & Consultoria',
    description:
      'Presença digital profissional, sistemas de gestão e diagnóstico técnico de ambientes de dados — do planejamento à entrega em produção.',
    tags: ['Web', 'Sistemas', 'Diagnóstico'],
  },
];

export const projects = [
  {
    category: 'Engenharia de Dados',
    title: 'Plataforma de dados no Databricks',
    description:
      'Arquitetura analítica ponta a ponta com camadas Bronze, Silver e Gold, governança e datasets tratados publicados para o Tableau.',
    metric: '3',
    metricLabel: 'camadas de dados estruturadas',
    featured: true,
    tags: ['Databricks', 'Delta Lake', 'Tableau'],
  },
  {
    category: 'BI Financeiro',
    title: 'Contenção de custos com dados',
    description:
      'Dashboards e análises sobre empréstimos, contas a receber e a pagar que expuseram inconsistências, perdas e ineficiências nos processos financeiros.',
    metric: '16%',
    metricLabel: 'de redução de custos',
    featured: true,
    tags: ['BI', 'Financeiro', 'Tableau'],
  },
  {
    category: 'ETL & Cloud',
    title: 'Integração hospitalar com Pentaho + AWS',
    description:
      'Automação da extração e entrega de dados do ERP hospitalar para parceiros, com integração segura via AWS, APIs e SFTP.',
    metric: '80%',
    metricLabel: 'menos tempo de disponibilização',
    tags: ['Pentaho', 'AWS', 'SFTP'],
  },
  {
    category: 'IA & Dados',
    title: 'Base de dados para IA médica',
    description:
      'Reestruturação da estrutura de dados que alimenta modelos clínicos, corrigindo inconsistências e padronizando o histórico dos pacientes.',
    metric: '60%',
    metricLabel: 'de ganho em precisão',
    tags: ['Modelagem', 'Qualidade', 'IA'],
  },
  {
    category: 'Automação',
    title: 'Automação de NPS com Python',
    description:
      'Processo diário de coleta, tratamento e envio de pesquisas de satisfação, antes manual e sujeito a falhas, passou a rodar sozinho.',
    metric: '1 min',
    metricLabel: 'antes eram ~15 minutos por dia',
    tags: ['Python', 'SFTP', 'Jobs'],
  },
  {
    category: 'Saúde',
    title: 'Faturamento de telemedicina',
    description:
      'Automação do fluxo de faturamento no Tasy com validação em tempo real, reduzindo retrabalho e cobranças inconsistentes.',
    metric: 'Real-time',
    metricLabel: 'validação no faturamento',
    tags: ['Tasy', 'SQL', 'Processos'],
  },
];

export const otherDeliveries = [
  'Migração de Pentaho 4.3 para 9.4',
  'Migração de Oracle 10g para 21c',
  'Otimização de bancos Oracle, SQL Server e PostgreSQL (+20% no tempo de resposta)',
  'Monitoramento preventivo de disco, backups e recursos',
  'Automação de transferência de logs de produção para testes (-50% de trabalho manual)',
];

export const stack = [
  {
    group: 'Linguagens & Modelagem',
    items: ['SQL', 'Python', 'Java', 'PHP', 'Delphi', 'Data Warehouse', 'Modelagem de Dados'],
  },
  {
    group: 'Bancos de Dados',
    items: ['Oracle', 'SQL Server', 'PostgreSQL', 'MySQL', 'Oracle Cloud'],
  },
  {
    group: 'Engenharia & ETL',
    items: ['Databricks', 'Pentaho', 'Apache Airflow', 'dbt', 'APIs REST', 'Webhooks', 'SFTP', 'Tasy'],
  },
  {
    group: 'BI & Analytics',
    items: ['Power BI', 'Tableau', 'Apache Superset', 'QlikView', 'Looker Studio'],
  },
  {
    group: 'Cloud & Infraestrutura',
    items: ['AWS', 'Linux', 'Windows Server', 'PowerShell', 'Crontab', 'Jobs'],
  },
  {
    group: 'Governança & IA',
    items: ['Governança de Dados', 'Segurança da Informação', 'Qualidade de Dados', 'LLMs', 'Automação de Processos'],
  },
];

export const experience = [
  {
    role: 'Data Engineer & BI Engineer',
    company: 'Unimed CNU',
    period: 'Jul/2025 – Ago/2026',
    location: 'Brasil',
    highlights: [
      'Arquitetura de dados no Databricks com camadas Bronze, Silver e Gold e datasets publicados para o Tableau.',
      'Soluções de BI para contenção de custos, com cerca de 16% de redução nas despesas financeiras.',
    ],
  },
  {
    role: 'Administrador de Banco de Dados (PJ)',
    company: 'Sisteplan Softwares',
    period: 'Abr/2025 – Jul/2025',
    location: 'Curitiba, PR',
    highlights: [
      'Administração e tuning de Oracle, SQL Server e PostgreSQL, com ~20% de melhora no tempo de resposta.',
      'Automação em Python e ajuste de fluxos ETL em Pentaho, reduzindo o trabalho manual em até 50%.',
    ],
  },
  {
    role: 'Analista de Dados',
    company: 'Hospital Angelina Caron',
    period: 'Set/2019 – Abr/2025',
    location: 'Campina Grande do Sul, PR',
    highlights: [
      'Integração de dados com Tasy, Superset, Pentaho e Python, reduzindo a latência dos pipelines em ~20%.',
      'Automação de NPS, integrações via API/AWS/SFTP e dashboards em Power BI para as áreas assistencial e financeira.',
    ],
  },
  {
    role: 'Gerente de Dados e TI',
    company: 'MedSul Saúde',
    period: 'Abr/2016 – Set/2019',
    location: 'Curitiba, PR',
    highlights: [
      'Gestão de infraestrutura, Active Directory para 50+ usuários e bancos Oracle em múltiplas unidades.',
      'Dashboards estratégicos em Power BI com ~10% de ganho de eficiência operacional.',
    ],
  },
  {
    role: 'Desenvolvedor de Software',
    company: 'Solus Computação',
    period: 'Fev/2014 – Mar/2016',
    location: 'Londrina, PR',
    highlights: [
      'Desenvolvimento de módulos de gestão em saúde com Delphi, PHP e Java.',
      'Modelagem de banco de dados, integração entre sistemas e implantação em clientes.',
    ],
  },
];

export const education = [
  {
    title: 'Pós-graduação em Administração de Banco de Dados',
    institution: 'FESP',
    period: '2017 – 2019',
  },
  {
    title: 'Bacharelado em Engenharia da Computação',
    institution: 'UNOPAR',
    period: '2009 – 2015',
  },
];

export const certifications = [
  'AWS Certified Solutions Architect – Associate',
  'Oracle Cloud Infrastructure Foundations Associate',
  'Power BI · Pentaho Data Integration',
  'Python para Análise de Dados · Python Immersion',
  'SQL Avançado e Modelagem de Dados',
  'Segurança e Governança de Dados',
];

export const languages = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Intermediário — leitura técnica e conversação profissional básica' },
];
