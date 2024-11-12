import React from 'react';
import './Filtro.css';

const Filtro = () => {
  return (
    <div className="filtro">
      <button>Filtrar</button>
      <div className="sidebar">
        <label>Precio:</label>
        <input type="range" min="20" max="6500" />
        <p>Rango de precios: S/20 - S/6500</p>
      </div>
    </div>
  );
};

export default Filtro;
