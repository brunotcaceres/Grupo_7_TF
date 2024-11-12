import React from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './PulserasDeCaballero.css';

const PulserasDeCaballero = () => {
  const categorias = [
    { nombre: 'Para Él', icono: '/icons/para-el.png', link: '/para-el' },
    { nombre: 'Aro De Caballero', icono: '/icons/aro-de-caballero.png', link: '/aro-de-caballero' },
    { nombre: 'Cadenas', icono: '/icons/cadenas.png', link: '/cadenas' },
    { nombre: 'Pulseras De Caballero', icono: '/icons/pulseras-de-caballero.png', link: '/pulseras-de-caballero' },
  ];

  const productos = [
    { id: 1, nombre: 'Esclava De Plata | Naim', precio: 280, imagen: '/product1.jpg' },
    { id: 2, nombre: 'Pulsera De Oro 18K | Emir', precio: 4350, imagen: '/product2.jpg' },
    { id: 3, nombre: 'Pulsera De Plata | Lomo De Corvina', precio: 480, imagen: '/product3.jpg' },
  ];

  return (
    <div className="pulseras-de-caballero">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} Para Él {'>'} Pulseras De Caballero</div>
      <h1 className="titulo">Pulseras De Caballero</h1>

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

export default PulserasDeCaballero;
