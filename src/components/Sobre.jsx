import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt, FaLaptopCode, FaCheckCircle } from "react-icons/fa";

function Sobre() {
  const highlights = [
    { title: "Desenvolvimento Full-Stack", desc: "Aplicações escaláveis de ponta a ponta com React, TypeScript, PHP e C#." },
    { title: "Arquitetura & Bancos de Dados", desc: "Modelagem e consultas eficientes em PostgreSQL e MySQL." },
    { title: "SaaS & Automação Inteligente", desc: "Integrações de APIs, fluxos de WhatsApp e controle de pagamentos." },
    { title: "Comunicação & Trabalho em Equipe", desc: "Proatividade na resolução de problemas e alinhamento com metas de negócio." },
  ];

  return (
    <section id="sobre" className="section sobre">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Quem Sou</span>
          <h2>Sobre Mim</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="sobre-layout">
          {/* Card da Foto e Perfil */}
          <motion.div
            className="sobre-profile-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="profile-image-wrapper">
              <img
                src="/imgs/perfil.png"
                alt="Leonardo Lage Bier"
                className="profile-photo"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/imgs/profile.png";
                }}
              />
              <div className="profile-status-badge">
                <span className="status-dot-active" />
                <span>Open for Work</span>
              </div>
            </div>

            <div className="profile-card-details">
              <h3>Leonardo Lage Bier</h3>
              <p className="profile-role">Desenvolvedor Full-Stack</p>

              <div className="profile-meta-list">
                <div className="profile-meta-item">
                  <FaMapMarkerAlt className="meta-icon" />
                  <span>Rio de Janeiro, RJ - Brasil</span>
                </div>
                <div className="profile-meta-item">
                  <FaGraduationCap className="meta-icon" />
                  <span>Análise e Desenv. de Sistemas (Graduando)</span>
                </div>
                <div className="profile-meta-item">
                  <FaLaptopCode className="meta-icon" />
                  <span>Técnico em Informática Formado</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Biografia e Destaques */}
          <motion.div
            className="sobre-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="sobre-bio-card">
              <p className="bio-lead">
                Olá! Sou um desenvolvedor apaixonado por transformar desafios complexos em produtos digitais simples, eficientes e de alto valor.
              </p>
              <p>
                Atuo na criação e manutenção de sistemas corporativos, plataformas SaaS completas e aplicações desktop robustas. Tenho experiência prática no ciclo integral de desenvolvimento: desde o levantamento de requisitos, arquitetura de dados e desenvolvimento de interfaces modernas e responsivas, até a integração com APIs de pagamentos (Mercado Pago) e provedores de mensagens (WhatsApp).
              </p>
              <p>
                Possuo sólida base técnica em <strong>React, TypeScript, JavaScript, PHP, C# (.NET), Python e MySQL/PostgreSQL</strong>, com foco constante em boas práticas, código limpo e experiência do usuário (UX).
              </p>
            </div>

            {/* Grid de Pontos Fortes */}
            <div className="sobre-highlights-grid">
              {highlights.map((h, index) => (
                <div key={index} className="highlight-card">
                  <div className="highlight-icon-box">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <h4>{h.title}</h4>
                    <p>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
