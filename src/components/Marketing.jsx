import React from "react";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaGlobe,
  FaDesktop,
  FaCreditCard,
  FaArrowRight,
} from "react-icons/fa";

function Marketing() {
  const servicos = [
    {
      icon: <FaRobot />,
      titulo: "SaaS & Automação via WhatsApp",
      descricao:
        "Criação de robôs inteligentes e fluxos automatizados de atendimento multicanal com transição suave para operadores humanos e ambientes multiempresa.",
      itens: ["Conexão via QR Code", "Automação de fluxos", "Gestão de filas e contatos"],
    },
    {
      icon: <FaGlobe />,
      titulo: "Aplicações Web & Portais Sob Medida",
      descricao:
        "Desenvolvimento de plataformas web completas, painéis administrativos intuitivos e sistemas de gestão acadêmica e corporativa.",
      itens: ["React & TypeScript", "Layout 100% responsivo", "Arquitetura escalável"],
    },
    {
      icon: <FaDesktop />,
      titulo: "Sistemas Desktop Corporativos",
      descricao:
        "Softwares dedicados para estações de trabalho e secretarias, com consultas ultrarrápidas em bancos de dados relacionais e foco em alta produtividade.",
      itens: ["C# e .NET", "Integração direta com MySQL", "Relatórios e filtros ágeis"],
    },
    {
      icon: <FaCreditCard />,
      titulo: "Integrações de APIs & Pagamentos",
      descricao:
        "Conexão de sistemas com gateways financeiros (Mercado Pago), controle de recorrência/assinaturas e comunicação entre plataformas.",
      itens: ["Checkout transparente", "Gestão de assinaturas", "Webhooks em tempo real"],
    },
  ];

  return (
    <section id="marketing" className="section marketing">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">O Que Entrego</span>
          <h2>Soluções & Serviços</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Cada negócio possui necessidades únicas. Construo softwares personalizados projetados para resolver problemas reais e gerar resultados tangíveis:
          </p>
        </motion.div>

        <div className="services-grid">
          {servicos.map((servico, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <div className="service-icon-box">
                {servico.icon}
              </div>
              <h3 className="service-title">{servico.titulo}</h3>
              <p className="service-desc">{servico.descricao}</p>

              <ul className="service-deliverables">
                {servico.itens.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          className="services-cta-box"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-content">
            <h3>Tem uma ideia ou precisa de um sistema personalizado?</h3>
            <p>Vamos conversar sobre as necessidades da sua empresa e estruturar um projeto eficiente.</p>
          </div>
          <a
            href="https://wa.me/5521998492427?text=Ol%C3%A1%20Leonardo,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-action-btn"
          >
            Solicitar Orçamento <FaArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Marketing;
