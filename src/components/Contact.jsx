import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaPaperPlane } from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6ijdv0l",
        "template_rrpt5yg",
        form.current,
        "Gx6oyvae9uNKrVtq2"
      )
      .then(
        () => {
          alert("Mensagem enviada com sucesso!");
        },
        (error) => {
          alert("Erro ao enviar mensagem: " + error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h2>Entre em contato</h2>
      <form ref={form} onSubmit={sendEmail} className="container">
        <div className="card">
          <label>Nome:</label>
          <input type="text" name="user_name" required />

          <label>E-mail para contato:</label>
          <input type="email" name="user_email" required />

          <label>Mensagem:</label>
          <textarea name="message" rows="5" required />

          <button type="submit">
            <FaPaperPlane style={{ marginRight: "8px" }} />
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
