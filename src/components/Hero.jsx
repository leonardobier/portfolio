import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="overlay">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Desenvolvedor Full-Stack
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Desenvolvedor Web e Desktop | Estudante de Análise e Desenvolvimento de Sistemas | Técnico em Informática
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById("contact").scrollIntoView()}
        >
          Fale comigo
        </motion.button>
      </div>
    </section>
  );
}

export default Hero;
