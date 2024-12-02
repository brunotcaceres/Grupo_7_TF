import React from 'react';





const AccountDashboard = () => {
  return (
    <>
      
      
      <div className="account-details">
      <h2>Detalles De La Cuenta</h2>
      <form className="form-account-details">
        <label htmlFor="nombre">Nombre *</label>
        <input type="text" id="nombre" name="nombre" required />

        <label htmlFor="apellidos">Apellidos *</label>
        <input type="text" id="apellidos" name="apellidos" required />

        <label htmlFor="nombre-visible">Nombre visible *</label>
        <input type="text" id="nombre-visible" name="nombre-visible" defaultValue="xecil" required />

        <label htmlFor="email">Dirección de correo electrónico *</label>
        <input type="email" id="email" name="email" defaultValue="xesi53189@cantozil.com" required />

        <h3>Cambio De Contraseña</h3>
        <label htmlFor="current-password">Contraseña actual (déjalo en blanco para no cambiarla)</label>
        <input type="password" id="current-password" name="current-password" />

        <label htmlFor="new-password">Nueva contraseña (déjalo en blanco para no cambiarla)</label>
        <input type="password" id="new-password" name="new-password" />

        <label htmlFor="confirm-new-password">Confirmar nueva contraseña (déjalo en blanco para no cambiarla)</label>
        <input type="password" id="confirm-new-password" name="confirm-new-password" />

        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
      
    </>
  );
};

export default AccountDashboard;
