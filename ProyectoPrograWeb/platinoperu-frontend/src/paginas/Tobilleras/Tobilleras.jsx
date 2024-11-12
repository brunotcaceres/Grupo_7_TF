import React from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './Tobilleras.css';

const Tobilleras = () => {
  const categorias = [
    { nombre: 'Para Ella', icono: '/icons/para-ella.png', link: '/para-ella' },
    { nombre: 'Cadenas', icono: '/icons/cadenas.png', link: '/cadenas-ella' },
    { nombre: 'Collares', icono: '/icons/collares.png', link: '/collares' },
    { nombre: 'Juegos', icono: '/icons/juegos.png', link: '/juegos' },
    { nombre: 'Pulseras', icono: '/icons/pulseras.png', link: '/pulseras' },
    { nombre: 'Relicarios', icono: '/icons/relicarios.png', link: '/relicarios' },
    { nombre: 'Tobilleras', icono: '/icons/tobilleras.png', link: '/tobilleras' },
  ];

  const productos = [
    { id: 1, nombre: 'Tobillera De Plata | Vibrant', precio: 85, imagen: '/tobillera1.jpg' },
  ];

  return (
    <div className="tobilleras">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} Para Ella {'>'} Tobilleras</div>
      <h1 className="titulo">Tobilleras</h1>

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

      <PiePagina />
    </div>
  );
};

export default Tobilleras;
