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
          <li><a href="/Checkout">Checkout</a></li>
          <li><a href="/mi-cuenta/register">Regístrate</a></li>
        </ul>
      </div>
      <div className="contacto">
        <h4>Contáctanos</h4>
        <p><i className="fa fa-map-marker" aria-hidden="true"></i> Centro de Lima - Jr. de la Unión 446 Tda.129</p>
        <p><i className="fa fa-map-marker" aria-hidden="true"></i> Miraflores - Avenida Larco 345 Tda. S-9</p>
        <p><i className="fa-brands fa-whatsapp" aria-hidden="true"></i> +51 927 357 217</p>
        <p><i className="fa fa-clock" aria-hidden="true"></i> Lunes - Sábado: 10:00am - 7:00pm</p>
        <p><i className="fa fa-envelope" aria-hidden="true"></i> contacto@platinoperu.com</p>
      </div>
      <div className="certificaciones-y-redes">
        <img src="\img\Logo\certificado.png" alt="Diamond" />
        
        <a href="https://www.facebook.com/joyeriaplatinoperu" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/platinoperu/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <p>© 2024 Platino Perú. All rights reserved.</p>
      </div>
      
    </footer>
  );
};

export default PiePagina;
