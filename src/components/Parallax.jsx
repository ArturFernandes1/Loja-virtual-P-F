import React from "react";
import "./Parallax.css";
import "./ButtonOrcamento"
import ButtonOrcamento from "./ButtonOrcamento";

const Parallax = () => {
  return (
    <section className="parallax-container">
      <div className="parallax-bg"></div>

      <div className="parallax-content">
        <h1>Soluções inteligentes,
            <span className="frase-span">design exclusivo.</span></h1>
        <p>Entre em contato agora!</p>      
        <ButtonOrcamento/>
      </div>
    </section>
  );
};

export default Parallax;
