import React from 'react';
import Cozinha1 from "../assets/Cozinha1.jpg";
import Cozinha2 from "../assets/Cozinha2.jpeg";
import imagem_carousel from "../assets/imagem_carousel.jpg"
import "./Carousel.css";

function Carousel() {
    return (
        <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" className="active" aria-label="Slide 3" aria-current="true"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item">
                <img src={Cozinha1} className="d-block w-100" alt="Cozinha 1" />
                <div className="container">
                    <div className="carousel-caption custom-carousel-caption">
                        <h1>Realize o Sonho da Cozinha Planejada!</h1>
                      {/*  <p className="opacity-75"> Não é só sobre beleza; é sobre funcionalidade. Gavetas inteligentes, armários acessíveis e superfícies de trabalho adaptadas a você, tudo pensado para maximizar o espaço e facilitar o seu dia a dia. Desperte o chef que há em você em um ambiente que inspira criatividade e reúne a família.</p> */}
                    </div>
                </div>
            </div>
            <div className="carousel-item active carousel-item-start">
                <img src={Cozinha2} className="d-block w-100" alt="Cozinha 2" />
                <div className="container">
                    <div className="carousel-caption text-start custom-carousel-caption">
                        <h1>Transforme seu quarto em um refúgio personalizado.</h1>
               {/*       <p className="opacity-75">Renove seu quarto e transforme-o em um refúgio pessoal, sob medida para seus gostos e necessidades. Com móveis projetados, você pode criar um ambiente único e funcional, que reflete sua personalidade e estilo de vida.</p> */}
                    </div>
                </div>
            </div>
            <div className="carousel-item carousel-item-next carousel-item-start">
                <img src={imagem_carousel} className="d-block w-100" alt="Moveis 1" />
                <div className="container">
                    <div className="carousel-caption text-start custom-carousel-caption">
                        <h1>Estilo e praticidade se unem neste quarto com móveis modernos.</h1>
             {/*        <p className="opacity-75">Experimente os cursos e materiais 
                    funcionalidade. Gavetas inteligentes, armários acessíveis e superfícies de trabalho adaptadas a você, tudo pensado para maximizar o espaço e facilitar o seu dia a dia. Desperte o chef que há em você em um ambiente que inspira criatividade e reúne a família.disponibilizados pelo IEEE.</p>
                    */} </div>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    );
}

export default Carousel;
