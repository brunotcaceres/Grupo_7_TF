import React, { useState } from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './CollaresParaDama.css';

const CollaresParaDama = () => {
  const categorias = [
    { nombre: 'Collares', icono: '/icons/collares.png', link: '/collares' },
    { nombre: 'Collares Con Piedras Naturales', icono: '/icons/collares-piedras.png', link: '/collares-piedras-naturales' },
    { nombre: 'Collares Para Dama', icono: '/icons/collares-dama.png', link: '/collares-para-dama' },
    { nombre: 'Collares Personalizados', icono: '/icons/collares-personalizados.png', link: '/collares-personalizados' },
    { nombre: 'Collares Religiosos', icono: '/icons/collares-religiosos.png', link: '/collares-religiosos' },
  ];

  const productos = [
    { id: 1, nombre: 'Collar De Plata | Amatista Natural Maxi', precio: 220, imagen: '/product1.jpg' },
    { id: 2, nombre: 'Collar De Plata | Amazonita', precio: 120, descuento: 170, imagen: '/product2.jpg' },
    { id: 3, nombre: 'Collar De Plata | Amazonita Natural Maxi', precio: 220, imagen: '/product3.jpg' },
    { id: 4, nombre: 'Collar De Plata | Cristal Blue', precio: 100, imagen: '/product4.jpg' },
    { id: 5, nombre: 'Collar De Plata | Corazón Minimalista', precio: 100, imagen: '/product5.jpg' },
    { id: 6, nombre: 'Collar De Plata | Cristal Love Heart', precio: 100, imagen: '/product6.jpg' },
    { id: 7, nombre: 'Collar De Plata | Cristal Murano Verde', precio: 180, imagen: '/product7.jpg' },
    { id: 8, nombre: 'Collar De Plata | Cristal Rosé', precio: 100, imagen: '/product8.jpg' },
    { id: 9, nombre: 'Collar De Plata | Corazón De Obstetra', precio: 180, imagen: '/product9.jpg' },
    { id: 10, nombre: 'Collar De Plata | Cristal Light Blue', precio: 100, imagen: '/product10.jpg' },
    { id: 11, nombre: 'Collar De Plata | Cristal Lila', precio: 100, imagen: '/product11.jpg' },
  ];

  return (
    <div className="collares-para-dama">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} Para Ella {'>'} Collares Para Dama</div>
      <h1 className="titulo">Collares Para Dama</h1>

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
            descuento={producto.descuento}
            imagen={producto.imagen}
          />
        ))}
      </div>
      
      <div className="paginacion">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>&gt;</span>
      </div>

      <PiePagina />
    </div>
  );
};

export default CollaresParaDama;
