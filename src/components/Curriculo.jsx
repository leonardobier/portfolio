import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaFilePdf,
  FaDownload,
  FaCodeBranch,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";

// Fallback seguro caso o GitHub limite requisições da API pública
const fallbackRepos = [
  {
    id: 1,
    name: "portfolio",
    html_url: "https://github.com/leonardobier/portfolio",
    description: "Portfólio moderno em React e Vite destacando projetos web e desktop.",
    language: "JavaScript",
    stargazers_count: 0,
  },
  {
    id: 2,
    name: "nextflow-chat",
    html_url: "https://github.com/leonardobier",
    description: "SaaS de automação multicanal via WhatsApp e transição de agentes.",
    language: "TypeScript",
    stargazers_count: 0,
  },
  {
    id: 3,
    name: "cafa-matriculas",
    html_url: "https://github.com/leonardobier",
    description: "Sistema desktop em C# para acompanhamento e gestão de matrículas.",
    language: "C#",
    stargazers_count: 0,
  },
];

function Curriculo() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/leonardobier/repos?sort=updated&per_page=6")
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API rate limit or error");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data.slice(0, 5));
        } else {
          setRepos(fallbackRepos);
        }
      })
      .catch((err) => {
        console.warn("Utilizando repositórios de fallback:", err);
        setRepos(fallbackRepos);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="curriculo" className="section curriculo">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Carreira & Código</span>
          <h2>Currículo & Atividade GitHub</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Baixe meu currículo profissional atualizado ou acompanhe meus repositórios e projetos de código aberto:
          </p>
        </motion.div>

        <div className="curriculo-grid">
          {/* Bloco da esquerda - Downloads de CV */}
          <motion.div
            className="cv-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="cv-card-header">
              <div className="cv-icon-badge">
                <FaDownload />
              </div>
              <div>
                <h3 className="block-title">Downloads Disponíveis</h3>
                <p className="cv-subtitle">Documentos em formato PDF prontos para análise</p>
              </div>
            </div>

            <div className="cv-actions">
              <a
                href="/cv/Curriculo-Leonardo.pdf"
                download="Curriculo-Leonardo.pdf"
                className="cv-download-btn primary-cv"
              >
                <div className="cv-btn-content">
                  <FaFilePdf className="pdf-icon" />
                  <div className="cv-btn-text">
                    <strong>Currículo Completo</strong>
                    <span>Português (Brasil) • Atualizado 2026</span>
                  </div>
                </div>
                <FaDownload className="download-arrow-icon" />
              </a>

              <a
                href="/cv/Resume-Leonardo.pdf"
                download="Resume-Leonardo.pdf"
                className="cv-download-btn secondary-cv"
              >
                <div className="cv-btn-content">
                  <FaFilePdf className="pdf-icon" />
                  <div className="cv-btn-text">
                    <strong>Resume / CV</strong>
                    <span>English Version • International Format</span>
                  </div>
                </div>
                <FaDownload className="download-arrow-icon" />
              </a>
            </div>

            <div className="cv-highlights-box">
              <h4>
                <FaCheckCircle className="check-icon" /> Principais Qualificações:
              </h4>
              <ul>
                <li>Graduando em Análise e Desenvolvimento de Sistemas</li>
                <li>Técnico em Informática com experiência em TI corporativa</li>
                <li>Desenvolvimento Web (React, TypeScript, PHP) & Desktop (C#)</li>
                <li>Disponibilidade para posições Júnior/Pleno ou projetos PJ/Freelance</li>
              </ul>
            </div>
          </motion.div>

          {/* Bloco da direita - Repositórios GitHub */}
          <motion.div
            className="github-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="github-card-header">
              <div className="github-icon-badge">
                <FaGithub />
              </div>
              <div className="github-header-info">
                <h3 className="block-title">Atividade no GitHub</h3>
                <a
                  href="https://github.com/leonardobier"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-profile-link"
                >
                  @leonardobier <FaExternalLinkAlt />
                </a>
              </div>
            </div>

            {loading ? (
              <div className="repo-loading">
                <div className="skeleton-line" />
                <div className="skeleton-line" />
                <div className="skeleton-line" />
              </div>
            ) : (
              <ul className="repo-list">
                {repos.map((repo) => (
                  <li key={repo.id} className="repo-item">
                    <div className="repo-header">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="repo-name"
                      >
                        <FaCodeBranch className="repo-icon" /> {repo.name}
                      </a>
                      {repo.language && (
                        <span className="repo-lang-badge">{repo.language}</span>
                      )}
                    </div>
                    <p className="repo-desc">
                      {repo.description || "Repositório de código e desenvolvimento de software."}
                    </p>
                  </li>
                ))}
              </ul>
            )}

            <div className="github-card-footer">
              <a
                href="https://github.com/leonardobier"
                target="_blank"
                rel="noopener noreferrer"
                className="view-all-github-btn"
              >
                Ver todos os repositórios no GitHub <FaExternalLinkAlt />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Curriculo;