import React from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './Relicarios.css';

const Relicarios = () => {
  const categorias = [
    { nombre: 'Para Ella', icono: '/icons/para-ella.png', link: '/para-ella' },
    { nombre: 'Aretes', icono: '/icons/aretes.png', link: '/aretes' },
    { nombre: 'Cadenas', icono: '/icons/cadenas.png', link: '/cadenas-ella' },
    { nombre: 'Collares', icono: '/icons/collares.png', link: '/collares' },
    { nombre: 'Juegos', icono: '/icons/juegos.png', link: '/juegos' },
    { nombre: 'Pulseras', icono: '/icons/pulseras.png', link: '/pulseras' },
    { nombre: 'Relicarios', icono: '/icons/relicarios.png', link: '/relicarios' },
    { nombre: 'Tobilleras', icono: '/icons/tobilleras.png', link: '/tobilleras' },
  ];

  const productos = [
    { id: 1, nombre: 'Relicario De Plata | Amaral', precio: 140, imagen: '/product1.jpg' },
    { id: 2, nombre: 'Relicario De Plata | Corazón', precio: 140, imagen: '/product2.jpg' },
    { id: 3, nombre: 'Relicario De Plata | Corazón Tallado', precio: 150, imagen: '/product3.jpg' },
    { id: 4, nombre: 'Relicario De Plata | Génesis', precio: 160, imagen: '/product4.jpg' },
    { id: 5, nombre: 'Relicario De Plata | Oval', precio: 140, imagen: '/product5.jpg' },
    { id: 6, nombre: 'Relicario De Plata | Praga', precio: 200, imagen: '/product6.jpg' },
    { id: 7, nombre: 'Relicario De Plata Con Baño De Oro 18K | Corazón', precio: 230, imagen: '/product7.jpg' },
  ];

  return (
    <div className="relicarios">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} Para Ella {'>'} Relicarios</div>
      <h1 className="titulo">Relicarios</h1>

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

export default Relicarios;
