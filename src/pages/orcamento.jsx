import React from 'react';
import Navbar from "../components/Navbar"
import ImgBackground from '../components/ImgBackground';
import OrcamentoSessao1 from '../components/OrcamentoSessao1';
import OrcamentoSessao2 from '../components/OrcamentoSessao2';
import Footer from '../components/Footer';


function Orcamento() {
  return (
    <>
      <Navbar/>
      <ImgBackground title={'Orçamento'}/>
      <OrcamentoSessao1/>
      <OrcamentoSessao2/>
      <Footer/>
    </>
  );
}

export default Orcamento;