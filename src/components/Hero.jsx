import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="overlay">
        {/* Selo informativo */}
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ◉ Portfólio em constante evolução
        </motion.div>

        {/* Título mais atraente */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Desenvolvedor Full-Stack
        </motion.h2>

         <motion.h3
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Criando Experiências Digitais Inovadoras
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Desenvolvedor Web e Desktop | Estudante de Análise e Desenvolvimento de Sistemas | Técnico em Informática
        </motion.p>

        {/* Botões principais */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="gradient-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("projects").scrollIntoView()}
          >
            Ver Portfólio
          </motion.button>

          <motion.button
            className="gradient-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("curriculo").scrollIntoView()}
          >
            Ver Currículos
          </motion.button>

          <motion.button
            className="gradient-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("contact").scrollIntoView()}
          >
            Fale comigo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;