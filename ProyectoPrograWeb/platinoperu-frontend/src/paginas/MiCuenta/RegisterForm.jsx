import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MiCuenta.css';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
        setError('Por favor, llena todos los campos.');
        return;
    }

    try {
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombreUsuario: username,
                password: password
            }),
        });

        const data = await response.json();

        if (response.ok) {
            
            localStorage.setItem('user', JSON.stringify(data));
            setError(''); 
        } else {
            setError(data.error || 'Hubo un error al iniciar sesión.');
        }
    } catch (error) {
        setError('Error al conectar con el servidor.');
    }
};


  return (
    <div className="mi-cuenta-container">
      <h2>Crear una cuenta</h2>
      {error && <p className="error">{error}</p>}
      <form className="mi-cuenta-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Correo electrónico *</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="username">Nombre de usuario *</label>
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

        <button type="submit" className="btn-acceso">Registrarse</button>
      </form>

      <div className="login-link">
        ¿Ya tienes una cuenta? <a href="/mi-cuenta">Acceder</a>
      </div>
    </div>
  );
};

export default RegisterForm;
