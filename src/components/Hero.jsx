import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaFileDownload, FaEnvelope, FaChevronDown } from "react-icons/fa";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-background-glow" />
      <div className="overlay">
        {/* Selo informativo com pulso */}
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="pulse-dot" />
          Disponível para novos projetos e contratação
        </motion.div>

        {/* Título Principal */}
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Desenvolvedor <span className="gradient-text">Full-Stack</span> & Soluções Digitais
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          Especialista no desenvolvimento de plataformas SaaS, automações inteligentes para WhatsApp,
          sistemas Web modernos (React, TypeScript, PHP) e aplicações Desktop de alta performance (C#, .NET, MySQL).
        </motion.p>

        {/* Quick Highlights / Stats */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="stat-pill">
            <span className="stat-icon"><FaCode /></span>
            <div>
              <strong>Web & Desktop</strong>
              <small>Ecossistema Completo</small>
            </div>
          </div>
          <div className="stat-pill">
            <span className="stat-icon"><FaRocket /></span>
            <div>
              <strong>8+ Soluções</strong>
              <small>Projetos & Sistemas Reais</small>
            </div>
          </div>
          <div className="stat-pill">
            <span className="stat-icon"><FaCode /></span>
            <div>
              <strong>SaaS & IA</strong>
              <small>Automação & Finanças</small>
            </div>
          </div>
        </motion.div>

        {/* Botões principais */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
        >
          <motion.button
            className="hero-btn primary-btn"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            <FaCode /> Ver Projetos
          </motion.button>

          <motion.button
            className="hero-btn secondary-btn"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => document.getElementById("curriculo")?.scrollIntoView({ behavior: "smooth" })}
          >
            <FaFileDownload /> Ver Currículos
          </motion.button>

          <motion.button
            className="hero-btn tertiary-btn"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <FaEnvelope /> Fale Comigo
          </motion.button>
        </motion.div>

        {/* Indicador de scroll suave */}
        <motion.div
          className="hero-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7, y: [0, 8, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
        >
          <span>Role para explorar</span>
          <FaChevronDown />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;