import React from "react";
import './QuadrosEspaco.css';
import Rectangle1 from '../assets/Rectangle1.png';
import Rectangle2 from '../assets/Rectangle2.png';
import Banheiro024 from '../assets/Banheiro024.avif'
import Cozinha0b4 from '../assets/Cozinha0b4.avif'

export default function QuadrosEspaco() {
    return (
        <section className="sessao-principal">
            <section className="sessao-quadros">
                <div className="img-container">
                    <img className="img-ambiente-4" src={Cozinha0b4} alt="imagem de ambiente de quarto" />
                    <span className="img-label-4">Cozinha</span>
                </div>
                <div className="img-container">
                    <img className="img-ambiente-1" src={Rectangle2} alt="imagem de ambiente de quarto" />
                    <span className="img-label-1">Sala</span>
                </div>
                <div className="img-container">
                    <img className="img-ambiente-2" src={Rectangle1} alt="imagem de ambiente de quarto" />
                    <span className="img-label-2">Quarto</span>
                </div>
                <div className="img-container">
                    <img className="img-ambiente-3" src={Banheiro024} alt="imagem de ambiente de quarto" />
                    <span className="img-label-3">Banheiro</span>
                </div>
            </section>
        </section>
    );
}
