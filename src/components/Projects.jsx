import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaLaptopCode,
  FaDesktop,
  FaGithub,
  FaTimes,
  FaLayerGroup,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaReact,
  FaPython,
  FaJs,
  FaHtml5,
  FaCode,
} from "react-icons/fa";
import {
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiTailwindcss,
  SiNextdotjs,
  SiElectron,
  SiPhp,
  SiDotnet,
  SiVite,
} from "react-icons/si";
import { Icon } from "@iconify/react";

const PROJETOS = [
  {
    titulo: "AcadGest – SaaS Multi-Tenant de Gestão Escolar (Enterprise-Grade)",
    categoria: "saas",
    badge: "SaaS & Educação",
    descricao:
      "Sistema SaaS corporativo Multi-Tenant para redes de ensino e colégios privados. Conta com isolamento rigoroso por escola via Prisma Extension (Row-Level Multi-Tenancy), White-Label dinâmico, emissão de Históricos Escolares e Declarações Oficiais em A4 (@media print), Diário de Classe tipo planilha e gestão financeira com PIX Copia-e-Cola e DRE.",
    tags: ["React 18", "TypeScript", "Fastify", "Node.js", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "Multi-Tenant"],
    github: "https://github.com/leonardobier/acadgest",
    destaque: true,
    arquitetura: {
      frontend: "React 18, Vite, TypeScript strict, Tailwind CSS, Radix UI (shadcn/ui), TanStack Query v5 e motor de impressão A4 (@media print).",
      backend: "Node.js + Fastify v5 com validação rigorosa via Zod, REST APIs, autenticação JWT + Refresh Token e RBAC multinível.",
      database: "PostgreSQL (Neon Serverless) + Prisma ORM com Row-Level Multi-Tenancy via Prisma Client Extension isolando cada escola.",
      destaque: "Identidade visual White-Label dinâmica, Diário de Classe estilo planilha, geração de PIX Copia-e-Cola e relatórios gerenciais DRE.",
    },
  },
  {
    titulo: "NextFlowChat – SaaS de Atendimento e Automação via WhatsApp",
    categoria: "saas",
    badge: "SaaS & Automação",
    descricao:
      "Plataforma SaaS multiempresa de automação e chatbot, desenvolvida em TypeScript e banco de dados PostgreSQL. O sistema possui layout responsivo e fluido, permitindo que diferentes empresas utilizem ambientes independentes. Conta com conexão via QR Code, gestão de contatos e criação de fluxos automáticos de mensagens personalizáveis, oferecendo atendimento via bot com transição inteligente para atendentes humanos.",
    tags: ["TypeScript", "Node.js", "PostgreSQL", "WhatsApp API", "SaaS", "Multi-tenant"],
    link: "https://nextflow.leenicorporation.com.br",
    destaque: true,
    arquitetura: {
      frontend: "Interface web responsiva em TypeScript / HTML5 / CSS3 com construtor de fluxos de atendimento e painel em tempo real.",
      backend: "Node.js + TypeScript gerenciando sessões simultâneas de WhatsApp, webhooks de mensagens e filas de atendimento.",
      database: "PostgreSQL estruturado para ambientes multiempresa independentes, histórico de conversas e contatos.",
      destaque: "Pareamento instantâneo via QR Code e motor de bot com transição inteligente (handoff) para operadores humanos.",
    },
  },
  {
    titulo: "NextFinances – Controle Financeiro Inteligente com IA",
    categoria: "saas",
    badge: "Fintech & IA",
    descricao:
      "Plataforma inovadora de gestão financeira por assinatura (mensal/anual), projetada para dar ao usuário controle total sobre suas finanças com o apoio de Inteligência Artificial. Desenvolvido em TypeScript e PostgreSQL, conta com integração completa à API do Mercado Pago para gestão de assinaturas, oferecendo um ambiente seguro para projeções e organização de receitas, despesas e metas.",
    tags: ["TypeScript", "Node.js", "PostgreSQL", "Mercado Pago", "Inteligência Artificial", "API"],
    link: "https://nextfinances.leenicorporation.com.br",
    github: "https://github.com/leonardobier/nextfinances",
    destaque: true,
    arquitetura: {
      frontend: "Dashboard financeiro responsivo em TypeScript / HTML5 / CSS3 com projeções visuais, metas e categorização.",
      backend: "Node.js + TypeScript com integração à API do Mercado Pago, processamento de webhooks de assinatura e camada de IA.",
      database: "PostgreSQL para transações financeiras, planos recorrentes (mensal/anual) e integridade contábil.",
      destaque: "Assinaturas automatizadas via Mercado Pago e assistente financeiro inteligente para análise preditiva de despesas.",
    },
  },
  {
    titulo: "NextParty – Sistema de Gestão e Reservas para Salão de Festas",
    categoria: "saas",
    badge: "SaaS & Eventos",
    descricao:
      "Sistema web completo de gerenciamento de reservas, datas e operações de salão de festas e eventos. Combina portal institucional de alta conversão para clientes, painel administrativo centralizado com motor de agendamento em tempo real que previne conflitos de datas no backend, e área do cliente para acompanhamento do evento.",
    tags: ["Next.js", "React", "TypeScript", "Prisma ORM", "PostgreSQL", "Tailwind CSS", "API"],
    github: "https://github.com/leonardobier/nextparty",
    destaque: true,
    arquitetura: {
      frontend: "Next.js + React + TypeScript + Tailwind CSS entregando portal institucional rápido, galeria e área privativa do cliente.",
      backend: "API Routes em Next.js com validação transacional de agendamentos, prevenção de conflito de datas e painel administrativo.",
      database: "PostgreSQL gerenciado com Prisma ORM para contratos, reservas, calendário de disponibilidade e clientes.",
      destaque: "Motor de agenda em tempo real com bloqueio automático de choques de horário e controle completo de pacotes e serviços.",
    },
  },
  {
    titulo: "NextHelp – Sistema de Gerenciamento de Chamados",
    categoria: "web",
    badge: "Suporte & Gestão",
    descricao:
      "Plataforma web corporativa de helpdesk criada para organizar e centralizar solicitações de suporte de TI. Conta com autenticação refinada por níveis de acesso (administradores, solicitantes e atendentes). Cada chamado recebe um identificador único, facilitando o acompanhamento do ciclo de atendimento desde a abertura até a resolução.",
    tags: ["Web App", "Gestão de TI", "Helpdesk", "Autenticação", "API", "Workflow"],
    link: "https://nexthelp.lovable.app",
    arquitetura: {
      frontend: "Aplicação web responsiva com HTML5, CSS3 e painéis segmentados por perfil de usuário (solicitante, atendente e admin).",
      backend: "Camada de autenticação e regras de negócio com controle de acesso por perfil (RBAC) e geração de protocolo único.",
      database: "Persistência estruturada de tickets, histórico de interações, prioridades e métricas de resolução.",
      destaque: "Rastreabilidade ponta a ponta do ciclo de chamados corporativos com controle claro de SLAs e permissões.",
    },
  },
  {
    titulo: "EduCantinas – Gestão Operacional de Cantina & Estoque",
    categoria: "web",
    badge: "Gestão & Varejo",
    descricao:
      "Sistema web corporativo para gestão de cantina escolar e controle setorial de estoque (bebidas, estufa de salgados, almoço diário, doces e açaí). Possui controle de precificação, gestão de produtos disponíveis e envio de alertas automáticos para itens com estoque baixo.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "API", "Controle de Estoque"],
    github: "https://github.com/leonardobier/cantina_cafa",
    arquitetura: {
      frontend: "React + TypeScript + Vite + Tailwind CSS com interface ágil por setores (geladeira, estufa, almoço, doces e açaí).",
      backend: "Endpoints API dedicados para autenticação, movimentação de estoque, precificação e status de disponibilidade.",
      database: "Modelagem relacional de produtos, categorias setoriais, cardápio semanal e limites mínimos de estoque.",
      destaque: "Painel de alertas automáticos para reposição rápida e fluxo otimizado para operação diária em horários de pico.",
    },
  },
  {
    titulo: "CAFA Relatórios – BI Estratégico, Auditoria & Gestão Unificada",
    categoria: "desktop",
    badge: "BI & Análise de Dados",
    descricao:
      "Plataforma de inteligência e consolidação de dados corporativos integrada diretamente ao banco Unimestre. Realiza acompanhamento analítico e comparativo histórico de matrículas (2024-2027), gestão e relatórios de inadimplência financeira e módulo de auditoria de diários de classe e logs.",
    tags: ["Python", "MySQL", "Excel Avançado", "Auditoria", "Data Analytics"],
    github: "https://github.com/leonardobier/cafa_relatorios",
    arquitetura: {
      frontend: "Dashboards gerenciais e exportadores estruturados para análise executiva e planilhas gerenciais.",
      backend: "Scripts e rotinas de extração/auditoria em Python para cruzamento histórico de matrículas, inadimplência e logs.",
      database: "Conexão direta de leitura analítica ao banco relacional MySQL do sistema educacional Unimestre.",
      destaque: "Auditoria automatizada de diários de classe e comparativos plurianuais (2024–2027) apoiando decisões da diretoria.",
    },
  },
  {
    titulo: "Acompanha Matrículas – Colégio de Aplicação Ferreira de Almeida",
    categoria: "desktop",
    badge: "Desktop Corporativo",
    descricao:
      "Sistema desktop construído em C# para o Colégio CAFA, focado em otimizar e gerenciar o período de renovações e novas matrículas. Realiza consultas e cruzamentos avançados diretamente no banco de dados MySQL do sistema educacional, com filtros dinâmicos e relatórios estratégicos para a produtividade da secretaria escolar.",
    tags: ["C#", ".NET", "MySQL", "Desktop", "Gestão Escolar"],
    arquitetura: {
      frontend: "Interface desktop nativa em C# / .NET (Windows Forms) desenhada para agilidade operacional da secretaria.",
      backend: "Camada de negócios em C# executando filtros dinâmicos, consolidação de metas e exportação de listagens.",
      database: "Consultas SQL indexadas e otimizadas diretamente sobre o banco MySQL institucional.",
      destaque: "Redução expressiva do tempo de conferência de rematrículas com visibilidade imediata de metas por turma.",
    },
  },
  {
    titulo: "NextCareer – Simulador & Jogo de Futebol 3D (Desktop)",
    categoria: "desktop",
    badge: "Game Dev & 3D",
    descricao:
      "Jogo e simulador 3D de Modo Carreira de atleta de futebol desenvolvido em TypeScript com Three.js e empacotado para Desktop com Electron. Apresenta partidas 11v11, mundo aberto, estádios detalhados, sistema de decisões táticas, cutscenes e evolução de atributos do jogador.",
    tags: ["TypeScript", "Three.js", "Electron", "Vite", "3D Graphics"],
    github: "https://github.com/leonardobier/nextcarrer",
    arquitetura: {
      frontend: "Motor 3D em Three.js + TypeScript + Vite renderizando estádios, física de partida 11v11, mundo aberto e HUD.",
      backend: "Lógica de simulação de carreira, progressão de atributos, IA de campo e empacotamento nativo com Electron.",
      database: "Persistência local estruturada para progresso do Modo Carreira, estatísticas de temporada e decisões.",
      destaque: "Integração de WebGL (Three.js) em aplicação desktop executável via Electron com cutscenes e partidas completas.",
    },
  },
  {
    titulo: "CAFA Emp – Gestão de Eventos e Apuração em Tempo Real",
    categoria: "web",
    badge: "Aplicação Web",
    descricao:
      "Sistema web desenvolvido para o gerenciamento de pontuação de alunos em grandes eventos institucionais, como a Feira do Empreendedorismo. Desenvolvido com PHP, MySQL e JavaScript, oferece interface intuitiva para inserção rápida de dados pelos avaliadores, apuração de pontos das equipes em tempo real e geração automática de rankings.",
    tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Tempo Real"],
    github: "https://github.com/leonardobier/CAFA-Emp",
    arquitetura: {
      frontend: "HTML5, CSS3 e JavaScript otimizado para dispositivos móveis dos professores avaliadores em campo.",
      backend: "PHP estruturado processando lançamentos simultâneos de notas, regras de pontuação e validação por perfil.",
      database: "MySQL para equipes, critérios avaliativos, notas individuais e cálculo consolidado de rankings.",
      destaque: "Apuração e atualização de classificações ao vivo durante o evento, eliminando planilhas manuais.",
    },
  },
  {
    titulo: "Gestão Acadêmica e Financeira – Studio Ingrid Soutinho",
    categoria: "web",
    badge: "ERP & Gestão",
    descricao:
      "Plataforma web completa para gestão acadêmica, financeira e operacional. Centraliza matrículas, turmas, controle de mensalidades e organização de eventos com venda de ingressos e reserva de assentos. Inclui Portal do Responsável interativo para consulta financeira e quitação online.",
    tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "C#", "Portal do Cliente"],
    github: "https://github.com/leonardobier/studioingridsoutinho",
    arquitetura: {
      frontend: "HTML5, CSS3 e JavaScript com mapa interativo de assentos para espetáculos e Portal do Responsável.",
      backend: "PHP para gestão acadêmica/financeira, emissão de documentos e controle de pagamentos (evoluído de C# Desktop).",
      database: "MySQL estruturado para alunos, responsáveis, turmas, mensalidades, vendas de ingressos e assentos.",
      destaque: "Migração completa de aplicação legado C# + MySQL para arquitetura Web acessível em qualquer dispositivo.",
    },
  },
  {
    titulo: "Sistema de Pontuação e Olimpíadas – Colégio João Paulo I",
    categoria: "web",
    badge: "Competições & Gestão",
    descricao:
      "Sistema de gerenciamento de competições escolares esportivas e pedagógicas. Múltiplos níveis de permissão (admin, secretaria, professor e aluno), registro de resultados de partidas, quadros de medalhas dinâmicos e controle de almoxarifado esportivo.",
    tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "C#"],
    github: "https://github.com/leonardobier/jpiesportes_web",
    arquitetura: {
      frontend: "HTML5, CSS3 e JavaScript responsivo exibindo quadros de medalhas, tabelas e chaves de modalidades.",
      backend: "PHP com autenticação multinível (admin, secretaria, professor e aluno), evoluído originalmente de C# Desktop.",
      database: "MySQL gerenciando modalidades, inscrições de alunos, súmulas de partidas, reservas e almoxarifado.",
      destaque: "Unificação de controle esportivo, gestão de materiais e múltiplos perfis de acesso em ambiente web.",
    },
  },
  {
    titulo: "Portal Leeni Corporation – Soluções Tecnológicas & CRM",
    categoria: "web",
    badge: "Institucional & CRM",
    descricao:
      "Portal corporativo oficial da Leeni Corporation apresentando seu portfólio de softwares, ferramentas de captação de clientes (LeadHunter), CRM interno integrado e canal de contato comercial para contratações B2B.",
    tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "CRM"],
    github: "https://github.com/leonardobier/site_leenicorporation",
    arquitetura: {
      frontend: "Portal institucional e painel CRM em HTML5, CSS3 e JavaScript focado em conversão B2B.",
      backend: "PHP gerenciando módulos LeadHunter, funil de atendimento comercial e formulários corporativos.",
      database: "MySQL armazenando leads captados, histórico de contatos e status de negociações.",
      destaque: "Integração direta entre site institucional de alta conversão e CRM interno de prospecção.",
    },
  },
  {
    titulo: "NoRiskApp – Mapeamento & Gestão de Segurança e Riscos",
    categoria: "web",
    badge: "Segurança & Mapas",
    descricao:
      "Aplicação web voltada para conscientização, mapeamento georreferenciado e monitoramento de riscos patrimoniais e urbanos, facilitando a identificação visual de pontos de atenção e incidentes em mapa interativo.",
    tags: ["JavaScript", "HTML5", "CSS3", "Web App", "Geolocalização"],
    github: "https://github.com/leonardobier/noriskapp",
    arquitetura: {
      frontend: "HTML5, CSS3 e JavaScript com visualização interativa em mapa para sinalização de zonas de atenção.",
      backend: "Lógica client-side e manipulação de dados espaciais para categorização de incidentes e níveis de risco.",
      database: "Estruturação de marcadores georreferenciados e histórico de ocorrências de segurança.",
      destaque: "Interface intuitiva voltada à prevenção rápida e conscientização comunitária baseada em localização.",
    },
  },
  {
    titulo: "Site Institucional & Otimização Contínua – Colégio CAFA",
    categoria: "web",
    badge: "Institucional & UX",
    descricao:
      "Gerenciamento de infraestrutura, hospedagem e manutenção contínua do portal institucional do Colégio de Aplicação Ferreira de Almeida. Implementação de melhorias contínuas em usabilidade (UX/UI), segurança, responsividade e atualização de conteúdos.",
    tags: ["HTML5", "CSS3", "JavaScript", "UX/UI", "SEO"],
    github: "https://github.com/leonardobier/site_colegiocafa",
    arquitetura: {
      frontend: "HTML5, CSS3 e JavaScript com foco em acessibilidade, performance de carregamento e layout responsivo.",
      backend: "Gerenciamento de hospedagem, certificados SSL, domínios e integração de formulários institucionais.",
      database: "Organização de ativos digitais, avisos oficiais e conteúdos pedagógicos do portal.",
      destaque: "Evolução contínua de UX/UI e SEO técnico mantendo alta disponibilidade do canal oficial da escola.",
    },
  },
];

const TECH_ICON_MAP = [
  { match: "react", render: () => <FaReact style={{ color: "#61dafb" }} title="React" /> },
  { match: "next.js", render: () => <SiNextdotjs style={{ color: "#ffffff" }} title="Next.js" /> },
  { match: "typescript", render: () => <SiTypescript style={{ color: "#3178c6" }} title="TypeScript" /> },
  { match: "javascript", render: () => <FaJs style={{ color: "#f7df1e" }} title="JavaScript" /> },
  { match: "fastify", render: () => <Icon icon="simple-icons:fastify" style={{ color: "#ffffff" }} /> },
  { match: "node.js", render: () => <Icon icon="devicon:nodejs" /> },
  { match: "postgresql", render: () => <SiPostgresql style={{ color: "#336791" }} title="PostgreSQL" /> },
  { match: "mysql", render: () => <SiMysql style={{ color: "#00758f" }} title="MySQL" /> },
  { match: "prisma", render: () => <SiPrisma style={{ color: "#38bdf8" }} title="Prisma ORM" /> },
  { match: "tailwind", render: () => <SiTailwindcss style={{ color: "#38bdf8" }} title="Tailwind CSS" /> },
  { match: "php", render: () => <SiPhp style={{ color: "#777bb4" }} title="PHP" /> },
  { match: "c#", render: () => <Icon icon="devicon:csharp" /> },
  { match: ".net", render: () => <SiDotnet style={{ color: "#512bd4" }} title=".NET" /> },
  { match: "python", render: () => <FaPython style={{ color: "#3776ab" }} title="Python" /> },
  { match: "electron", render: () => <SiElectron style={{ color: "#9feaf9" }} title="Electron" /> },
  { match: "three.js", render: () => <Icon icon="devicon:threejs" style={{ color: "#ffffff" }} /> },
  { match: "vite", render: () => <SiVite style={{ color: "#a855f7" }} title="Vite" /> },
  { match: "html5", render: () => <FaHtml5 style={{ color: "#e34c26" }} title="HTML5" /> },
];

function getProjectStackIcons(tags) {
  const icons = [];
  const usedMatches = new Set();

  for (const tag of tags) {
    const lower = tag.toLowerCase();
    for (const entry of TECH_ICON_MAP) {
      if (lower.includes(entry.match) && !usedMatches.has(entry.match)) {
        usedMatches.add(entry.match);
        icons.push({ key: entry.match, label: tag, element: entry.render() });
        break;
      }
    }
    if (icons.length >= 4) break;
  }
  return icons;
}

function matchesSelectedTech(proj, selectedTech) {
  if (!selectedTech) return true;
  const query = selectedTech.toLowerCase();

  if (query === "git" || query === "github") {
    return Boolean(proj.github);
  }
  if (query === "visual studio") {
    return (
      proj.tags.some((t) => t.toLowerCase().includes("c#") || t.toLowerCase().includes(".net")) ||
      (proj.arquitetura &&
        (proj.arquitetura.backend.includes("C#") || proj.arquitetura.frontend.includes("C#")))
    );
  }
  if (query === "vs code") {
    return (
      proj.categoria !== "desktop" ||
      proj.tags.some((t) => ["TypeScript", "Python"].includes(t))
    );
  }
  if (query === "api") {
    return (
      proj.tags.some((t) => t.toLowerCase().includes("api") || t.toLowerCase().includes("mercado pago")) ||
      (proj.arquitetura &&
        `${proj.arquitetura.backend} ${proj.arquitetura.destaque}`.toLowerCase().includes("api"))
    );
  }

  const inTags = proj.tags.some((t) => t.toLowerCase().includes(query));
  const inText = `${proj.titulo} ${proj.descricao}`.toLowerCase().includes(query);
  const inArch = proj.arquitetura
    ? Object.values(proj.arquitetura).join(" ").toLowerCase().includes(query)
    : false;

  return inTags || inText || inArch;
}

function Projects({ selectedTech, onSelectTech }) {
  const [filter, setFilter] = useState("all");
  const [prevSelectedTech, setPrevSelectedTech] = useState(selectedTech);
  const [activeModalProject, setActiveModalProject] = useState(null);

  if (selectedTech !== prevSelectedTech) {
    setPrevSelectedTech(selectedTech);
    if (selectedTech) {
      setFilter("all");
    }
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveModalProject(null);
      }
    };
    if (activeModalProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeModalProject]);

  const filterOptions = [
    { id: "all", label: "Todos os Projetos" },
    { id: "saas", label: "SaaS & Automação" },
    { id: "web", label: "Aplicações Web" },
    { id: "desktop", label: "Desktop & Dados" },
  ];

  const filteredProjetos = PROJETOS.filter((proj) => {
    const matchesCategory = filter === "all" || proj.categoria === filter;
    const matchesTech = matchesSelectedTech(proj, selectedTech);
    return matchesCategory && matchesTech;
  });

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Casos de Sucesso</span>
          <h2>Projetos & Portfólio</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Conheça as soluções desenvolvidas, clique em qualquer tag tecnológica para filtrar ou abra o <strong>Raio-X Técnico</strong> para ver a arquitetura de cada projeto:
          </p>
        </motion.div>

        {/* Botões de Filtro */}
        <div className="project-filter-tabs">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              className={`project-filter-btn ${filter === opt.id ? "active" : ""}`}
              onClick={() => setFilter(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Banner de Filtro Ativo por Tecnologia */}
        <AnimatePresence>
          {selectedTech && (
            <motion.div
              className="active-tech-filter-banner"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <span>
                Exibindo projetos com a tecnologia: <strong>{selectedTech}</strong> ({filteredProjetos.length}{" "}
                {filteredProjetos.length === 1 ? "encontrado" : "encontrados"})
              </span>
              <button
                type="button"
                className="clear-tech-filter-btn"
                onClick={() => onSelectTech?.(null)}
              >
                Limpar filtro ×
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid de Projetos */}
        {filteredProjetos.length === 0 ? (
          <div className="projects-empty-state">
            <p>Nenhum projeto encontrado para esta combinação de categoria e tecnologia.</p>
            <button
              type="button"
              className="clear-tech-filter-btn"
              onClick={() => {
                setFilter("all");
                onSelectTech?.(null);
              }}
            >
              Mostrar todos os projetos
            </button>
          </div>
        ) : (
          <motion.div className="projects-grid" layout>
            <AnimatePresence>
              {filteredProjetos.map((proj, index) => {
                const stackIcons = getProjectStackIcons(proj.tags);
                return (
                  <motion.div
                    key={proj.titulo}
                    className={`project-card ${proj.destaque ? "featured-card" : ""}`}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.04 }}
                    whileHover={{ y: -6 }}
                  >
                    <div className="project-card-header">
                      <div className="project-type-badge">
                        {proj.categoria === "desktop" ? <FaDesktop /> : <FaLaptopCode />}
                        <span>{proj.badge}</span>
                      </div>

                      <div className="project-header-right">
                        {stackIcons.length > 0 && (
                          <div className="project-stack-icons" aria-label="Principais tecnologias">
                            {stackIcons.map((item) => (
                              <span key={item.key} className="stack-mini-icon" title={item.label}>
                                {item.element}
                              </span>
                            ))}
                          </div>
                        )}
                        {proj.destaque && <span className="featured-badge">Destaque</span>}
                      </div>
                    </div>

                    <h3 className="project-title">{proj.titulo}</h3>

                    <p className="project-description">{proj.descricao}</p>

                    {/* Tags Tecnológicas Clicáveis */}
                    <div className="project-tags">
                      {proj.tags.map((tag, tIndex) => {
                        const isTagActive =
                          selectedTech && tag.toLowerCase().includes(selectedTech.toLowerCase());
                        return (
                          <button
                            type="button"
                            key={tIndex}
                            className={`project-tag-pill clickable ${isTagActive ? "active-tag" : ""}`}
                            onClick={() => onSelectTech?.(tag)}
                            title={`Filtrar projetos por ${tag}`}
                          >
                            {tag}
                          </button>
                        );
                      })}
                    </div>

                    {/* Ações / Links */}
                    <div className="project-card-footer">
                      <div className="project-action-buttons">
                        <button
                          type="button"
                          className="project-xray-btn"
                          onClick={() => setActiveModalProject(proj)}
                          title="Ver Raio-X da Arquitetura"
                        >
                          <FaCode /> Raio-X
                        </button>

                        {proj.link && (
                          <a
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-live-btn"
                          >
                            Sistema <FaExternalLinkAlt style={{ fontSize: "0.78rem" }} />
                          </a>
                        )}
                        {proj.github && (
                          <a
                            href={proj.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`project-github-btn ${!proj.link ? "full-width" : ""}`}
                          >
                            <FaGithub /> {!proj.link ? "Repositório" : "Código"}
                          </a>
                        )}
                        {!proj.link && !proj.github && (
                          <span className="project-internal-badge compact">
                            Corporativo
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Modal Raio-X de Arquitetura */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div
            className="arch-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalProject(null)}
          >
            <motion.div
              className="arch-modal-card"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="arch-modal-header">
                <div>
                  <span className="project-type-badge">{activeModalProject.badge}</span>
                  <h3>{activeModalProject.titulo}</h3>
                </div>
                <button
                  type="button"
                  className="arch-modal-close"
                  onClick={() => setActiveModalProject(null)}
                  aria-label="Fechar modal"
                >
                  <FaTimes />
                </button>
              </div>

              <p className="arch-modal-desc">{activeModalProject.descricao}</p>

              <div className="arch-grid">
                <div className="arch-box">
                  <div className="arch-box-title">
                    <FaLayerGroup /> Frontend & UI
                  </div>
                  <p>{activeModalProject.arquitetura.frontend}</p>
                </div>

                <div className="arch-box">
                  <div className="arch-box-title">
                    <FaServer /> Backend & APIs
                  </div>
                  <p>{activeModalProject.arquitetura.backend}</p>
                </div>

                <div className="arch-box">
                  <div className="arch-box-title">
                    <FaDatabase /> Banco de Dados & Modelagem
                  </div>
                  <p>{activeModalProject.arquitetura.database}</p>
                </div>

                <div className="arch-box highlight">
                  <div className="arch-box-title">
                    <FaShieldAlt /> Diferencial de Engenharia
                  </div>
                  <p>{activeModalProject.arquitetura.destaque}</p>
                </div>
              </div>

              <div className="arch-modal-tags">
                {activeModalProject.tags.map((tag, idx) => (
                  <button
                    type="button"
                    key={idx}
                    className="project-tag-pill clickable"
                    onClick={() => {
                      onSelectTech?.(tag);
                      setActiveModalProject(null);
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <div className="arch-modal-actions">
                {activeModalProject.link && (
                  <a
                    href={activeModalProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-live-btn"
                  >
                    Acessar Sistema Online <FaExternalLinkAlt style={{ fontSize: "0.8rem" }} />
                  </a>
                )}
                {activeModalProject.github && (
                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github-btn"
                  >
                    <FaGithub /> Ver Código no GitHub
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
