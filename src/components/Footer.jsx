import React from "react";
import "../components/Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <footer>
          <div className="container">
            <div className="row">

              <div className="col">
                <h5 className="footer-heading">Parcerias</h5>
                <ul className="footer-list">
                  <li><a className="footer-link" href="https://www.ifpb.edu.br/" rel="noopener noreferrer">Vidraçaria Vitral</a></li>
                  <li><a className="footer-link" href="https://estudante.ifpb.edu.br/" rel="noopener noreferrer">MDF Design & Decoração</a></li>
                  <li><a className="footer-link" href="https://matrizdinamica-ifpb.netlify.app/course/1" rel="noopener noreferrer">Móveis Arte & Estilo</a></li>
                    <li><a className="footer-link" href="footer-">Designer de Interiores</a></li>
                  </ul>
              </div>

          <div className="col">
            <h5 className="footer-heading">Processos</h5>
            <ul className="footer-list">
              <li><a className="footer-link" href="#">Corte e Dimensionamento</a></li>
              <li><a className="footer-link" href="#">Usinagem em MDF</a></li>
              <li><a className="footer-link" href="#">Acabamento Fino</a></li>
              <li><a className="footer-link" href="#">Montagem de Móveis</a></li>
              <li><a className="footer-link" href="#">Instalação Técnica</a></li>
            </ul>
          </div>


              <div className="col">
                <h5 className="footer-heading">Nosso Contato</h5>
                <ul className="footer-list">
                  <li><a className="footer-link" href="https://api.whatsapp.com/send?phone=5583994132437" target="_blank" rel="noopener noreferrer">Whatsapp (83) 99413-2437</a></li>
                  <li><a className="footer-link" href="https://api.whatsapp.com/send?phone=5583994132437" target="_blank" rel="noopener noreferrer">Comercial</a></li>
                  <li><a className="footer-link" href="https://api.whatsapp.com/send?phone=5583994132437" target="_blank" rel="noopener noreferrer">Orçamentos</a></li>
                </ul>
              </div>

              <div className="col">
                <h5 className="footer-heading">Redes Sociais</h5>
                <ul className="footer-list">
                  <li><a className="footer-link" href="https://www.instagram.com/ieeeifpbcg/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                  <li><a className="footer-link" href="https://www.facebook.com/ieeeifpbcg" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                  <li><a className="footer-link" href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                </ul>
              </div>

            </div>
          </div>
        </footer>
      </div>

      <div className="sub-footer">
        <p className="footer-text">Marcenaria Pai & Filho</p>
        <p className="footer-text">Desenvolvido por Artur Fernandes — © 2026</p>
      </div>
    </>
  );
}

export default Footer;
