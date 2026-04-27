import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      {/* Nome à esquerda */}
      <div className="profile">
        <h1>Leonardo Lage Bier</h1>
      </div>

      {/* Navegação centralizada */}
      <nav className={open ? "nav open" : "nav"}>
        <a href="#hero">Início</a>
        <a href="#sobre">Sobre mim</a>
        <a href="#techs">Tecnologias</a>
        <a href="#marketing">Soluções</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
      </nav>

      {/* Ícones sociais à direita */}
      <div className="social-icons">
        <a
          href="https://wa.me/5521998492427"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#25D366" }}
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://github.com/leonardobier"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/leonardolagebier"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Menu mobile */}
      <button className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </button>
    </header>
  );
}

export default Header;
