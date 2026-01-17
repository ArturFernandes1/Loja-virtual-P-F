import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Sessao1 from '../components/Sessao1';
import Sessao2 from '../components/Sessao2';
import NossoServico from '../components/NossoServico';
import Footer from '../components/Footer';
import ValoresEmpresa from '../components/ValoresEmpresa';
import Parallax from '../components/Parallax';

function Home() {
  return (
    <>
      <Navbar/>
      <Carousel/>
      <Sessao1/>
      <ValoresEmpresa/>
      <Sessao2/> 
      <Parallax/>
      <NossoServico/>
      <Footer/>
    </>
  );
}

export default Home;