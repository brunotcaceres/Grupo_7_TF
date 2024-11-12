import React, { useState } from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './CadenasElla.css';

const CadenasElla = () => {
  const categorias = [
    { nombre: 'Para Ella', icono: '/icons/para-ella.png', link: '/para-ella' },
    { nombre: 'Aretes', icono: '/icons/aretes.png', link: '/aretes' },
    { nombre: 'Aretes Niña', icono: '/icons/aretes-nina.png', link: '/aretes-nina' },
    { nombre: 'Cadenas', icono: '/icons/cadenas.png', link: '/cadenas-ella' },
    { nombre: 'Collares', icono: '/icons/collares.png', link: '/collares' },
    { nombre: 'Juegos', icono: '/icons/juegos.png', link: '/juegos' },
    { nombre: 'Pulseras', icono: '/icons/pulseras.png', link: '/pulseras' },
    { nombre: 'Relicarios', icono: '/icons/juegos.png', link: '/relicarios' },
    { nombre: 'Tobilleras', icono: '/icons/pulseras.png', link: '/tobilleras' },
];

  const productos = [
    { id: 1, nombre: 'Cadena De Plata | Brilliant', precio: 60, imagen: '/product1.jpg' },
    { id: 2, nombre: 'Cadena De Plata | Cartier', precio: 60, imagen: '/product2.jpg' },
    { id: 3, nombre: 'Cadena De Plata | Colita De Ratón', precio: 120, imagen: '/product3.jpg' },
    { id: 4, nombre: 'Cadena De Plata | Colita De Ratón Maxi', precio: 170, imagen: '/product4.jpg' },
    { id: 5, nombre: 'Cadena De Plata | Panzer', precio: 60, imagen: '/product5.jpg' },
    { id: 6, nombre: 'Cadena De Plata | Twist', precio: 60, imagen: '/product6.jpg' },
  ];

  return (
    <div className="cadenas-ella">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} Para Ella {'>'} Cadenas</div>
      <h1 className="titulo">Cadenas</h1>

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

      <PiePagina />
    </div>
  );
};

export default CadenasElla;
