import React, { useState } from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './Collares.css';

const Collares = () => {
  const categorias = [
    { nombre: 'Para Ella', icono: '/icons/para-ella.png', link: '/para-ella' },
    { nombre: 'Collares Con Piedras Naturales', icono: '/icons/piedras-naturales.png', link: '/collares-piedras-naturales' },
    { nombre: 'Collares Para Dama', icono: '/icons/collares-dama.png', link: '/collares-dama' },
    { nombre: 'Collares Personalizados', icono: '/icons/personalizados.png', link: '/collares-personalizados' },
    { nombre: 'Collares Religiosos', icono: '/icons/religiosos.png', link: '/collares-religiosos' },
  ];

  const productos = [
    { id: 1, nombre: 'Collar De Plata | Amatista Natural Maxi', precio: 220, imagen: '/collar1.jpg' },
    { id: 2, nombre: 'Collar De Plata | Amazonita', precio: 120, imagen: '/collar2.jpg' },
    { id: 3, nombre: 'Collar De Plata | Amazonita Natural Maxi', precio: 220, imagen: '/collar3.jpg' },
    { id: 4, nombre: 'Collar De Plata | Corazón De Jesús (Mini)', precio: 80, imagen: '/collar4.jpg' },
    { id: 5, nombre: 'Collar De Plata | Corazón De Obstetra', precio: 180, imagen: '/collar5.jpg' },
    { id: 6, nombre: 'Collar De Plata | Corazón Minimalista', precio: 100, imagen: '/collar6.jpg' },
    { id: 7, nombre: 'Collar De Plata | Cristal Blue', precio: 100, imagen: '/collar7.jpg' },
    { id: 8, nombre: 'Collar De Plata | Cristal Love Heart', precio: 100, imagen: '/collar8.jpg' },
    { id: 9, nombre: 'Collar De Plata | Cristal Murano Verde', precio: 180, imagen: '/collar9.jpg' },
    { id: 10, nombre: 'Collar De Plata | Cristal Murano Verde Agua', precio: 190, imagen: '/collar10.jpg' },
  ];

  return (
    <div className="collares">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} Para Ella {'>'} Collares</div>
      <h1 className="titulo">Collares</h1>

      <div className="categorias">
        {categorias.map((categoria, index) => (
          <CategoriaCard key={index} nombre={categoria.nombre} icono={categoria.icono} link={categoria.link} />
        ))}
      </div>

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
        <span>...</span>
        <span>7</span>
        <span>&gt;</span>
      </div>

      <PiePagina />
    </div>
  );
};

export default Collares;
