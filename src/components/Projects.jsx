import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaLaptopCode, FaDesktop, FaGithub } from "react-icons/fa";

function Projects() {
  const [filter, setFilter] = useState("all");

  const projetos = [
    {
      titulo: "AcadGest – SaaS Multi-Tenant de Gestão Escolar (Enterprise-Grade)",
      categoria: "saas",
      badge: "SaaS & Educação",
      descricao:
        "Sistema SaaS corporativo Multi-Tenant para redes de ensino e colégios privados. Conta com isolamento rigoroso por escola via Prisma Extension (Row-Level Multi-Tenancy), White-Label dinâmico, emissão de Históricos Escolares e Declarações Oficiais em A4 (@media print), Diário de Classe tipo planilha e gestão financeira com PIX Copia-e-Cola e DRE.",
      tags: ["React 18", "TypeScript", "Fastify", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "Multi-Tenant"],
      github: "https://github.com/leonardobier/acadgest",
      destaque: true,
    },
    {
      titulo: "NextFlowChat – SaaS de Atendimento e Automação via WhatsApp",
      categoria: "saas",
      badge: "SaaS & Automação",
      descricao:
        "Plataforma SaaS multiempresa de automação e chatbot, desenvolvida em TypeScript e banco de dados PostgreSQL. O sistema possui layout responsivo e fluido, permitindo que diferentes empresas utilizem ambientes independentes. Conta com conexão via QR Code, gestão de contatos e criação de fluxos automáticos de mensagens personalizáveis, oferecendo atendimento via bot com transição inteligente para atendentes humanos.",
      tags: ["TypeScript", "PostgreSQL", "WhatsApp API", "SaaS", "Multi-tenant"],
      link: "https://nextflow.leenicorporation.com.br",
      destaque: true,
    },
    {
      titulo: "NextFinances – Controle Financeiro Inteligente com IA",
      categoria: "saas",
      badge: "Fintech & IA",
      descricao:
        "Plataforma inovadora de gestão financeira por assinatura (mensal/anual), projetada para dar ao usuário controle total sobre suas finanças com o apoio de Inteligência Artificial. Desenvolvido em TypeScript e PostgreSQL, conta com integração completa à API do Mercado Pago para gestão de assinaturas, oferecendo um ambiente seguro para projeções e organização de receitas, despesas e metas.",
      tags: ["TypeScript", "PostgreSQL", "Mercado Pago", "Inteligência Artificial", "SaaS"],
      link: "https://nextfinances.leenicorporation.com.br",
      github: "https://github.com/leonardobier/nextfinances",
      destaque: true,
    },
    {
      titulo: "NextParty Kids – Plataforma de Gestão & Buffet Infantil",
      categoria: "saas",
      badge: "SaaS & Eventos",
      descricao:
        "Solução web completa para buffets e casas de festas infantis. Combina Landing Page de alta conversão para famílias (atrações, cardápios e galeria interativa), Portal dos Pais com acompanhamento em tempo real e Painel Administrativo com motor de agendamento que previne conflitos de datas no backend.",
      tags: ["Next.js", "React", "TypeScript", "Prisma ORM", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/leonardobier/nextparty",
      destaque: true,
    },
    {
      titulo: "NextHelp – Sistema de Gerenciamento de Chamados",
      categoria: "web",
      badge: "Suporte & Gestão",
      descricao:
        "Plataforma web corporativa de helpdesk criada para organizar e centralizar solicitações de suporte de TI. Conta com autenticação refinada por níveis de acesso (administradores, solicitantes e atendentes). Cada chamado recebe um identificador único, facilitando o acompanhamento do ciclo de atendimento desde a abertura até a resolução.",
      tags: ["Web App", "Gestão de TI", "Helpdesk", "Autenticação", "Workflow"],
      link: "https://nexthelp.lovable.app",
    },
    {
      titulo: "EduCantinas – Gestão Operacional de Cantina & Estoque",
      categoria: "web",
      badge: "Gestão & Varejo",
      descricao:
        "Sistema web corporativo para gestão de cantina escolar e controle setorial de estoque (bebidas, estufa de salgados, almoço diário, doces e açaí). Possui controle de precificação, gestão de produtos disponíveis e envio de alertas automáticos para itens com estoque baixo.",
      tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Controle de Estoque"],
      github: "https://github.com/leonardobier/cantina_cafa",
    },
    {
      titulo: "CAFA Relatórios – BI Estratégico, Auditoria & Gestão Unificada",
      categoria: "desktop",
      badge: "BI & Análise de Dados",
      descricao:
        "Plataforma de inteligência e consolidação de dados corporativos integrada diretamente ao banco Unimestre. Realiza acompanhamento analítico e comparativo histórico de matrículas (2024-2027), gestão e relatórios de inadimplência financeira e módulo de auditoria de diários de classe e logs.",
      tags: ["Python", "MySQL", "Excel Avançado", "Auditoria", "Data Analytics"],
      github: "https://github.com/leonardobier/cafa_relatorios",
    },
    {
      titulo: "Acompanha Matrículas – Colégio de Aplicação Ferreira de Almeida",
      categoria: "desktop",
      badge: "Desktop Corporativo",
      descricao:
        "Sistema desktop construído em C# para o Colégio CAFA, focado em otimizar e gerenciar o período de renovações e novas matrículas. Realiza consultas e cruzamentos avançados diretamente no banco de dados MySQL do sistema educacional, com filtros dinâmicos e relatórios estratégicos para a produtividade da secretaria escolar.",
      tags: ["C#", ".NET", "MySQL", "Desktop", "Gestão Escolar"],
    },
    {
      titulo: "NextCareer – Simulador & Jogo de Futebol 3D (Desktop)",
      categoria: "desktop",
      badge: "Game Dev & 3D",
      descricao:
        "Jogo e simulador 3D de Modo Carreira de atleta de futebol desenvolvido em TypeScript com Three.js e empacotado para Desktop com Electron. Apresenta partidas 11v11, mundo aberto, estádios detalhados, sistema de decisões táticas, cutscenes e evolução de atributos do jogador.",
      tags: ["TypeScript", "Three.js", "Electron", "Vite", "3D Graphics"],
      github: "https://github.com/leonardobier/nextcarrer",
    },
    {
      titulo: "CAFA Emp – Gestão de Eventos e Apuração em Tempo Real",
      categoria: "web",
      badge: "Aplicação Web",
      descricao:
        "Sistema web desenvolvido para o gerenciamento de pontuação de alunos em grandes eventos institucionais, como a Feira do Empreendedorismo. Desenvolvido com PHP, MySQL e JavaScript, oferece interface intuitiva para inserção rápida de dados pelos avaliadores, apuração de pontos das equipes em tempo real e geração automática de rankings.",
      tags: ["PHP", "MySQL", "JavaScript", "Tempo Real", "Rankings"],
      github: "https://github.com/leonardobier/CAFA-Emp",
    },
    {
      titulo: "Gestão Acadêmica e Financeira – Studio Ingrid Soutinho",
      categoria: "web",
      badge: "ERP & Gestão",
      descricao:
        "Plataforma web completa para gestão acadêmica, financeira e operacional. Centraliza matrículas, turmas, controle de mensalidades e organização de eventos com venda de ingressos e reserva de assentos. Inclui Portal do Responsável interativo para consulta financeira e quitação online.",
      tags: ["PHP", "MySQL", "JavaScript", "Portal do Cliente", "Financeiro"],
      github: "https://github.com/leonardobier/studioingridsoutinho",
    },
    {
      titulo: "Sistema de Pontuação e Olimpíadas – Colégio João Paulo I",
      categoria: "web",
      badge: "Competições & Gestão",
      descricao:
        "Sistema de gerenciamento de competições escolares esportivas e pedagógicas. Múltiplos níveis de permissão (admin, secretaria, professor e aluno), registro de resultados de partidas, quadros de medalhas dinâmicos e controle de almoxarifado esportivo.",
      tags: ["PHP", "MySQL", "JavaScript", "Gestão de Eventos"],
      github: "https://github.com/leonardobier/jpiesportes_web",
    },
    {
      titulo: "Portal Leeni Corporation – Soluções Tecnológicas & CRM",
      categoria: "web",
      badge: "Institucional & CRM",
      descricao:
        "Portal corporativo oficial da Leeni Corporation apresentando seu portfólio de softwares, ferramentas de captação de clientes (LeadHunter), CRM interno integrado e canal de contato comercial para contratações B2B.",
      tags: ["PHP", "MySQL", "JavaScript", "CRM", "B2B"],
      github: "https://github.com/leonardobier/site_leenicorporation",
    },
    {
      titulo: "NoRiskApp – Mapeamento & Gestão de Segurança e Riscos",
      categoria: "web",
      badge: "Segurança & Mapas",
      descricao:
        "Aplicação web voltada para conscientização, mapeamento georreferenciado e monitoramento de riscos patrimoniais e urbanos, facilitando a identificação visual de pontos de atenção e incidentes em mapa interativo.",
      tags: ["JavaScript", "Web App", "Geolocalização", "Segurança"],
      github: "https://github.com/leonardobier/noriskapp",
    },
    {
      titulo: "Site Institucional & Otimização Contínua – Colégio CAFA",
      categoria: "web",
      badge: "Institucional & UX",
      descricao:
        "Gerenciamento de infraestrutura, hospedagem e manutenção contínua do portal institucional do Colégio de Aplicação Ferreira de Almeida. Implementação de melhorias contínuas em usabilidade (UX/UI), segurança, responsividade e atualização de conteúdos.",
      tags: ["Web", "UX/UI", "Hospedagem", "Manutenção", "SEO"],
      github: "https://github.com/leonardobier/site_colegiocafa",
    },
  ];

  const filterOptions = [
    { id: "all", label: "Todos os Projetos" },
    { id: "saas", label: "SaaS & Automação" },
    { id: "web", label: "Aplicações Web" },
    { id: "desktop", label: "Desktop & Dados" },
  ];

  const filteredProjetos = filter === "all"
    ? projetos
    : projetos.filter((proj) => proj.categoria === filter);

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
            Conheça as soluções desenvolvidas, desde plataformas SaaS multi-tenant e ferramentas de automação até aplicações desktop de alta performance, BI e ERPs:
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

        {/* Grid de Projetos */}
        <motion.div className="projects-grid" layout>
          <AnimatePresence>
            {filteredProjetos.map((proj, index) => (
              <motion.div
                key={proj.titulo}
                className={`project-card ${proj.destaque ? "featured-card" : ""}`}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
              >
                <div className="project-card-header">
                  <div className="project-type-badge">
                    {proj.categoria === "desktop" ? <FaDesktop /> : <FaLaptopCode />}
                    <span>{proj.badge}</span>
                  </div>
                  {proj.destaque && <span className="featured-badge">Destaque</span>}
                </div>

                <h3 className="project-title">{proj.titulo}</h3>

                <p className="project-description">{proj.descricao}</p>

                {/* Tags Tecnológicas */}
                <div className="project-tags">
                  {proj.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="project-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Ações / Links */}
                <div className="project-card-footer">
                  <div className="project-action-buttons">
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-live-btn"
                      >
                        Acessar Sistema <FaExternalLinkAlt style={{ fontSize: "0.8rem" }} />
                      </a>
                    )}
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`project-github-btn ${!proj.link ? "full-width" : ""}`}
                      >
                        <FaGithub /> {!proj.link ? "Ver Repositório" : "Código"}
                      </a>
                    )}
                    {!proj.link && !proj.github && (
                      <span className="project-internal-badge">
                        Sistema Interno / Corporativo
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
