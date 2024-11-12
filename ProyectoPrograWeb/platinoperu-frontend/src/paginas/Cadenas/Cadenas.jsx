import React from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './Cadenas.css';

const Cadenas = () => {
  const categorias = [
    { nombre: 'Para Él', icono: '/icons/para-el.png', link: '/para-el' },
    { nombre: 'Aro De Caballero', icono: '/icons/aro-de-caballero.png', link: '/aro-de-caballero' },
    { nombre: 'Cadenas', icono: '/icons/cadenas.png', link: '/cadenas' },
    { nombre: 'Pulseras De Caballero', icono: '/icons/pulseras-caballero.png', link: '/pulseras-de-caballero' },
  ];

  const productos = [
    { id: 1, nombre: 'Collar De Plata | Cartier Intermedio II (70cm)', precio: 250, imagen: '/product1.jpg' },
    { id: 2, nombre: 'Collar De Plata | Club Alianza Lima', precio: 220, imagen: '/product2.jpg' },
    { id: 3, nombre: 'Collar De Plata | Club Sporting Cristal', precio: 220, imagen: '/product3.jpg' },
    { id: 4, nombre: 'Collar De Plata | Cruz Maxi', precio: 300, imagen: '/product4.jpg' },
    { id: 5, nombre: 'Collar De Plata | Emir', precio: 380, imagen: '/product5.jpg' },
    { id: 6, nombre: 'Collar De Plata | Lomo Corvina Intermedio II (70cm)', precio: 250, imagen: '/product6.jpg' },
    { id: 7, nombre: 'Collar De Plata | Lomo Corvina Lite (60cm)', precio: 130, imagen: '/product7.jpg' },
    { id: 8, nombre: 'Dije De Plata | Amor De Cristo', precio: 180, imagen: '/product8.jpg' },
    { id: 9, nombre: 'Dije De Plata | Ancla', precio: 120, imagen: '/product9.jpg', descuento: 20 },
    { id: 10, nombre: 'Rosario De Plata | Prada (Caballero)', precio: 350, imagen: '/product10.jpg' },
  ];

  return (
    <div className="cadenas">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} Para Él {'>'} Cadenas</div>
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
            descuento={producto.descuento}
          />
        ))}
      </div>

      <div className="paginacion">
        <span>1</span>
        <span>2</span>
        <span>...</span>
        <span>3</span>
        <span>&gt;</span>
      </div>

      <PiePagina />
    </div>
  );
};

export default Cadenas;
