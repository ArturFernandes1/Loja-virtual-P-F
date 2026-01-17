import React from "react";
import "../components/ValoresEmpresa.css";

import esquadro from "../assets/iconesquadro.webp";
import service from "../assets/iconservice.webp";
import qualidade2 from "../assets/icon2qualidade.webp";

export default function ValoresEmpresa() {
  return (
    <section className="valores-section">
      <div className="valores-container">

        <article className="valor-card">
          <img src={esquadro} alt="Projetos sob medida" />
          <p>Projetos feito sob medida</p>
        </article>

        <article className="valor-card">
          <img src={service} alt="Atendimento personalizado" />
          <p>Atendimento personalizado</p>
        </article>

        <article className="valor-card">
          <img src={qualidade2} alt="Móveis de Qualidade" />
          <p>Móveis de Qualidade</p>
        </article>

      </div>
    </section>
  );
}
