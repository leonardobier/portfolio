import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projetos = [
    {
      titulo:
        "Sistema de Gestão Acadêmica e Financeira – Studio de Dança Ingrid Soutinho (Web)",
      descricao:
        "Desenvolvimento e evolução de uma plataforma web completa para gestão acadêmica, financeira e administrativa de uma instituição de ensino. O sistema centraliza o gerenciamento de alunos, responsáveis, professores, turmas e mensalidades, além de disponibilizar recursos para controle de pagamentos, relatórios, baixa financeira e exportação de documentos em PDF. A plataforma também conta com módulos para espetáculos e eventos, incluindo venda de ingressos, reserva de assentos e acompanhamento das vendas. Como evolução do projeto, foi desenvolvido o Portal do Responsável, permitindo que responsáveis acompanhem informações acadêmicas e financeiras dos alunos e realizem o pagamento de mensalidades diretamente pela plataforma, proporcionando mais praticidade, autonomia e agilidade no processo financeiro. O sistema foi originalmente desenvolvido em C# com MySQL e posteriormente transformado em uma aplicação web utilizando PHP, MySQL, HTML, CSS e JavaScript.",
    },
    {
      titulo:
        "Sistema de Pontuação e Olimpíadas Escolares – Colégio João Paulo I",
      descricao:
        "Desenvolvimento de um sistema voltado para o gerenciamento de competições e olimpíadas escolares, permitindo centralizar o acompanhamento da pontuação e do desempenho dos alunos durante os eventos. A plataforma possui diferentes níveis de acesso, incluindo administrador, secretaria, professor e aluno, além de recursos para cadastro e gerenciamento das equipes, modalidades e resultados. O sistema permite registrar pontuações, acompanhar o ranking das equipes e gerar relatórios, facilitando a organização das competições e proporcionando uma visualização clara do desempenho dos participantes. Originalmente desenvolvido como projeto de TCC em C# com MySQL, o sistema posteriormente evoluiu para uma solução web, ampliando sua acessibilidade e utilização no ambiente escolar.",
    },
    {
      titulo: "NextHelp – Sistema de Gerenciamento de Chamados",
      descricao:
        "Desenvolvimento de uma plataforma web de gerenciamento de chamados, criada para organizar e centralizar solicitações de suporte dentro de uma empresa. O sistema possui autenticação e níveis de acesso para administradores, solicitantes e atendentes, permitindo que cada usuário tenha acesso aos recursos correspondentes à sua função. Cada chamado recebe um identificador único, facilitando seu acompanhamento desde a abertura até a resolução. A plataforma permite centralizar os atendimentos, acompanhar o status das solicitações e proporcionar maior controle e organização ao fluxo de suporte. O projeto foi desenvolvido utilizando a plataforma Lovable.",
      link: "https://nexthelp.lovable.app",
    },
    {
      titulo:
        "Gestão de TI – Colégio de Aplicação Ferreira de Almeida",
      descricao:
        "Atuação no departamento de TI do Colégio de Aplicação Ferreira de Almeida, realizando suporte técnico remoto e presencial, manutenção e suporte de redes e gerenciamento de recursos tecnológicos da instituição. Responsável também pelo sistema de segurança com catraca de reconhecimento facial e pela melhoria da usabilidade das principais plataformas utilizadas pela instituição, incluindo sistemas de gestão escolar, plataformas educacionais e agenda digital. O trabalho envolve suporte aos usuários, identificação e resolução de problemas e busca contínua por melhorias na eficiência e segurança do ambiente tecnológico.",
    },
    {
      titulo:
        "Responsável pelo Site Institucional – Colégio de Aplicação Ferreira de Almeida",
      descricao:
        "Responsável pela manutenção e gerenciamento do site institucional do Colégio de Aplicação Ferreira de Almeida, garantindo seu funcionamento adequado, atualização de conteúdos e organização das informações apresentadas aos usuários. O trabalho também envolve identificação e correção de problemas, manutenção da estrutura do site e busca contínua por melhorias na experiência de navegação.",
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
