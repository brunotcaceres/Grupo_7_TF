import React, { useState } from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './ParaEl.css';

const ParaEl = () => {
  const categorias = [
    { nombre: 'Shop', icono: '/icons/shop.png', link: '/tienda' },
    { nombre: 'Aro De Caballero', icono: '/icons/aro-caballero.png', link: '/aro-de-caballero' },
    { nombre: 'Cadenas', icono: '/icons/cadenas.png', link: '/cadenas' },
    { nombre: 'Pulseras De Caballero', icono: '/icons/pulseras-caballero.png', link: '/pulseras-caballero' },
  ];

  const productos = [
    { id: 1, nombre: 'Aro De Plata | Chess', precio: 250, imagen: '/product1.jpg' },
    { id: 2, nombre: 'Aro De Plata | Ónix', precio: 200, imagen: '/product2.jpg' },
    { id: 3, nombre: 'Aro De Plata | Ópalo Andino', precio: 250, imagen: '/product3.jpg' },
    { id: 4, nombre: 'Aro De Plata | Redhead', precio: 230, imagen: '/product4.jpg' },
    { id: 5, nombre: 'Aro De Plata | Spider', precio: 250, imagen: '/product5.jpg' },
    { id: 6, nombre: 'Collar De Plata | Cartier Intermedio II', precio: 250, imagen: '/product6.jpg' },
    { id: 7, nombre: 'Collar De Plata | Club Alianza Lima', precio: 220, imagen: '/product7.jpg' },
    { id: 8, nombre: 'Collar De Plata | Club Sporting Cristal', precio: 220, imagen: '/product8.jpg' },
    { id: 9, nombre: 'Collar De Plata | Cruz Maxi', precio: 300, imagen: '/product9.jpg' },
    { id: 10, nombre: 'Collar De Plata | Emir', precio: 380, imagen: '/product10.jpg' },
    { id: 11, nombre: 'Collar De Plata | Lomo Corvina Intermedio II', precio: 250, imagen: '/product11.jpg' },
    { id: 12, nombre: 'Collar De Plata | Lomo Corvina Lite', precio: 130, imagen: '/product12.jpg' },
  ];

  return (
    <div className="para-el">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} Para Él</div>
      <h1 className="titulo">Para Él</h1>

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
      </div>

      <PiePagina />
    </div>
  );
};

export default ParaEl;
