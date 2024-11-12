import React from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './AroDeCaballero.css';

const AroDeCaballero = () => {
  const categorias = [
    { nombre: 'Para Él', icono: '/icons/para-el.png', link: '/para-el' },
    { nombre: 'Aro De Caballero', icono: '/icons/aro-de-caballero.png', link: '/aro-de-caballero' },
    { nombre: 'Cadenas', icono: '/icons/cadenas.png', link: '/cadenas' },
    { nombre: 'Pulseras De Caballero', icono: '/icons/pulseras-caballero.png', link: '/pulseras-de-caballero' },
  ];

  const productos = [
    { id: 1, nombre: 'Aro De Plata | Chess', precio: 250, imagen: '/product1.jpg' },
    { id: 2, nombre: 'Aro De Plata | Ónix', precio: 200, imagen: '/product2.jpg' },
    { id: 3, nombre: 'Aro De Plata | Ópalo Andino', precio: 250, imagen: '/product3.jpg' },
    { id: 4, nombre: 'Aro De Plata | Redhead', precio: 230, imagen: '/product4.jpg' },
    { id: 5, nombre: 'Aro De Plata | Spider', precio: 250, imagen: '/product5.jpg' },
  ];

  return (
    <div className="aro-de-caballero">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} Para Él {'>'} Aro De Caballero</div>
      <h1 className="titulo">Aro De Caballero</h1>

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

export default AroDeCaballero;
