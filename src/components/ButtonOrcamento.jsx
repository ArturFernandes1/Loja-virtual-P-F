import React from 'react';
import './ButtonOrcamento.css';

const ButtonOrcamento = ({ onClick }) => {
  return (
    <button className="btn-orcamento" onClick={onClick}>
      Solicitar Orçamento
    </button>
  );
};

export default ButtonOrcamento;
