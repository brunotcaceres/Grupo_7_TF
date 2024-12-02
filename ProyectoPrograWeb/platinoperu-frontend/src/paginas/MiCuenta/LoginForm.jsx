import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './MiCuenta.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    
    if (!username || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }
  
    console.log('Datos enviados:', { username, password });
  
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
  
      
      const contentType = response.headers.get('Content-Type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        if (response.ok) {
          console.log('Inicio de sesión exitoso:', data);
  
         
          localStorage.setItem('user', JSON.stringify(data.user));
  
          
          if (data.user.nombreUsuario === 'Admin' || data.user.email === 'Admin@Admin.Admin') {
            navigate('/admin');
          } else {
            
            navigate('/');
          }
        } else {
          setError(data.error || 'Error al iniciar sesión.');
        }
      } else {
        const text = await response.text();
        setError(`Respuesta inesperada del servidor: ${text}`);
      }
    } catch (error) {
      console.error('Error en la conexión con el servidor:', error);
      setError('No se pudo conectar con el servidor. Inténtalo más tarde.');
    }
  };

  return (
    <div className="mi-cuenta-container">
      <h2>Acceder</h2>
      <form className="mi-cuenta-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Nombre de usuario*</label>
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
