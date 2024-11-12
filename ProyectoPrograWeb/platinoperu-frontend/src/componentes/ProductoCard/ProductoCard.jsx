import React from 'react';
import './ProductoCard.css';

const ProductoCard = ({ nombre, precio, imagen, descuento }) => {
  return (
    <div className="producto-card">
      <div className="producto-img">
        <img src={imagen} alt={nombre} />
        {descuento && <span className="descuento">{descuento}</span>}
      </div>
      <h2>{nombre}</h2>
      <p className="precio">S/{precio}</p>
    </div>
  );
};

export default ProductoCard;
