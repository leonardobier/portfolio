import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaExclamationCircle,
  FaSpinner,
} from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    emailjs
      .sendForm(
        "service_6ijdv0l",
        "template_rrpt5yg",
        form.current,
        "Gx6oyvae9uNKrVtq2"
      )
      .then(
        () => {
          setLoading(false);
          setStatus({
            type: "success",
            message: "Mensagem enviada com sucesso! Retornarei o mais breve possível.",
          });
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setStatus({
            type: "error",
            message: `Falha ao enviar mensagem: ${error.text || "Tente novamente mais tarde ou use o WhatsApp."}`,
          });
        }
      );
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Conecte-se Comigo</span>
          <h2>Entre em Contato</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Interessado em uma consultoria, contratação ou desenvolvimento de software sob medida? Me mande uma mensagem!
          </p>
        </motion.div>

        <div className="contact-layout">
          {/* Card de canais diretos à esquerda */}
          <motion.div
            className="contact-info-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Vamos criar algo incrível juntos?</h3>
            <p className="contact-lead-text">
              Estou disponível para conversar sobre propostas de trabalho, parcerias, projetos sob demanda ou apenas trocar uma ideia sobre tecnologia.
            </p>

            <div className="contact-channel-list">
              <a
                href="https://wa.me/5521998492427?text=Ol%C3%A1%20Leonardo,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar!"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-item whatsapp-channel"
              >
                <div className="channel-icon-box">
                  <FaWhatsapp />
                </div>
                <div className="channel-text">
                  <span className="channel-title">WhatsApp Direto</span>
                  <span className="channel-value">(21) 99849-2427</span>
                </div>
              </a>

              <a
                href="mailto:leobier182@gmail.com"
                className="channel-item email-channel"
              >
                <div className="channel-icon-box">
                  <FaEnvelope />
                </div>
                <div className="channel-text">
                  <span className="channel-title">E-mail Profissional</span>
                  <span className="channel-value">leobier182@gmail.com</span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/leonardolagebier"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-item linkedin-channel"
              >
                <div className="channel-icon-box">
                  <FaLinkedin />
                </div>
                <div className="channel-text">
                  <span className="channel-title">LinkedIn</span>
                  <span className="channel-value">/in/leonardolagebier</span>
                </div>
              </a>

              <div className="channel-item location-channel">
                <div className="channel-icon-box">
                  <FaMapMarkerAlt />
                </div>
                <div className="channel-text">
                  <span className="channel-title">Localização</span>
                  <span className="channel-value">Rio de Janeiro, Brasil (Disponível Remoto / Híbrido)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulário à direita */}
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <label htmlFor="user_name">Seu Nome:</label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  placeholder="Ex: João Silva"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="user_email">Seu E-mail:</label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  placeholder="Ex: joao@empresa.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Sua Mensagem:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Conte um pouco sobre sua ideia, projeto ou necessidade..."
                  required
                />
              </div>

              {/* Banner de Feedback Inline */}
              {status.message && (
                <div className={`status-banner ${status.type}`}>
                  {status.type === "success" ? (
                    <FaCheckCircle className="status-icon" />
                  ) : (
                    <FaExclamationCircle className="status-icon" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                className="submit-form-btn"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <FaSpinner className="spinner-icon" /> Enviando Mensagem...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
