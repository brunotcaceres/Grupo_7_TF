import React, { useState } from 'react';
import './BarraNavegacion.css';
import { Link } from 'react-router-dom';

const BarraNavegacion = () => {
  const [menuActivo, setMenuActivo] = useState('');
  const [carritoVisible, setCarritoVisible] = useState(false);

  const manejarMenu = (menu) => {
    setMenuActivo(menuActivo === menu ? '' : menu);
  };

  return (
    <nav className="barra-navegacion">
      <div className="logo">PLATINO</div>
      <ul className="menu">
        <li><a href="/">Inicio</a></li>
        <li
          onMouseEnter={() => manejarMenu('novios')}
          onMouseLeave={() => manejarMenu('')}
        >
          Novios
          {menuActivo === 'novios' && (
            <div className="submenu">
              <div className="submenu-column">
                <h4>Anillo de Compromiso</h4>
                <ul>
                  <li>Plata Ley 950</li>
                  <li>Plata con Oro 18k</li>
                </ul>
              </div>
              <div className="submenu-column">
                <h4>Alianzas de Amor</h4>
                <ul>
                  <li>Plata Ley 950</li>
                  <li>Plata con Oro 18k</li>
                </ul>
              </div>
            </div>
          )}
        </li>
        <li
          onMouseEnter={() => manejarMenu('matrimonio')}
          onMouseLeave={() => manejarMenu('')}
        >
          Matrimonio
          {menuActivo === 'matrimonio' && (
            <div className="submenu">
              <div className="submenu-column">
                <h4>Aros Matrimonio por Material</h4>
                <ul>
                  <li>Plata Ley 950</li>
                  <li>Oro 18k</li>
                </ul>
              </div>
              <div className="submenu-column">
                <h4>Aros Matrimonio por Diseño</h4>
                <ul>
                  <li>Clásicos</li>
                  <li>Con Piedras</li>
                </ul>
              </div>
            </div>
          )}
        </li>
        <li
          onMouseEnter={() => manejarMenu('accesorios')}
          onMouseLeave={() => manejarMenu('')}
        >
          Accesorios
          {menuActivo === 'accesorios' && (
            <div className="submenu">
              <div className="submenu-column">
                <h4>Accesorios Dama</h4>
                <ul>
                  <li>Aretes</li>
                  <li>Cadenas</li>
                </ul>
              </div>
              <div className="submenu-column">
                <h4>Para Él</h4>
                <ul>
                  <li>Aros de Vestir</li>
                  <li>Cadenas</li>
                </ul>
              </div>
            </div>
          )}
        </li>
        <li><Link to="/contactanos"><a>Contáctanos</a></Link></li>
      </ul>
      <div className="iconos">
        <i className="fa fa-search"></i>
        <nav>
        <Link to="/mi-cuenta"><i className="fa fa-user"></i></Link>
        </nav>    
        <nav>
        <Link to="/wishlist"><i className="fa fa-heart"></i></Link>
        </nav>
        <div
          onMouseEnter={() => setCarritoVisible(true)}
          onMouseLeave={() => setCarritoVisible(false)}
        >
          <Link to="/cart">
          <i className="fa fa-shopping-cart"></i>
          </Link>
          {carritoVisible && (
            <div className="carrito-popup">
              No hay productos en el carrito.
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default BarraNavegacion;
