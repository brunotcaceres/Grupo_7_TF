import React from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './AretesNina.css';

const AretesNina = () => {
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
    { id: 1, nombre: 'Aretes Abridores Oro 18K | 5 Pétalos', precio: 350, imagen: '/product1.jpg' },
    { id: 2, nombre: 'Aretes Abridores Oro 18K | 5 Pétalos Rojo', precio: 350, imagen: '/product2.jpg' },
    { id: 3, nombre: 'Aretes Abridores Oro 18K | Botoncito Rojo', precio: 300, imagen: '/product3.jpg' },
    { id: 4, nombre: 'Aretes Abridores Oro 18K | Botoncito Rosé', precio: 300, imagen: '/product4.jpg' },
    { id: 5, nombre: 'Aretes Abridores Oro 18K | Corazoncito', precio: 300, imagen: '/product5.jpg' },
    { id: 6, nombre: 'Aretes Abridores Oro 18K | Corazoncito Rubí', precio: 300, imagen: '/product6.jpg' },
    { id: 7, nombre: 'Aretes Abridores Oro 18K | Estrellas', precio: 300, imagen: '/product7.jpg' },
    { id: 8, nombre: 'Aretes Abridores Oro 18K | Flor Escarlata', precio: 300, imagen: '/product8.jpg' },
    { id: 9, nombre: 'Aretes Abridores Oro 18K | Light', precio: 300, imagen: '/product9.jpg' },
    { id: 10, nombre: 'Aretes Abridores Oro 18K | Light Rosé', precio: 300, imagen: '/product10.jpg' },
    { id: 11, nombre: 'Aretes Abridores Oro 18K | Multicolor', precio: 300, imagen: '/product11.jpg' },
  ];

  return (
    <div className="aretes-nina">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} Para Ella {'>'} Aretes Niña</div>
      <h1 className="titulo">Aretes Niña</h1>

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

export default AretesNina;
