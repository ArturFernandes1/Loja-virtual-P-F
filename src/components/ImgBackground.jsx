import React, { useState, useEffect } from "react";
import './ImgBackground.css';
import imgfundo from '../assets/imgfundo.svg';

export default function ImgBackground({ title }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Quando a imagem for carregada
    const handleImageLoad = () => {
        setIsLoaded(true); // A imagem foi carregada
        setTimeout(() => setIsVisible(true), 0); // Exibe o título após um pequeno atraso
    };

    useEffect(() => {
        // Esse efeito garante que o componente faça a transição quando for renderizado
        const timer = setTimeout(() => setIsLoaded(true), 0);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`container-background ${isLoaded ? 'loaded' : ''}`}>
            <img
                className="img-background"
                src={imgfundo}
                alt="imagem padrão de background"
                onLoad={handleImageLoad}
            />
            <h1 className={`titulo-background ${isVisible ? 'visible' : ''}`}>{title}</h1>
        </div>
    );
}
