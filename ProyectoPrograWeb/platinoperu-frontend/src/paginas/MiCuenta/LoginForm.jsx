import React from 'react';
import { Link } from 'react-router-dom';
import './MiCuenta.css';

const LoginForm = () => {
  return (
    <div className="mi-cuenta-container">
      <h2>Acceder</h2>
      <form className="mi-cuenta-form">
        <label htmlFor="username">Nombre de usuario o correo electrónico *</label>
        <input type="text" id="username" required />

        <label htmlFor="password">Contraseña *</label>
        <input type="password" id="password" required />

        <div className="form-footer">
          <label>
            <input type="checkbox" /> Recuérdame
          </label>
          <Link to="/mi-cuenta/forgot-password">¿Olvidaste la contraseña?</Link>
        </div>

        <button type="submit" className="btn-acceso">Acceso</button>
      </form>

      <div className="register-link">
        ¿No tienes una cuenta? <Link to="/mi-cuenta/register">Regístrate</Link>
      </div>
    </div>
  );
};

export default LoginForm;
