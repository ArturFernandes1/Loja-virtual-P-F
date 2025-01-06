import React, { useState } from 'react';
import './Navbar.css'; 
 import logo from '../assets/logo.svg' 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className={`topnav${isOpen ? ' responsive' : ''}`} id="myTopnav">
                 <img className="logo-empresa" src={logo} alt="lodo da empresa" /> 
                <a className='item-1' href="/">HOME</a>
                <a className='item-2' href="/Empresa">EMPRESA</a>
                <a className='item-3' href="/Contato">CONTATO</a>
                <a className='item-4' href="/Portfolio">PORTFOLIO</a>
                <a  className='item-last' href="/Orcamento">ORÇAMENTO</a>
                <a href="javascript:void(0);" className="icon" onClick={toggleMenu}>
                    <span>&#9776;</span>
                </a>
            </div>
        </header>
    );
};

export default Navbar;
