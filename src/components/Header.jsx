import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

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
        <a href="#hero" onClick={() => setOpen(false)}>Início</a>
        <a href="#sobre" onClick={() => setOpen(false)}>Sobre mim</a>
        <a href="#techs" onClick={() => setOpen(false)}>Tecnologias</a>
        <a href="#marketing" onClick={() => setOpen(false)}>Soluções</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projetos</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contato</a>
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

      {/* Menu mobile — ícone alterna entre hambúrguer e X */}
      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
}

export default Header;