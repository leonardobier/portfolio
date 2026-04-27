import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <a
          href="mailto:leobier182@gmail.com"
          style={{ color: "var(--accent)" }}
        >
          <FaEnvelope /> leobier182@gmail.com
        </a>
        <a
          href="https://wa.me/5521998492427"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#287bbf" }}
        >
          <FaWhatsapp /> (21) 99849-2427
        </a>
        <a
          href="https://github.com/leonardobier"
          target="_blank"
          style={{ color: "var(--accent)" }}
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/leonardolagebier"
          target="_blank"
          style={{ color: "var(--accent)" }}
        >
          <FaLinkedin /> LinkedIn
        </a>
      </p>
      <p>© 2026 - Leonardo Lage Bier</p>
    </footer>
  );
}

export default Footer;