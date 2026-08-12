import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projetos = [
    {
      titulo:
        "Sistemas de Gestão Acadêmica, Financeira e Esportiva – Soluções Web",
      descricao:
        "Desenvolvimento e evolução de sistemas de gestão para instituições de ensino e academias, originalmente desenvolvidos em C# com MySQL e posteriormente transformados em aplicações web. As soluções integram módulos acadêmicos, financeiros e administrativos, permitindo o gerenciamento de alunos, responsáveis, professores, turmas e mensalidades, além de recursos para eventos, espetáculos, venda e reserva de ingressos, controle de assentos, almoxarifado, competições esportivas e geração de relatórios em PDF. A migração para o ambiente web ampliou a acessibilidade, flexibilidade e escalabilidade dos sistemas, permitindo que diferentes níveis de usuários, como administradores, secretaria, professores, alunos e responsáveis, utilizem a plataforma de forma segura e centralizada.",
    },
    {
      titulo: "Help Hub Inc. – Sistema de Gerenciamento de Chamados",
      descricao:
        "Desenvolvimento de uma plataforma web de gerenciamento de chamados, criada com o objetivo de organizar e centralizar solicitações de suporte dentro de uma empresa. O sistema possui autenticação e níveis de acesso para administradores, solicitantes e atendentes, permitindo que cada usuário tenha acesso aos recursos correspondentes à sua função. Cada chamado recebe um identificador único, facilitando o acompanhamento e a organização das solicitações desde sua abertura até a resolução. A plataforma permite centralizar os atendimentos, acompanhar o status dos chamados e proporcionar maior controle e organização ao fluxo de suporte da empresa. O projeto foi desenvolvido utilizando a plataforma Lovable, explorando uma abordagem moderna para criação de aplicações web.",
    },
    {
      titulo:
        "Gestão de TI – Colégio de Aplicação Ferreira de Almeida",
      descricao:
        "Atuação no departamento de TI do Colégio de Aplicação Ferreira de Almeida, realizando suporte técnico remoto e presencial, manutenção e suporte de redes e gerenciamento de recursos tecnológicos da instituição. Responsável também pelo sistema de segurança com catraca de reconhecimento facial e pela melhoria da usabilidade das principais plataformas utilizadas pela instituição, incluindo sistemas de gestão escolar, plataformas educacionais e agenda digital. O trabalho envolve suporte aos usuários, identificação de problemas, manutenção dos recursos tecnológicos e busca contínua por melhorias na eficiência e segurança do ambiente de TI.",
    },
    {
      titulo:
        "Responsável pelo Site Institucional – Colégio de Aplicação Ferreira de Almeida",
      descricao:
        "Responsável pela manutenção e gerenciamento do site institucional do Colégio de Aplicação Ferreira de Almeida, garantindo seu funcionamento adequado, atualização de conteúdos e organização das informações apresentadas aos usuários. O trabalho também envolve a identificação e correção de problemas, buscando manter uma experiência de navegação funcional, segura e atualizada.",
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
