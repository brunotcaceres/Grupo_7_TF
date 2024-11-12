import React from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './Pulseras.css';

const Pulseras = () => {
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
    { id: 1, nombre: 'Juego De Plata | Twice', precio: 250, imagen: '/product1.jpg' },
    { id: 2, nombre: 'Juego En Plata | Jazmin', precio: 500, imagen: '/product2.jpg' },
    { id: 3, nombre: 'Pulsera De Plata | Amor Infinito', precio: 95, imagen: '/product3.jpg' },
    { id: 4, nombre: 'Pulsera De Plata | Árbol De La Vida', precio: 90, imagen: '/product4.jpg' },
    { id: 5, nombre: 'Pulsera De Plata | Begin', precio: 90, imagen: '/product5.jpg' },
    { id: 6, nombre: 'Pulsera De Plata | Blossom', precio: 90, imagen: '/product6.jpg' },
    { id: 7, nombre: 'Pulsera De Plata | Brussels', precio: 220, imagen: '/product7.jpg' },
    { id: 8, nombre: 'Pulsera De Plata | Butterfly', precio: 90, imagen: '/product8.jpg' },
    { id: 9, nombre: 'Pulsera De Plata | Cassiopeia', precio: 85, imagen: '/product9.jpg' },
    { id: 10, nombre: 'Pulsera De Plata | Coquette', precio: 85, imagen: '/product10.jpg' },
    { id: 11, nombre: 'Pulsera De Plata | Corazón Mío', precio: 95, imagen: '/product11.jpg' },
    { id: 12, nombre: 'Pulsera De Plata | Crusoe', precio: 90, imagen: '/product12.jpg' },
  ];

  return (
    <div className="pulseras">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} Para Ella {'>'} Pulseras</div>
      <h1 className="titulo">Pulseras</h1>

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
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>&gt;</span>
      </div>

      <PiePagina />
    </div>
  );
};

export default Pulseras;
