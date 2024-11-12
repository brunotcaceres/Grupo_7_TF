import React, { useState } from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './Juegos.css';

const Juegos = () => {
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
    { id: 1, nombre: 'Juego De Plata | Bunny', precio: 220, imagen: '/product1.jpg' },
    { id: 2, nombre: 'Juego De Plata | London Blanc', precio: 170, imagen: '/product2.jpg' },
    { id: 3, nombre: 'Juego De Plata | London Blue', precio: 170, imagen: '/product3.jpg' },
    { id: 4, nombre: 'Juego De Plata | Lyon', precio: 200, imagen: '/product4.jpg' },
    { id: 5, nombre: 'Juego De Plata | Margaritas', precio: 150, imagen: '/product5.jpg' },
    { id: 6, nombre: 'Juego De Plata | Twice', precio: 250, imagen: '/product6.jpg' },
    { id: 7, nombre: 'Juego En Plata | Jazmin', precio: 500, imagen: '/product7.jpg' },
  ];

  return (
    <div className="juegos">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} Para Ella {'>'} Juegos</div>
      <h1 className="titulo">Juegos</h1>

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

export default Juegos;
