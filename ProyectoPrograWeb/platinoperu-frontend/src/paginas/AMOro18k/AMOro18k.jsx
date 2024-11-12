import React from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './AMOro18k.css';

const AMOro18k = () => {
  const productos = [
    { id: 1, nombre: 'Aros De Oro 18K | Aldana', precio: 2900, imagen: '/aros_aldana.jpg' },
    { id: 2, nombre: 'Aros De Oro 18K | Aleph', precio: 4200, imagen: '/aros_aleph.jpg' },
    { id: 3, nombre: 'Aros De Oro 18K | Always', precio: 4500, imagen: '/aros_always.jpg' },
    { id: 4, nombre: 'Aros De Oro 18K | Ariel', precio: 2800, imagen: '/aros_ariel.jpg' },
    { id: 5, nombre: 'Aros De Oro 18K | Aster', precio: 3500, imagen: '/aros_aster.jpg' },
    { id: 6, nombre: 'Aros De Oro 18K | Ayra', precio: 3650, imagen: '/aros_ayra.jpg' },
    { id: 7, nombre: 'Aros De Oro 18K | Barroco', precio: 3900, imagen: '/aros_barroco.jpg' },
    { id: 8, nombre: 'Aros De Oro 18K | Central', precio: 4200, imagen: '/aros_central.jpg' },
    { id: 9, nombre: 'Aros De Oro 18K | Cintas', precio: 2800, imagen: '/aros_cintas.jpg' },
    { id: 10, nombre: 'Aros De Oro 18K | Clásicos', precio: 3500, imagen: '/aros_clasicos.jpg' },
    { id: 11, nombre: 'Aros De Oro 18K | Clásicos II', precio: 2800, imagen: '/aros_clasicos2.jpg' },
    { id: 12, nombre: 'Aros De Oro 18K | Darcy', precio: 3700, imagen: '/aros_darcy.jpg' },
  ];

  return (
    <div className="am-oro-18k">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} AM - Oro 18k</div>
      <h1 className="titulo">AM - Oro 18k</h1>

      <div className="filtro-orden">
        <Filtro />
        <Ordenamiento />
      </div>

      <div className="productos">
        {productos.map((producto) => (
          <ProductoCard
            key={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            imagen={producto.imagen}
          />
        ))}
      </div>

      <div className="paginacion">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>&gt;</span>
      </div>

      <PiePagina />
    </div>
  );
};

export default AMOro18k;
