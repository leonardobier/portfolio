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
  SiTailwindcss,
  SiPrisma,
  SiNextdotjs,
  SiElectron,
} from "react-icons/si";
import { Icon } from "@iconify/react";

const allTechs = [
  // Frontend
  {
    name: "React",
    category: "frontend",
    icon: <FaReact className="tech-icon react" />,
    badge: "Frontend Core",
    filterTag: "React",
    projectsCount: 3,
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: <SiNextdotjs className="tech-icon nextjs" />,
    badge: "SSR & Fullstack",
    filterTag: "Next.js",
    projectsCount: 1,
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: <SiTypescript className="tech-icon typescript" />,
    badge: "Tipagem & Escalabilidade",
    filterTag: "TypeScript",
    projectsCount: 6,
  },
  {
    name: "JavaScript",
    category: "frontend",
    icon: <FaJs className="tech-icon js" />,
    badge: "ES6+ Moderno",
    filterTag: "JavaScript",
    projectsCount: 6,
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: <SiTailwindcss className="tech-icon tailwind" />,
    badge: "Utility-First CSS",
    filterTag: "Tailwind CSS",
    projectsCount: 3,
  },
  {
    name: "Three.js",
    category: "frontend",
    icon: <Icon icon="devicon:threejs" className="tech-icon" style={{ fontSize: "2.8rem", color: "#ffffff" }} />,
    badge: "Gráficos 3D & WebGL",
    filterTag: "Three.js",
    projectsCount: 1,
  },
  {
    name: "HTML5",
    category: "frontend",
    icon: <FaHtml5 className="tech-icon html" />,
    badge: "Semântica & Acessibilidade",
    filterTag: "HTML5",
    projectsCount: 10,
  },
  {
    name: "CSS3",
    category: "frontend",
    icon: <FaCss3Alt className="tech-icon css" />,
    badge: "Layout & Responsividade",
    filterTag: "CSS3",
    projectsCount: 10,
  },
  {
    name: "Vite",
    category: "frontend",
    icon: <SiVite className="tech-icon vite" />,
    badge: "Build Tool Rápido",
    filterTag: "Vite",
    projectsCount: 3,
  },

  // Backend & Bancos
  {
    name: "Node.js",
    category: "backend",
    icon: <Icon icon="devicon:nodejs" className="tech-icon" style={{ fontSize: "2.8rem" }} />,
    badge: "Runtime & APIs",
    filterTag: "Node.js",
    projectsCount: 3,
  },
  {
    name: "Fastify",
    category: "backend",
    icon: <Icon icon="simple-icons:fastify" className="tech-icon" style={{ fontSize: "2.6rem", color: "#ffffff" }} />,
    badge: "High-Perf Backend",
    filterTag: "Fastify",
    projectsCount: 1,
  },
  {
    name: "C#",
    category: "backend",
    icon: <Icon icon="devicon:csharp" className="tech-icon" style={{ fontSize: "2.8rem" }} />,
    badge: "Desktop & Backend",
    filterTag: "C#",
    projectsCount: 3,
  },
  {
    name: ".NET",
    category: "backend",
    icon: <SiDotnet className="tech-icon dotnet" />,
    badge: "Framework Robusto",
    filterTag: ".NET",
    projectsCount: 1,
  },
  {
    name: "PHP",
    category: "backend",
    icon: <SiPhp className="tech-icon php" />,
    badge: "Web & APIs",
    filterTag: "PHP",
    projectsCount: 4,
  },
  {
    name: "Python",
    category: "backend",
    icon: <FaPython className="tech-icon python" />,
    badge: "Automação & BI",
    filterTag: "Python",
    projectsCount: 1,
  },
  {
    name: "Prisma ORM",
    category: "backend",
    icon: <SiPrisma className="tech-icon prisma" />,
    badge: "Modelagem & Multi-Tenant",
    filterTag: "Prisma ORM",
    projectsCount: 2,
  },
  {
    name: "PostgreSQL",
    category: "backend",
    icon: <SiPostgresql className="tech-icon postgres" />,
    badge: "SaaS & Dados",
    filterTag: "PostgreSQL",
    projectsCount: 4,
  },
  {
    name: "MySQL",
    category: "backend",
    icon: <SiMysql className="tech-icon mysql" />,
    badge: "Relacional & Consultas",
    filterTag: "MySQL",
    projectsCount: 6,
  },
  {
    name: "REST APIs & Webhooks",
    category: "backend",
    icon: <Icon icon="mdi:api" className="tech-icon" style={{ fontSize: "2.8rem", color: "#38bdf8" }} />,
    badge: "Mercado Pago & WhatsApp",
    filterTag: "API",
    projectsCount: 5,
  },

  // Ferramentas & Desktop
  {
    name: "Electron",
    category: "tools",
    icon: <SiElectron className="tech-icon electron" />,
    badge: "Aplicações Desktop",
    filterTag: "Electron",
    projectsCount: 1,
  },
  {
    name: "Git",
    category: "tools",
    icon: <FaGitAlt className="tech-icon git" />,
    badge: "Versionamento",
    filterTag: "Git",
    projectsCount: 12,
  },
  {
    name: "GitHub",
    category: "tools",
    icon: <SiGithub className="tech-icon github" />,
    badge: "CI/CD & Repos",
    filterTag: "GitHub",
    projectsCount: 12,
  },
  {
    name: "VS Code",
    category: "tools",
    icon: <Icon icon="devicon:vscode" className="tech-icon" style={{ fontSize: "2.8rem" }} />,
    badge: "Ambiente Principal",
    filterTag: "VS Code",
    projectsCount: 13,
  },
  {
    name: "Visual Studio",
    category: "tools",
    icon: <Icon icon="devicon:visualstudio" className="tech-icon" style={{ fontSize: "2.8rem" }} />,
    badge: "Dev C# / Desktop",
    filterTag: "Visual Studio",
    projectsCount: 3,
  },
];

const categories = [
  { id: "all", label: "Todas" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend & Dados" },
  { id: "tools", label: "Ferramentas & IDEs" },
];

const Techs = ({ selectedTech, onSelectTech }) => {
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
            Clique em qualquer tecnologia abaixo para filtrar automaticamente os projetos reais construídos com ela:
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
            {filteredTechs.map((tech) => {
              const isSelected = selectedTech === tech.filterTag;
              return (
                <motion.button
                  type="button"
                  key={tech.name}
                  className={`tech-card ${isSelected ? "active-tech" : ""}`}
                  layout
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -6, scale: 1.04 }}
                  onClick={() => onSelectTech?.(tech.filterTag)}
                  title={`Filtrar projetos com ${tech.name}`}
                >
                  <span className="tech-project-count">
                    {tech.projectsCount} {tech.projectsCount === 1 ? "projeto" : "projetos"}
                  </span>
                  <div className="tech-icon-container">
                    {tech.icon}
                  </div>
                  <span className="tech-name">{tech.name}</span>
                  <span className="tech-badge">{tech.badge}</span>
                  <span className="tech-filter-hint">Ver projetos →</span>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Techs;
