import React, { useState } from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './AnillosDeCompromiso.css';

const AnillosDeCompromiso = () => {
  const categorias = [
    { nombre: 'Novios', icono: '/icons/novios.png', link: '/novios' },
    { nombre: 'Alianzas De Amor', icono: '/icons/alianzas.png', link: '/alianzas-de-amor' },
    { nombre: 'Anillo De Compromiso', icono: '/icons/anillo-compromiso.png', link: '/anillo-de-compromiso' },
    { nombre: 'Anillo De Promesa', icono: '/icons/anillo-promesa.png', link: '/anillo-de-promesa' },
    { nombre: 'Aro De Compromiso Caballero', icono: '/icons/aro-caballero.png', link: '/aro-de-caballero' },
    { nombre: 'Collares De Parejas', icono: '/icons/collares-parejas.png', link: '/collares-de-parejas' },
  ];

  const productos = [
    { id: 1, nombre: 'Anillo Compromiso De Plata | 9 Promesas', precio: 280, imagen: '/product1.jpg' },
    { id: 2, nombre: 'Anillo Compromiso De Plata | 9 Promesas Blue', precio: 350, imagen: '/product2.jpg' },
    { id: 3, nombre: 'Anillo Compromiso De Plata | 9 Promesas Heart Blue', precio: 300, imagen: '/product3.jpg' },
    { id: 4, nombre: 'Anillo Compromiso De Plata | Aranza', precio: 290, imagen: '/product4.jpg' },
    { id: 5, nombre: 'Anillo Compromiso De Plata | Azalea', precio: 250, imagen: '/product5.jpg' },
    { id: 6, nombre: 'Anillo Compromiso De Plata | Blue Magical', precio: 350, imagen: '/product6.jpg' },
    { id: 7, nombre: 'Anillo Compromiso De Plata | Bliss', precio: 300, imagen: '/product7.jpg' },
    { id: 8, nombre: 'Anillo Compromiso De Plata | Blue Siury', precio: 300, imagen: '/product8.jpg' },
  ];

  return (
    <div className="anillo-compromiso">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} Novios {'>'} Anillo De Compromiso</div>
      <h1 className="titulo">Anillo De Compromiso</h1>

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

export default AnillosDeCompromiso;
