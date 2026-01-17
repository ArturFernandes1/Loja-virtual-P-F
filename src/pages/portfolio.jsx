import React from 'react'
import Navbar from '../components/Navbar'
import ImgBackground from '../components/ImgBackground'
import Cards from '../components/Card-iterative'


function Portfolio() {
  return (
    <>
      <Navbar/>
      <ImgBackground title={'Portifolio'}/>
      <Cards/>
   
    </>
  );
}

export default Portfolio;