import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MiCuenta.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful, handle the login state (e.g., redirect to the dashboard)
        console.log('Login successful', data);
      } else {
        // Login failed, show error message
        setError(data.error);
      }
    } catch (error) {
      setError('Error en la conexión con el servidor.');
    }
  };

  return (
    <div className="mi-cuenta-container">
      <h2>Acceder</h2>
      <form className="mi-cuenta-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Nombre de usuario o correo electrónico *</label>
        <input 
          type="text" 
          id="username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required 
        />

        <label htmlFor="password">Contraseña *</label>
        <input 
          type="password" 
          id="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />

        {error && <p style={{ color: 'red' }}>{error}</p>}

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
