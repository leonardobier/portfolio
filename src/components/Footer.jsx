import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer>
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
      <p className="footer-copy">© 2026 — Leonardo Lage Bier</p>
    </footer>
  );
}

export default Footer;