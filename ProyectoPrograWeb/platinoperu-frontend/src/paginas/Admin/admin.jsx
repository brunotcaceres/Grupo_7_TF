import React, { useState } from 'react';
import UsuariosCrud from './UsuariosCrud';
import JoyasCrud from './JoyasCrud';

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState(''); 

  const renderSection = () => {
    if (activeSection === 'usuarios') {
      return <UsuariosCrud />;
    }
    if (activeSection === 'joyas') {
      return <JoyasCrud />;
    }
    return (
      <div>
        <h2>Bienvenido al Panel de Administración</h2>
        <p>Selecciona una sección para comenzar:</p>
      </div>
    );
  };

  return (
    <div>
      <h1>Panel de Administración</h1>
      <div>
        <button onClick={() => setActiveSection('usuarios')}>Gestión de Usuarios</button>
        <button onClick={() => setActiveSection('joyas')}>Gestión de Joyas</button>
      </div>
      <hr />
      {renderSection()}
    </div>
  );
};

export default AdminPanel;
