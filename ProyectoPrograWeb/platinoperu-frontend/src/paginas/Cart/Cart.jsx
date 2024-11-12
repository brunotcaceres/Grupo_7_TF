import React from 'react';
import './Cart.css';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';

const Cart = () => {
  return (
    <div className="cart-container">
      <BarraNavegacion />
      <div className="cart-header">
        <h2>Carrito</h2>
      </div>
      <div className="cart-content">
        <div className="cart-empty">
          <img src="/assets/empty-cart.svg" alt="Carrito Vacío" />
          <p>Tu carrito está actualmente vacío.</p>
          <button onClick={() => window.location.href = "/tienda"}>Volver a la tienda</button>
        </div>
      </div>
      <PiePagina />
    </div>
  );
};

export default Cart;
