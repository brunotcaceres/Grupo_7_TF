import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AccountDashboard = () => {
  const [userData, setUserData] = useState({
    id: '',
    email: '',
    nombreUsuario: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    
    const storedUser = JSON.parse(localStorage.getItem('user')) || {};
    setUserData({
      id: storedUser.id || '',
      email: storedUser.email || '',
      nombreUsuario: storedUser.nombreUsuario || '',
      password: storedUser.password || '',
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/update-profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setMessage('Perfil actualizado con éxito');
        localStorage.setItem('user', JSON.stringify(updatedUser.user));
      } else {
        const error = await response.json();
        setMessage(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error('Error al actualizar el perfil:', error);
      setMessage('Error al conectar con el servidor');
    }
  };

  const handleLogout = () => {
    
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
   
    navigate('/mi-cuenta');
  };

  return (
    <div className="account-details">
      <h2>Detalles De La Cuenta</h2>
      {message && <p>{message}</p>}
      <form className="form-account-details" onSubmit={handleSubmit}>
        <label htmlFor="nombre-visible">Nombre visible *</label>
        <input
          type="text"
          id="nombre-visible"
          name="nombreUsuario"
          value={userData.nombreUsuario}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Dirección de correo electrónico *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />

        <h3>Cambio De Contraseña</h3>
        <label htmlFor="current-password">Contraseña actual *</label>
        <input
          type="password"
          id="current-password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="new-password">Nueva contraseña (déjalo en blanco para no cambiarla)</label>
        <input type="password" id="new-password" name="newPassword" onChange={handleChange} />

        <label htmlFor="confirm-new-password">Confirmar nueva contraseña (déjalo en blanco para no cambiarla)</label>
        <input type="password" id="confirm-new-password" name="confirmNewPassword" onChange={handleChange} />

        <button type="submit">Guardar Cambios</button>
      </form>
      
      <button onClick={handleLogout} className="logout-button">
        Cerrar Sesión
      </button>
    </div>
  );
};

export default AccountDashboard;
