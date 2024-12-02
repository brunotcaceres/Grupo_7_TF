import React, { useState, useEffect } from 'react';
import './admin.css';

const JoyasCrud = () => {
  const [joyas, setJoyas] = useState([]);
  const [formData, setFormData] = useState({});
  const [editMode, setEditMode] = useState(false); 
  const [editId, setEditId] = useState(null); 

  useEffect(() => {
    fetchJoyas();
  }, []);

  const fetchJoyas = async () => {
    try {
      const response = await fetch('http://localhost:4000/admin/productos');
      const data = await response.json();
      setJoyas(data);
    } catch (error) {
      console.error('Error al obtener joyas:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editMode) {
        
        await fetch(`http://localhost:4000/admin/productos/${editId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        setEditMode(false);
        setEditId(null);
      } else {
        
        await fetch('http://localhost:4000/admin/productos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      }
      fetchJoyas(); 
      setFormData({}); 
    } catch (error) {
      console.error('Error al guardar la joya:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:4000/admin/productos/${id}`, {
        method: 'DELETE',
      });
      fetchJoyas();
    } catch (error) {
      console.error('Error al eliminar joya:', error);
    }
  };

  const handleEdit = (joya) => {
    setFormData({
      nombre: joya.nombre,
      tipo: joya.tipo,
      material: joya.material,
      precio: joya.precio,
    });
    setEditMode(true);
    setEditId(joya.id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>Gestión de Joyas</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre || ''}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="tipo"
          placeholder="Tipo (anillos, aros, accesorios)"
          value={formData.tipo || ''}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="material"
          placeholder="Material (Oro, Plata, Oro con Plata)"
          value={formData.material || ''}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="precio"
          placeholder="Precio"
          step="0.01"
          value={formData.precio || ''}
          onChange={handleInputChange}
          required
        />
        <button type="submit">{editMode ? 'Actualizar Joya' : 'Agregar Joya'}</button>
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
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Material</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {joyas.map((joya) => (
            <tr key={joya.id}>
              <td>{joya.id}</td>
              <td>{joya.nombre}</td>
              <td>{joya.tipo}</td>
              <td>{joya.material}</td>
              <td>${joya.precio}</td>
              <td>
                <button onClick={() => handleEdit(joya)}>Editar</button>
                <button onClick={() => handleDelete(joya.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JoyasCrud;
