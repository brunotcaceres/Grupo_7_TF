import React from 'react';
import './MiCuenta.css';

const ForgotPasswordForm = () => {
  return (
    <div className="forgot-password-container">
      <h2>¿Perdiste tu contraseña?</h2>
      <p>
        Por favor, introduce tu nombre de usuario o correo electrónico.
        Recibirás un enlace para crear una nueva contraseña por correo electrónico.
      </p>
      <form>
        <label htmlFor="email">Nombre de usuario o correo electrónico *</label>
        <input type="email" id="email" name="email" required />
        <button type="submit" className="btn-submit">Restablecer Contraseña</button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
