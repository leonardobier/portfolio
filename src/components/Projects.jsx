import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projetos = [
    {
      titulo: "NextFlowChat – SaaS de Atendimento e Automação via WhatsApp",
      descricao:
        "Plataforma SaaS multiempresa de automação e chatbot, desenvolvida em TypeScript e banco de dados PostgreSQL. O sistema possui layout totalmente responsivo e fluido, permitindo que diferentes empresas utilizem ambientes independentes. Conta com conexão via QR Code, gestão de contatos e criação de fluxos automáticos de mensagens totalmente personalizáveis, oferecendo atendimento via bot com transição inteligente para atendentes humanos.",
        link: "https://nextflow.leenicorporation.com.br",
    },
    {
      titulo: "NextFinances – Controle Financeiro Inteligente",
      descricao:
        "Plataforma inovadora de gestão financeira por assinatura (mensal/anual), projetada para dar ao usuário controle total sobre suas finanças com o apoio de Inteligência Artificial. Desenvolvido em TypeScript e PostgreSQL, o sistema conta com integração completa à API do Mercado Pago para gestão de assinaturas, oferecendo um ambiente seguro para projeções e organização de receitas, despesas e metas.",
      link: "https://nextfinances.leenicorporation.com.br",
    },
    {
      titulo: "NextHelp – Sistema de Gerenciamento de Chamados",
      descricao:
        "Plataforma web de gerenciamento de chamados criada para organizar e centralizar solicitações de suporte corporativo. O sistema possui autenticação e níveis de acesso (administradores, solicitantes e atendentes). Cada chamado recebe um identificador único, facilitando o acompanhamento do status desde a abertura até a resolução, garantindo controle do ciclo de atendimento. Projeto desenvolvido na plataforma Lovable.",
      link: "https://nexthelp.lovable.app",
    },
    {
      titulo: "Acompanha Matrículas – Colégio de Aplicação Ferreira de Almeida",
      descricao:
        "Sistema desktop desenvolvido internamente para o Colégio CAFA, focado em otimizar e organizar o período de renovações e novas inscrições. A aplicação foi construída em C# e realiza consultas avançadas diretamente no banco de dados MySQL do sistema principal de gestão da escola. A interface foi pensada para a produtividade da secretaria, com filtros e organização de dados para acompanhamento ágil de metas de rematrícula.",
    },
    {
      titulo: "CAFA Emp – Sistema de Gestão de Eventos e Pontuação",
      descricao:
        "Sistema web desenvolvido para o gerenciamento de pontuação de alunos em grandes eventos institucionais, como a Feira do Empreendedorismo. Criado com PHP, MySQL, HTML, CSS e JavaScript, possui uma interface fluida para inserção rápida de dados por avaliadores e professores, realizando a apuração de pontos das equipes em tempo real e gerando automaticamente rankings e resultados das atividades.",
    },
    {
      titulo: "Gestão Acadêmica e Financeira – Studio Ingrid Soutinho",
      descricao:
        "Plataforma web completa para gestão acadêmica, financeira e administrativa. Centraliza alunos, turmas, controle de pagamentos e eventos (com venda de ingressos e reserva de assentos). Inclui o Portal do Responsável, permitindo consultas e pagamentos diretos de mensalidades. Inicialmente desenvolvido em C# com MySQL, o sistema foi modernizado e transformado em aplicação web utilizando PHP, MySQL, HTML, CSS e JavaScript.",
    },
    {
      titulo: "Sistema de Pontuação e Olimpíadas – Colégio João Paulo I",
      descricao:
        "Sistema de gerenciamento de competições escolares, centralizando o acompanhamento de pontuações, equipes e modalidades esportivas. Possui múltiplos níveis de acesso (admin, secretaria, professor e aluno) e recursos para registrar resultados, rankings e controle de almoxarifado. Originalmente construído em C# com MySQL, o projeto evoluiu para uma solução web para maior acessibilidade.",
    },
    {
      titulo: "Responsável pelo Site Institucional – CAFA",
      descricao:
        "Gerenciamento de hospedagem e manutenção do site institucional do Colégio de Aplicação Ferreira de Almeida. Responsável pela atualização de conteúdos, correções estruturais, resolução de problemas e busca contínua por melhorias na experiência de navegação (UX) e usabilidade da plataforma.",
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>Experiência e Projetos</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        {projetos.map((proj, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.3 }}
            style={{
              maxWidth: "400px",
              flex: "1 1 300px",
              margin: "0 auto",
              textAlign: "justify",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3
              style={{
                marginBottom: "1rem",
                color: "var(--accent)",
                textAlign: "center",
              }}
            >
              {proj.titulo}
            </h3>

            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: "1.5",
                marginBottom: "1.5rem",
              }}
            >
              {proj.descricao}
            </p>

            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "auto",
                  padding: "0.7rem 1.2rem",
                  borderRadius: "8px",
                  backgroundColor: "var(--accent)",
                  color: "#fff",
                  textDecoration: "none",
                  textAlign: "center",
                  fontWeight: "bold",
                  transition: "0.3s",
                }}
              >
                Ver projeto
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;