import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaDownload } from "react-icons/fa";

function Curriculo() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/leonardobier/repos?sort=updated")
      .then((res) => res.json())
      .then((data) => setRepos(data.slice(0, 5)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="curriculo" className="section curriculo">
      <h2>Currículo</h2>
      <p>Aqui você pode acessar meus currículos e ver meus últimos projetos no GitHub:</p>

      <div className="curriculo-grid">
        {/* Bloco da esquerda - Currículos */}
        <motion.div
          className="cv-block"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="block-title">
            <FaDownload style={{ marginRight: "8px" }} />
            Downloads
          </h3>

          <motion.a
          href="/workspaces/portfolio/cv/Currículo - Leonardo Lage Bier.pdf"
          download="Curriculo-Leonardo.pdf"
          className="gradient-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
                                    >
          📄 Currículo (Português)
        </motion.a>

        <motion.a
          href="/workspaces/portfolio/cv/Resume - Leonardo Lage Bier.pdf"
          download="Resume-Leonardo.pdf"
          className="gradient-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
                                    >
          📄 Resume (English)
        </motion.a>

        </motion.div>

        {/* Bloco da direita - Repositórios */}
        <div className="github-block">
          <h3 className="block-title">
            <FaGithub style={{ marginRight: "8px" }} />
            Últimos Repositórios
          </h3>
          <ul>
            {repos.map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
                <p>{repo.description || "Sem descrição"}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Curriculo;