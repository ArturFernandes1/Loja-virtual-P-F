import React from "react";
import '../components/SessaoContato.css'
import HorarioFuncionamento from "./HorarioFuncion";
import WhatsappQRCode from "./WhatsappQRcode";
import ImgContato from "../assets/ImgContato.png"


function SessaoContato() {
    return (
        <section className="container1">
            <div className="container0">
                <img className="Img-background-contato" src={ImgContato} alt="" />
                <div className="texto-sobrecontato">
                    <h2 className="title-texto">Fale Conosco</h2>
            
                    <p>Endereço: Rua Severino Gonçalves, Nº 331, Brejo do Cruz - PB, 58890-000</p>
                    <p>Horário de Atendimento: De segunda a sexta das 07:00 às 17:00 e nos sábado das 07:00 às 11:00</p>
                    <p>Organização: Francisco Rubens Fernandes</p>
                    <p>Endereço:  Brejo do Cruz, PB</p>
                    <p>E-mail: test@moveis.gmail.com</p>
                    <p className="caixa-hora">
                      <HorarioFuncionamento/>
                    </p>
                </div> 

            </div>
            <div className="qr-code">
                <WhatsappQRCode id="whatsapp" phoneNumber="55839961511570" />
            </div>
        </section>
    );
}

export default SessaoContato;