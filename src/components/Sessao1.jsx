
import React from "react";
import Moveis1 from '../assets/Moveis1.jpg';
import "../components/Sessao1.css";

function Sessao1() {
    return (
        <div className="container1a">
            <div id="container0a">
                <img src={Moveis1} className="img-fluid" alt="Imagem de uma cozinha planejada"/>
                
                    <div className="texto1">
                        <h2 className="title">MÓVEIS PLANEJADOS</h2>
                  {/*       <hr></hr> */}
                        <p>Feitos especialmente para cada ambiente da casa, os MÓVEIS SOB MEDIDA oferecem ganho de espaço,
                        conforto,
                        personalização e requinte aos espaços. Conosco, seus móveis são pensados de acordo com sua
                        necessidade.
                        Oferecemos a você acabamentos e farragens da melhor qualidade e com uma grande gama de variedades
                        para
                        que seu projeto realmente tenha a personalização que você merece. </p>
                    </div> 
            </div>
        </div>
    )
}

export default Sessao1; 