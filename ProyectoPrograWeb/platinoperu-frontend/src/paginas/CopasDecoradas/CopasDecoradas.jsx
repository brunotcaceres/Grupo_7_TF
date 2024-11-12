import React, { useState } from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './CopasDecoradas.css';

const CopasDecoradas = () => {
  const categorias = [
    { nombre: 'Matrimonio', icono: '/icons/matrimonio.png', link: '/matrimonio' },
    { nombre: 'Almohaditas', icono: '/icons/almohaditas.png', link: '/almohaditas' },
    { nombre: 'Aros De Boda', icono: '/icons/aros-de-boda.png', link: '/aros-de-boda' },
    { nombre: 'Copas Decoradas', icono: '/icons/copas-decoradas.png', link: '/copas-decoradas' },
  ];

  const productos = [
    { id: 1, nombre: 'Copas Decoradas | Cambridge', precio: 80, imagen: '/product1.jpg' },
    { id: 2, nombre: 'Copas Decoradas | Camell', precio: 80, imagen: '/product2.jpg' },
    { id: 3, nombre: 'Copas Decoradas | Ccori Terracota', precio: 80, imagen: '/product3.jpg' },
    { id: 4, nombre: 'Copas Decoradas | Dual', precio: 80, imagen: '/product4.jpg' },
    { id: 5, nombre: 'Copas Decoradas | Dutty', precio: 80, imagen: '/product5.jpg' },
    { id: 6, nombre: 'Copas Decoradas | Motion', precio: 60, imagen: '/product6.jpg' },
  ];

  return (
    <div className="copas-decoradas">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} Matrimonio {'>'} Copas Decoradas</div>
      <h1 className="titulo">Copas Decoradas</h1>

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

export default CopasDecoradas;
