import React from 'react';
import './CategoriaCard.css';

const CategoriaCard = ({ nombre, icono, link }) => {
  return (
    <a href={link} className="categoria-card">
      <div className="categoria-contenedor">
        <img src={icono} alt={nombre} />
        <p>{nombre}</p>
      </div>
    </a>
  );
};

export default CategoriaCard;
