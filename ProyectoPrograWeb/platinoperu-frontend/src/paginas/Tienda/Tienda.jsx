import React, { useState } from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './Tienda.css';

const Tienda = () => {
    const categorias = [
      { nombre: 'Matrimonio', icono: '/icons/matrimonio.png', link: '/matrimonio' },
      { nombre: 'Novios', icono: '/icons/novios.png', link: '/novios' },
      { nombre: 'Para Él', icono: '/icons/para-el.png', link: '/para-el' },
      { nombre: 'Para Ella', icono: '/icons/para-ella.png', link: '/para-ella' },
      { nombre: 'Piedras Preciosas', icono: '/icons/piedras.png', link: '/piedras-preciosas' },
      { nombre: 'Regalos', icono: '/icons/regalos.png', link: '/regalos' },
    ];
  
    const productos = [
      { id: 1, nombre: 'Alianzas De Plata | Ariz', precio: 300, imagen: '/product1.jpg' },
      { id: 2, nombre: 'Alianzas De Plata | Aster', precio: 300, imagen: '/product2.jpg' },
      { id: 3, nombre: 'Alianzas De Plata | Ayra', precio: 290, imagen: '/product3.jpg' },
      { id: 4, nombre: 'Alianzas De Plata | Brisa', precio: 290, imagen: '/product4.jpg', descuento: '17%' },
      { id: 5, nombre: 'Alianzas De Plata | Barroco', precio: 650, imagen: '/product5.jpg' },
    ];
  
    return (
      <div className="tienda">
        <BarraNavegacion />
        <div className="breadcrumb">Home {'>'} Shop</div>
        <h1 className="titulo">Shop</h1>
  
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
              descuento={producto.descuento} 
            />
          ))}
        </div>
  
        <div className="paginacion">
          <span>1</span>
          <span>2</span>
          <span>...</span>
          <span>49</span>
          <span>&gt;</span>
        </div>
        <PiePagina />
      </div>
    );
  };
  
  export default Tienda;