import React from "react";
import Salaproj1 from "../assets/salaproject.png";
import "../components/Sessao1.css";


export default function Sessao1() {
  return (
    <section className="sessao1">
      <div className="sessao1-container">
        {/* Texto */}
        <div className="sessao1-texto">
          <h1 className="sessao1-title">
            VOCÊ EM TODOS OS DETALHES DE SUA CASA!
          </h1>

          <p>
            Nossos móveis são pensados na real necessidade de cada cliente, em
            todo projeto levamos em conta o estilo de vida, gostos e rotina de
            nossos clientes para entregar não apenas um móvel, mas sim qualidade
            de vida no seu dia a dia, e mais personalidade para o seu lar.
          </p>

          <p>Qualidade, sofisticação e personalização.</p>
          <p>Mais de você em seus móveis.</p>
        </div>

        {/* Imagem */}
        <div className="sessao1-imagem">
          <img src={Salaproj1} alt="Imagem de uma sala planejada" />
        </div>
      </div>
    </section>
  );
}
