import React from "react";
import { FaWrench, FaLaptopCode, FaFileInvoiceDollar, FaLightbulb } from "react-icons/fa";

function Marketing() {
  return (
    <section id="marketing" className="marketing">
      <div className="container">
        <h2>
          <FaLightbulb style={{ marginRight: "10px", color: "var(--accent)" }} />
          Sistemas Personalizados
        </h2>
        <p>
          Desenvolvo soluções sob medida para cada cliente. Seja para aplicações
          <strong> Web</strong> ou <strong> Desktop</strong>, cada projeto é único
          e recebe um orçamento exclusivo.
        </p>

        <div className="cards">
          <div className="card">
            <h3>
              <FaWrench style={{ marginRight: "8px", color: "var(--accent)" }} />
              Projetos Sob Medida
            </h3>
            <p>Criação de sistemas adaptados aos processos e objetivos da sua empresa.</p>
          </div>
          <div className="card">
            <h3>
              <FaLaptopCode style={{ marginRight: "8px", color: "var(--accent)" }} />
              Web &amp; Desktop
            </h3>
            <p>Aplicações modernas, responsivas e seguras para navegador ou ambiente local.</p>
          </div>
          <div className="card">
            <h3>
              <FaFileInvoiceDollar style={{ marginRight: "8px", color: "var(--accent)" }} />
              Orçamento Exclusivo
            </h3>
            <p>Planejamento e valores ajustados conforme a complexidade e necessidade.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Marketing;
