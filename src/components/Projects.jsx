import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projetos = [
    {
      titulo: "Sistema de Gestão Escolar e Esportiva (Web)",
      descricao:
        "Desenvolvimento de um sistema web hospedado para gestão escolar e esportiva, integrando módulos completos que contemplam a versão para alunos e administradores no acompanhamento de eventos esportivos, um módulo de reservas de assentos e mesas com controle de disponibilidade e relatórios de ocupação, além de um módulo de almoxarifado robusto com registro de movimentações, relatórios em PDF e filtros avançados por período, evento e turma; a solução foi projetada para otimizar processos internos, garantir segurança e usabilidade em diferentes níveis de acesso (aluno, secretaria, admin e almoxarifado) e oferecer uma experiência intuitiva que centraliza em uma única plataforma todas as necessidades de organização escolar e esportiva."
    },
    {
      titulo: "Sistema de Gestão Acadêmica e Financeira (Desktop em C#)",
      descricao:
        "Esse sistema é uma aplicação desktop desenvolvida em C# com MySQL no Visual Studio, voltada para a gestão acadêmica completa de uma instituição, permitindo o controle de alunos, responsáveis, turmas e mensalidades, além de oferecer recursos financeiros como emissão de relatórios, baixa de pagamentos e exportação para PDF/Excel; também inclui módulos de eventos e espetáculos, com funcionalidades para reservar assentos, confirmar compras, gerenciar ingressos e acompanhar o status das vendas, integrando de forma prática e centralizada todas as operações administrativas, acadêmicas e financeiras em uma única plataforma."
    },
    {
      titulo: "Gestão de TI no Colégio CAFA",
      descricao:
        "Responsável pelo departamento de TI do Colégio de Aplicação Ferreira de Almeida, onde realizo suporte técnico remoto e presencial, incluindo suporte de redes. Gerencio o sistema de segurança com catraca de reconhecimento facial e atuo na melhoria da usabilidade das principais plataformas utilizadas pela instituição, como Positivo On, Sistema de Gestão Escolar completo e agenda digital. Meu trabalho envolve garantir eficiência, segurança e uma experiência tecnológica otimizada para alunos, professores e colaboradores."
    }
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
              textAlign: "justify", // texto justificado
            }}
          >
            <h3 style={{ marginBottom: "1rem", color: "var(--accent)", textAlign: "center" }}>
              {proj.titulo}
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.5" }}>{proj.descricao}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;