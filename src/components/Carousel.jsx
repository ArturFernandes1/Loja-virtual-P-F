import React from "react";
import Cozinha1 from "../assets/Cozinhagpt2.png";
import Sala1 from "../assets/Salagpt2.png";
import "./Carousel.css";
import ButtonOrcamento from "./ButtonOrcamento";

function Carousel() {
  return (
    <div
      id="myCarousel"
      className="carousel slide carousel-wrapper"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {/* SLIDE 1 */}
        <div className="carousel-item active">
          <img
            src={Cozinha1}
            className="d-block w-100 carousel-img"
            alt="Cozinha planejada"
          />

          <div className="carousel-overlay">
            <div className="carousel-overlay-content">
              <div className="carousel-text">
                <h1>OS MELHORES MÓVEIS PLANEJADOS DE GREJO DO CRUZ - PB</h1>
                <h2>Solicite seu orçamento de forma rápida e fácil!</h2>
              </div>

              <ButtonOrcamento />
            </div>
          </div>
        </div>

        {/* SLIDE 2 */}
        <div className="carousel-item">
          <img
            src={Sala1}
            className="d-block w-100 carousel-img"
            alt="Sala planejada"
          />

          <div className="carousel-overlay">
            <div className="carousel-overlay-content">
              <div className="carousel-text">
                <h1>SALAS PLANEJADAS COM DESIGN E CONFORTO</h1>
                <h2>Projetos sob medida para o seu estilo</h2>
              </div>

              <ButtonOrcamento />
            </div>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" />
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" />
      </button>
    </div>
  );
}

export default Carousel;
