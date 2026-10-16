import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", label: "Início" },
    { href: "#sobre", label: "Sobre Mim" },
    { href: "#techs", label: "Tecnologias" },
    { href: "#marketing", label: "Soluções" },
    { href: "#projects", label: "Projetos" },
    { href: "#curriculo", label: "Currículo" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      {/* Nome e Branding à esquerda */}
      <div className="profile">
        <a href="#hero" className="brand-link">
          <img
            src="/imgs/perfil.png"
            alt="Leonardo Bier"
            className="brand-avatar"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/imgs/profile.png";
            }}
          />
          <span className="brand-name">
            Leonardo <span className="brand-accent">Bier</span>
          </span>
        </a>
      </div>

      {/* Navegação centralizada */}
      <nav className={open ? "nav open" : "nav"}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="nav-link"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Ações e Ícones sociais à direita */}
      <div className="header-right">
        <div className="social-icons">
          <a
            href="https://wa.me/5521998492427"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="social-link whatsapp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://github.com/leonardobier"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-link github"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/leonardolagebier"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-link linkedin"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Menu mobile */}
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Backdrop para fechar o menu mobile ao clicar fora */}
      {open && <div className="menu-backdrop" onClick={() => setOpen(false)} />}
    </header>
  );
}

export default Header;