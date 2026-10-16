import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <img
              src="/imgs/perfil.png"
              alt="Leonardo Bier"
              className="brand-avatar"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/imgs/profile.png";
              }}
            />
            <div>
              <h3>Leonardo Lage Bier</h3>
              <p>Desenvolvedor Full-Stack • Soluções Web & Desktop</p>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Voltar ao topo"
          >
            <FaArrowUp /> Voltar ao topo
          </button>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-links">
            <a href="mailto:leobier182@gmail.com">
              <FaEnvelope /> leobier182@gmail.com
            </a>
            <a href="https://wa.me/5521998492427" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> (21) 99849-2427
            </a>
            <a href="https://github.com/leonardobier" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/leonardolagebier" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </div>

          <p className="footer-copy">
            © {new Date().getFullYear()} Leonardo Lage Bier. Desenvolvido com React, Vite & Modern CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;