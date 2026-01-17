import React, { useRef, useState, useEffect } from "react";
import "./NossoServico.css";
import Vector from "../assets/Vector.svg";
import Sobmedida from '../assets/Sobmedida.png';
import confiabilidade from '../assets/confiabilidade.png';
import qualidade1 from '../assets/qualidade1.png';
import solucoes from '../assets/solucoes.png';
import solutcriative from '../assets/solutcriative.png';
import conforto from '../assets/conforto.png';

const servicos = [
  {
    id: 1,
    titulo: "Design Sob Medida",
    descricao: "Projetamos móveis personalizados que se ajustam perfeitamente ao seu espaço e estilo de vida.",
    icone: Sobmedida
  },
  {
    id: 2,
    titulo: "Qualidade em primeiro lugar",
    descricao: "Peças trabalhadas com materiais de alta qualidade, garantindo durabilidade e acabamento impecável.",
    icone: qualidade1
  },
  {
    id: 3,
    titulo: "Inovação em cada projeto",
    descricao: "Transformamos suas ideias em realidade com soluções criativas e atualizadas com as últimas tendências.",
    icone: solutcriative
  },
  {
    id: 4,
    titulo: "Soluções Criativas",
    descricao: "Ideias inovadoras e abordagens únicas para criar espaços práticos e visualmente atraentes.",
    icone: solucoes
  },
  {
    id: 5,
    titulo: "Conforto e Estilo",
    descricao: "Móveis que combinam conforto máximo com design elegante para um ambiente acolhedor e sofisticado.",
    icone: conforto
  },
  {
    id: 6,
    titulo: "Compromisso com a Excelência",
    descricao: "Superamos expectativas em cada projeto, oferecendo um serviço impecável e resultados excepcionais.",
    icone: confiabilidade
  }
];

export default function NossoServico() {
  const cardContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (direction) => {
    if (cardContainerRef.current) {
      const scrollAmount = 300;
      cardContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section className="container-servicos">
        <img className="img-fundo" src={Vector} alt="imagem de background" />
        <section 
          className={`card-servicos ${isMobile ? "scrollable" : ""}`}
          ref={cardContainerRef}
        >
          {servicos.map((servico) => (
            <div key={servico.id} className="micro-servicos">
              <h2 className="title-servicos">
                <img className="icon-servicos" src={servico.icone} alt="" />
                {servico.titulo}
              </h2>
              <p>{servico.descricao}</p>
            </div>
          ))}
        </section>
        
        {isMobile && (
          <div className="carousel-buttons">
            <button className="prev-button" onClick={() => handleScroll("left")}>←</button>
            <button className="next-button" onClick={() => handleScroll("right")}>→</button>
          </div>
        )}
      </section> 
    </>
  );
}