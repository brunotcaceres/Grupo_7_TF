import React, { useState, useEffect } from 'react';

const UsuariosCrud = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [formData, setFormData] = useState({});
  const [editMode, setEditMode] = useState(false); // Controla si estamos en modo edición
  const [editId, setEditId] = useState(null); // Guarda el ID del usuario que se está editando

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const response = await fetch('http://localhost:4000/admin/usuarios');
      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        // Si estamos en modo edición, hacemos un PUT
        await fetch(`http://localhost:4000/admin/usuarios/${editId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        setEditMode(false); // Salimos del modo edición
        setEditId(null);
      } else {
        // Si no estamos en modo edición, hacemos un POST
        await fetch('http://localhost:4000/admin/usuarios', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      }
      fetchUsuarios(); // Recarga los usuarios después de agregar/editar
      setFormData({}); // Resetea el formulario
    } catch (error) {
      console.error('Error al guardar usuario:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:4000/admin/usuarios/${id}`, {
        method: 'DELETE',
      });
      fetchUsuarios(); // Recarga los usuarios después de eliminar
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  };

  const handleEdit = (usuario) => {
    setFormData({
      nombreUsuario: usuario.nombreUsuario,
      email: usuario.email,
    });
    setEditMode(true);
    setEditId(usuario.id); // Guardamos el ID del usuario en edición
  };

  return (
    <div>
      <h2>Gestión de Usuarios</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombreUsuario"
          placeholder="Nombre de Usuario"
          value={formData.nombreUsuario || ''}
          onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email || ''}
          onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password || ''}
          onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
          required={!editMode} // Contraseña no requerida al editar
        />
        <button type="submit">{editMode ? 'Actualizar Usuario' : 'Agregar Usuario'}</button>
        {editMode && (
          <button
            type="button"
            onClick={() => {
              setEditMode(false);
              setFormData({});
              setEditId(null);
            }}
          >
            Cancelar
          </button>
        )}
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nombreUsuario}</td>
              <td>{usuario.email}</td>
              <td>
                <button onClick={() => handleEdit(usuario)}>Editar</button>
                <button onClick={() => handleDelete(usuario.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsuariosCrud;
