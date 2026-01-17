import React, { useState } from 'react';
import './Navbar.css';
import Frame from '../assets/Frame.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className={`topnav ${isOpen ? 'responsive' : ''}`}>
        
        <div className="logo-container">
          <img
            className="logo-empresa"
            src={Frame}
            alt="logo da empresa"
          />
        </div>

        <div className="menu">
          <a href="/">HOME</a>
          <a href="/Empresa">EMPRESA</a>
          <a href="/Portfolio">PORTFÓLIO</a>
          <a href="/Contato">CONTATO</a>
          <a href="/Orcamento">ORÇAMENTO</a>
        </div>

        <button className="icon" onClick={toggleMenu}>
          &#9776;
        </button>

      </nav>
    </header>
  );
};

export default Navbar;
