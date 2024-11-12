import React, { useState } from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './Aretes.css';

const Aretes = () => {
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
    { id: 1, nombre: 'Aretes De Plata | Albi Amatista', precio: 70, imagen: '/product1.jpg' },
    { id: 2, nombre: 'Aretes De Plata | Albi Rosé', precio: 70, imagen: '/product2.jpg' },
    { id: 3, nombre: 'Aretes De Plata | Albueara', precio: 80, imagen: '/product3.jpg' },
    { id: 4, nombre: 'Aretes De Plata | Amatista Maxi', precio: 70, imagen: '/product4.jpg' },
    { id: 5, nombre: 'Aretes De Plata | Amatista Mini', precio: 50, imagen: '/product5.jpg' },
    { id: 6, nombre: 'Aretes De Plata | Amour Lavanda', precio: 90, imagen: '/product6.jpg' },
    { id: 7, nombre: 'Aretes De Plata | Black Maxi', precio: 70, imagen: '/product7.jpg' },
    { id: 8, nombre: 'Aretes De Plata | Black Mini', precio: 50, imagen: '/product8.jpg' },
    { id: 9, nombre: 'Aretes De Plata | Bolitas Maxi', precio: 70, imagen: '/product9.jpg' },
    { id: 10, nombre: 'Aretes De Plata | Bolitas Mini', precio: 50, imagen: '/product10.jpg' },
    { id: 11, nombre: 'Aretes De Plata | Bombita Corazón', precio: 65, imagen: '/product11.jpg' },
  ];

  return (
    <div className="aretes">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} Para Ella {'>'} Aretes</div>
      <h1 className="titulo">Aretes</h1>

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
        <span>5</span>
        <span>&gt;</span>
      </div>

      <PiePagina />
    </div>
  );
};

export default Aretes;
