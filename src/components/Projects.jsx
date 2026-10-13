import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaLaptopCode, FaDesktop } from "react-icons/fa";

function Projects() {
  const [filter, setFilter] = useState("all");

  const projetos = [
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
      titulo: "Acompanha Matrículas – Colégio de Aplicação Ferreira de Almeida",
      categoria: "desktop",
      badge: "Desktop Corporativo",
      descricao:
        "Sistema desktop construído em C# para o Colégio CAFA, focado em otimizar e gerenciar o período de renovações e novas matrículas. Realiza consultas e cruzamentos avançados diretamente no banco de dados MySQL do sistema educacional, com filtros dinâmicos e relatórios estratégicos para a produtividade da secretaria escolar.",
      tags: ["C#", ".NET", "MySQL", "Desktop", "Gestão Escolar"],
    },
    {
      titulo: "CAFA Emp – Gestão de Eventos e Apuração em Tempo Real",
      categoria: "web",
      badge: "Aplicação Web",
      descricao:
        "Sistema web desenvolvido para o gerenciamento de pontuação de alunos em grandes eventos institucionais, como a Feira do Empreendedorismo. Desenvolvido com PHP, MySQL e JavaScript, oferece interface intuitiva para inserção rápida de dados pelos avaliadores, apuração de pontos das equipes em tempo real e geração automática de rankings.",
      tags: ["PHP", "MySQL", "JavaScript", "Tempo Real", "Rankings"],
    },
    {
      titulo: "Gestão Acadêmica e Financeira – Studio Ingrid Soutinho",
      categoria: "web",
      badge: "ERP & Gestão",
      descricao:
        "Plataforma web completa para gestão acadêmica, financeira e operacional. Centraliza matrículas, turmas, controle de mensalidades e organização de eventos com venda de ingressos e reserva de assentos. Inclui Portal do Responsável interativo para consulta financeira e quitação online.",
      tags: ["PHP", "MySQL", "JavaScript", "Portal do Cliente", "Financeiro"],
    },
    {
      titulo: "Sistema de Pontuação e Olimpíadas – Colégio João Paulo I",
      categoria: "web",
      badge: "Competições & Gestão",
      descricao:
        "Sistema de gerenciamento de competições escolares esportivas e pedagógicas. Múltiplos níveis de permissão (admin, secretaria, professor e aluno), registro de resultados de partidas, quadros de medalhas dinâmicos e controle de almoxarifado esportivo.",
      tags: ["C#", "PHP", "MySQL", "Gestão de Eventos"],
    },
    {
      titulo: "Site Institucional & Otimização Contínua – Colégio CAFA",
      categoria: "web",
      badge: "Institucional & UX",
      descricao:
        "Gerenciamento de infraestrutura, hospedagem e manutenção contínua do portal institucional do Colégio de Aplicação Ferreira de Almeida. Implementação de melhorias contínuas em usabilidade (UX/UI), segurança, responsividade e atualização de conteúdos.",
      tags: ["Web", "UX/UI", "Hospedagem", "Manutenção", "SEO"],
    },
  ];

  const filterOptions = [
    { id: "all", label: "Todos os Projetos" },
    { id: "saas", label: "SaaS & Automação" },
    { id: "web", label: "Aplicações Web" },
    { id: "desktop", label: "Desktop & Bancos" },
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
            Conheça alguns dos principais sistemas desenvolvidos, desde plataformas SaaS e ferramentas de automação até aplicações desktop e ERPs institucionais:
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
                transition={{ duration: 0.4, delay: index * 0.08 }}
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
                  {proj.link ? (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-live-btn"
                    >
                      Acessar Sistema <FaExternalLinkAlt style={{ fontSize: "0.85rem" }} />
                    </a>
                  ) : (
                    <span className="project-internal-badge">
                      Sistema Interno / Corporativo
                    </span>
                  )}
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