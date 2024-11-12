import React from 'react';
import './PiePagina.css';

const PiePagina = () => {
  return (
    <footer className="pie-pagina">
      <div className="mi-cuenta">
        <h4>Mi Cuenta</h4>
        <ul>
          <li><a href="/mi-cuenta">Mi Cuenta</a></li>
          <li><a href="/wishlist">Favoritos</a></li>
          <li><a href="/cart">Mi Carrito</a></li>
          <li><a href="/cart">Checkout</a></li>
          <li><a href="/mi-cuenta/register">Regístrate</a></li>
        </ul>
      </div>
      <div className="contacto">
        <h4>Contáctanos</h4>
        <p>Centro de Lima - Jr. de la Unión 446 Tda.129</p>
        <p>Miraflores - Avenida Larco 345 Tda. S-9</p>
        <p>WhatsApp: +51 927 357 217</p>
      </div>
      <div className="redes-sociales">
        <i className="fa fa-facebook"></i>
        <i className="fa fa-instagram"></i>
      </div>
    </footer>
  );
};

export default PiePagina;
