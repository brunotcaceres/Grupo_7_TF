import React, { useState } from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './CollaresPersonalizados.css';

const CollaresPersonalizados = () => {
  const categorias = [
    { nombre: 'Collares', icono: '/icons/collares.png', link: '/collares' },
    { nombre: 'Collares Con Piedras Naturales', icono: '/icons/collares-piedras.png', link: '/collares-piedras-naturales' },
    { nombre: 'Collares Para Dama', icono: '/icons/collares-dama.png', link: '/collares-para-dama' },
    { nombre: 'Collares Personalizados', icono: '/icons/collares-personalizados.png', link: '/collares-personalizados' },
    { nombre: 'Collares Religiosos', icono: '/icons/collares-religiosos.png', link: '/collares-religiosos' },
  ];

  const productos = [
    { id: 1, nombre: 'Collar Personalizado En Oro 18K | Lilium', precio: 1800, imagen: '/product1.jpg' },
    { id: 2, nombre: 'Collar Personalizado En Plata + Baño De Oro I', precio: 220, imagen: '/product2.jpg' },
    { id: 3, nombre: 'Collar Personalizado En Plata + Baño De Oro II', precio: 220, imagen: '/product3.jpg' },
    { id: 4, nombre: 'Collar Personalizado En Plata + Baño De Oro III', precio: 220, imagen: '/product4.jpg' },
    { id: 5, nombre: 'Collar Personalizado En Plata + Baño De Oro IV', precio: 220, imagen: '/product5.jpg' },
    { id: 6, nombre: 'Collar Personalizado En Plata | Inicial', precio: 140, imagen: '/product6.jpg' },
    { id: 7, nombre: 'Collar Personalizado En Plata | Tulipán', precio: 140, imagen: '/product7.jpg' },
    { id: 8, nombre: 'Collar Personalizado En Plata I', precio: 140, imagen: '/product8.jpg' },
    { id: 9, nombre: 'Collar Personalizado En Plata II', precio: 140, imagen: '/product9.jpg' },
  ];

  return (
    <div className="collares-personalizados">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} Para Ella {'>'} Collares Personalizados</div>
      <h1 className="titulo">Collares Personalizados</h1>

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

      <PiePagina />
    </div>
  );
};

export default CollaresPersonalizados;
