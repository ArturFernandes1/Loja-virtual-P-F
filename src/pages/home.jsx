import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Sessao1 from '../components/Sessao1';
import Missao from '../components/Missao';
import Sessao2 from '../components/Sessao2';
import NossoServico from '../components/NossoServico';
import QuadrosEspaco from '../components/QuadrosEspaco';
import Footer from '../components/Footer';


function Home() {
  return (
    <>
      <Navbar/>
      <Carousel/>
      <Sessao1/>
      <Missao/>
      <Sessao2/> 
      <NossoServico/>
      <QuadrosEspaco/>
      <Footer/>
    </>
  );
}

export default Home;