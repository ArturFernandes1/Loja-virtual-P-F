import React from 'react';
import Navbar from "../components/Navbar"
import CampoEmpresa from '../components/CampoEmpresa';
import ImgBackground from '../components/ImgBackground';

function Empresa() {
  return (
    <>
      <Navbar/>
      <ImgBackground title='Empresa'/> 
      <CampoEmpresa/>
    </>
  );
}

export default Empresa;