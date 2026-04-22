import React, { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6ijdv0l",   // substitua pelo seu Service ID do EmailJS
        "template_rrpt5yg",  // substitua pelo seu Template ID do EmailJS
        form.current,
        "Gx6oyvae9uNKrVtq2" // sua Public Key do EmailJS
      )
      .then(
        (result) => {
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

          <button type="submit">Enviar</button>
        </div>
      </form>
    </section>
  );
}

export default Contact; 