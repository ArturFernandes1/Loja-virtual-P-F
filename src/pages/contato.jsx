import React from 'react';
import Navbar from "../components/Navbar"
import ImgBackground from '../components/ImgBackground';
import SessaoContato from '../components/SessaoContato';
import Localizacao from '../components/Localizacao';
import Footer from '../components/Footer';

function Contato() {
  return (
    <>
      <Navbar/>
      <ImgBackground title={'Contato'}/>
      <SessaoContato/>
      <Localizacao/>
      <Footer/>
    </>
  );
}

export default Contato;




