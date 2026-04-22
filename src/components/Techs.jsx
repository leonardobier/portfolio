import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt } from "react-icons/fa";
import { SiVite, SiGithub, SiMysql } from "react-icons/si";

const Techs = () => {
  return (
    <section id="techs" className="section techs">
      <h2>Tecnologias</h2>
      <p>Essas são algumas das ferramentas e linguagens que utilizo no meu dia a dia:</p>
      <div className="tech-grid">
        <div className="tech-card">
          <FaHtml5 className="tech-icon html" />
          <span>HTML5</span>
        </div>
        <div className="tech-card">
          <FaCss3Alt className="tech-icon css" />
          <span>CSS3</span>
        </div>
        <div className="tech-card">
          <FaJs className="tech-icon js" />
          <span>JavaScript</span>
        </div>
        <div className="tech-card">
          <FaReact className="tech-icon react" />
          <span>React</span>
        </div>
        <div className="tech-card">
          <SiVite className="tech-icon vite" />
          <span>Vite</span>
        </div>
        <div className="tech-card">
          <FaPython className="tech-icon python" />
          <span>Python</span>
        </div>
        <div className="tech-card">
          <SiMysql className="tech-icon mysql" />
          <span>MySQL</span>
        </div>
        <div className="tech-card">
          <FaGitAlt className="tech-icon git" />
          <span>Git</span>
        </div>
        <div className="tech-card">
          <SiGithub className="tech-icon github" />
          <span>GitHub</span>
        </div>
      </div>
    </section>
  );
};

export default Techs;
