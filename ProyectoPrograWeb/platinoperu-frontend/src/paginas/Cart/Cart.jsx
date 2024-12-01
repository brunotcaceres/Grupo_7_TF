import React from 'react';
import './Cart.css';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import Breadcrumb from '../../componentes/Breadcrumb/Breadcrumb';
const Cart = () => {
  return (
    <div>
      <BarraNavegacion />
      <Breadcrumb path={"Inicio > Cart"}/>
    <div className="cart-container">
      
      <div className="cart-header">
        <h2>Carrito</h2>
      </div>
      <div className="cart-content">
        <div className="cart-empty">
          <img src="img\cart\shopping-cart-empty-side-view.png" alt="Carrito Vacío" />
          <p>Tu carrito está actualmente vacío.</p>
          <button onClick={() => window.location.href = "/tienda"}>Volver a la tienda</button>
        </div>
      </div>
      
    </div>
    <PiePagina />
    </div>
    
  );
};

export default Cart;
