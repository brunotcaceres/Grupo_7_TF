import React from 'react';
import { Link } from 'react-router-dom';
import './MiCuenta.css';

const RegisterForm = () => {
  return (
    <div className="mi-cuenta-container">
      <h2>Crear una cuenta</h2>
      <form className="mi-cuenta-form">
        <label htmlFor="email">Correo electrónico *</label>
        <input type="email" id="email" required />

        <label htmlFor="username">Nombre de usuario *</label>
        <input type="text" id="username" required />

        <label htmlFor="password">Contraseña *</label>
        <input type="password" id="password" required />

        <button type="submit" className="btn-acceso">Registrarse</button>
      </form>

      <div className="login-link">
        ¿Ya tienes una cuenta? <Link to="/mi-cuenta">Acceder</Link>
      </div>
    </div>
  );
};

export default RegisterForm;
