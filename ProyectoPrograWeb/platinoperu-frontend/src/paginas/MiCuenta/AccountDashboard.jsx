import React from 'react';
import { Link } from 'react-router-dom';
import './MiCuenta.css';

const AccountDashboard = () => {
  return (
    <div className="mi-cuenta-dashboard">
      <h2>Mi Cuenta</h2>
      <ul className="dashboard-links">
        <li><Link to="/mi-cuenta/orders">Mis Pedidos</Link></li>
        <li><Link to="/mi-cuenta/favorites">Favoritos</Link></li>
        <li><Link to="/mi-cuenta/cart">Mi Carrito</Link></li>
        <li><Link to="/mi-cuenta/settings">Configuración</Link></li>
        <li><Link to="/mi-cuenta/logout">Cerrar Sesión</Link></li>
      </ul>
    </div>
  );
};

export default AccountDashboard;
