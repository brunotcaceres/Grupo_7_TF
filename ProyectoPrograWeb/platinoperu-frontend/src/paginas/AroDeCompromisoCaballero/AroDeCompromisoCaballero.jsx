import React, { useState } from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './AroDeCompromisoCaballero.css';

const AroDeCompromisoCaballero = () => {
  const categorias = [
    { nombre: 'Novios', icono: '/icons/novios.png', link: '/novios' },
    { nombre: 'Alianzas De Amor', icono: '/icons/alianzas-de-amor.png', link: '/alianzas-de-amor' },
    { nombre: 'Anillo De Compromiso', icono: '/icons/anillo-de-compromiso.png', link: '/anillo-de-compromiso' },
    { nombre: 'Anillo De Promesa', icono: '/icons/anillo-de-promesa.png', link: '/anillo-de-promesa' },
    { nombre: 'Aro De Compromiso Caballero', icono: '/icons/aro-compromiso-caballero.png', link: '/aro-compromiso-caballero' },
    { nombre: 'Collares De Parejas', icono: '/icons/collares-de-parejas.png', link: '/collares-de-parejas' },
  ];

  const productos = [
    { id: 1, nombre: 'Aro De Compromiso Oro Blanco | Levi', precio: 2800, imagen: '/product1.jpg' },
    { id: 2, nombre: 'Aro De Compromiso Plata | Aster', precio: 200, imagen: '/product2.jpg' },
    { id: 3, nombre: 'Aro De Compromiso Plata | Central', precio: 180, imagen: '/product3.jpg' },
    { id: 4, nombre: 'Aro De Compromiso Plata | Cinta', precio: 160, imagen: '/product4.jpg' },
    { id: 5, nombre: 'Aro De Compromiso Plata | Destiny', precio: 200, imagen: '/product5.jpg' },
    { id: 6, nombre: 'Aro De Compromiso Plata | Lineal', precio: 200, imagen: '/product6.jpg' },
    { id: 7, nombre: 'Aro De Compromiso Plata | Media Caña', precio: 160, imagen: '/product7.jpg' },
    { id: 8, nombre: 'Aro De Compromiso Plata | Scala', precio: 200, imagen: '/product8.jpg' },
    { id: 9, nombre: 'Aro De Compromiso Plata | Triada', precio: 250, imagen: '/product9.jpg' },
    { id: 10, nombre: 'Aro De Compromiso Plata | Zodiac', precio: 290, imagen: '/product10.jpg' },
  ];

  return (
    <div className="aro-compromiso-caballero">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} Novios {'>'} Aro De Compromiso Caballero</div>
      <h1 className="titulo">Aro De Compromiso Caballero</h1>

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
                <span>8</span>
                <span>&gt;</span>
            </div>

      <PiePagina />
    </div>
  );
};

export default AroDeCompromisoCaballero;
