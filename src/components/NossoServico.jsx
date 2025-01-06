import React from "react";
import "./NossoServico.css"
import Vector from "../assets/Vector.svg"
import Sobmedida from '../assets/Sobmedida.png'
import confiabilidade from '../assets/confiabilidade.png'
import qualidade1 from '../assets/qualidade1.png'
import solucoes from '../assets/solucoes.png'
import solutcriative from '../assets/solutcriative.png'
import conforto from '../assets/conforto.png'




export default function NossoServico(){
    return(
        <>
        <section className="container-servicos">
            <img className="img-fundo" src={Vector} alt="imagem de background" />
            <section className="card-servicos">
                <div className="micro-servicos">
                    <h2 className="title-servicos"> <img className="icon-servicos" src={Sobmedida} alt="" />  Design Sob Medida</h2>
                    <p>Projetamos móveis personalizados que se ajustam perfeitamente ao seu espaço e estilo de vida.</p>

                </div>
                <div className="micro-servicos">
                <h2 className="title-servicos">  
                <img className="icon-servicos" src={qualidade1} alt="" /> Qualidade em primeiro lugar</h2>
                    <p>Peças trabalhadas com materiais de alta qualidade, garantindo durabilidade e acabamento impecável.</p>

                </div>
                <div className="micro-servicos">
                <h2 className="title-servicos">
                <img className="icon-servicos" src={solutcriative} alt="" /> Inovação em cada projeto</h2>
                    <p>Transformamos suas ideias em realidade com soluções criativas e atualizadas com as últimas tendências.</p>

                </div>
                <div className="micro-servicos">
                <h2 className="title-servicos"><img className="icon-servicos" src={solucoes} alt="" /> Soluções Criativas</h2>
                <p>Ideias inovadoras e abordagens únicas para criar espaços práticos e visualmente atraentes.</p>

                </div>
                <div className="micro-servicos">
                <h2 className="title-servicos">
                <img className="icon-servicos" src={conforto} alt="" /> Conforto e Estilo</h2>
                <p>Móveis que combinam conforto máximo com design elegante para um ambiente acolhedor e sofisticado.</p>

                </div>
                <div className="micro-servicos">
                <h2 className="title-servicos"> <img className="icon-servicos" src={confiabilidade} alt="" />  Compromisso com a Excelência</h2>
                <p>Superamos expectativas em cada projeto, oferecendo um serviço impecável e resultados excepcionais.</p>

                </div>
            </section>
        </section> 
        </>
    )
}