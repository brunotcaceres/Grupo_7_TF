import React from 'react';
import './Ordenamiento.css';

const Ordenamiento = () => {
  return (
    <div className="ordenamiento">
      <select>
        <option value="default">Orden predeterminado</option>
        <option value="popular">Ordenar por popularidad</option>
        <option value="rating">Ordenar por puntuación media</option>
        <option value="newest">Ordenar por los últimos</option>
        <option value="low-to-high">Ordenar por precio: bajo a alto</option>
        <option value="high-to-low">Ordenar por precio: alto a bajo</option>
      </select>
    </div>
  );
};

export default Ordenamiento;
