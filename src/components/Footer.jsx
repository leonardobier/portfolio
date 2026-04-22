import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <p style={{ display: "flex", justifyContent: "center", gap: "1rem", alignItems: "center" }}>
        <a href="mailto:leobier182@gmail.com" style={{ color: "var(--accent)" }}>
          <FaEnvelope /> leobier182@gmail.com
        </a>
        <a href="https://github.com/leonardobier" target="_blank" style={{ color: "var(--accent)" }}>
          <FaGithub /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/leonardolagebier" target="_blank" style={{ color: "var(--accent)" }}>
          <FaLinkedin /> LinkedIn
        </a>
      </p>
            <p>© 2026 - Leonardo Lage Bier</p>
    </footer>
  );
}

export default Footer;
