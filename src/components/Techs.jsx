import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiVite,
  SiGithub,
  SiMysql,
  SiDotnet,
  SiPhp,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si";
import { Icon } from "@iconify/react";

const allTechs = [
  // Frontend
  { name: "React", category: "frontend", icon: <FaReact className="tech-icon react" />, badge: "Frontend Core" },
  { name: "TypeScript", category: "frontend", icon: <SiTypescript className="tech-icon typescript" />, badge: "Tipagem & Escalabilidade" },
  { name: "JavaScript", category: "frontend", icon: <FaJs className="tech-icon js" />, badge: "ES6+ Moderno" },
  { name: "HTML5", category: "frontend", icon: <FaHtml5 className="tech-icon html" />, badge: "Semântica & Acessibilidade" },
  { name: "CSS3", category: "frontend", icon: <FaCss3Alt className="tech-icon css" />, badge: "Layout & Responsividade" },
  { name: "Vite", category: "frontend", icon: <SiVite className="tech-icon vite" />, badge: "Build Tool Rápido" },

  // Backend & Bancos
  { name: "C#", category: "backend", icon: <Icon icon="devicon:csharp" className="tech-icon" style={{ fontSize: "2.8rem" }} />, badge: "Desktop & Backend" },
  { name: ".NET", category: "backend", icon: <SiDotnet className="tech-icon dotnet" />, badge: "Framework Robusto" },
  { name: "PHP", category: "backend", icon: <SiPhp className="tech-icon php" />, badge: "Web & APIs" },
  { name: "Python", category: "backend", icon: <FaPython className="tech-icon python" />, badge: "Automação & Scripts" },
  { name: "MySQL", category: "backend", icon: <SiMysql className="tech-icon mysql" />, badge: "Relacional & Consultas" },
  { name: "PostgreSQL", category: "backend", icon: <SiPostgresql className="tech-icon postgres" />, badge: "SaaS & Dados" },

  // Ferramentas & Desktop
  { name: "Git", category: "tools", icon: <FaGitAlt className="tech-icon git" />, badge: "Versionamento" },
  { name: "GitHub", category: "tools", icon: <SiGithub className="tech-icon github" />, badge: "CI/CD & Repos" },
  { name: "VS Code", category: "tools", icon: <Icon icon="devicon:vscode" className="tech-icon" style={{ fontSize: "2.8rem" }} />, badge: "Ambiente Principal" },
  { name: "Visual Studio", category: "tools", icon: <Icon icon="devicon:visualstudio" className="tech-icon" style={{ fontSize: "2.8rem" }} />, badge: "Dev C# / Desktop" },
];

const categories = [
  { id: "all", label: "Todas" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend & Dados" },
  { id: "tools", label: "Ferramentas & IDEs" },
];

const Techs = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTechs = activeCategory === "all"
    ? allTechs
    : allTechs.filter((tech) => tech.category === activeCategory);

  return (
    <section id="techs" className="section techs">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Stack Tecnológica</span>
          <h2>Tecnologias & Ferramentas</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Ferramentas, linguagens e bancos de dados que utilizo para projetar e construir soluções digitais de ponta a ponta:
          </p>
        </motion.div>

        {/* Abas de filtro */}
        <div className="tech-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`tech-filter-btn ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid animado de tecnologias */}
        <motion.div className="tech-grid" layout>
          <AnimatePresence>
            {filteredTechs.map((tech) => (
              <motion.div
                key={tech.name}
                className="tech-card"
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6, scale: 1.04 }}
              >
                <div className="tech-icon-container">
                  {tech.icon}
                </div>
                <span className="tech-name">{tech.name}</span>
                <span className="tech-badge">{tech.badge}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Techs;