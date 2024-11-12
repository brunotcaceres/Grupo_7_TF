import React from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './PiedrasPreciosas.css';

const PiedrasPreciosas = () => {
  const categorias = [
    { nombre: 'Shop', icono: '/icons/shop.png', link: '/tienda' },
    { nombre: 'Amatista', icono: '/icons/amatista.png', link: '/amatista' },
    { nombre: 'Rubí', icono: '/icons/rubi.png', link: '/rubi' },
    { nombre: 'Zafiro', icono: '/icons/zafiro.png', link: '/zafiro' },
  ];

  const productos = [
    { id: 1, nombre: 'Anillo Compromiso Oro 18K Amatista | London', precio: 2200, imagen: '/product1.jpg' },
    { id: 2, nombre: 'Anillo Compromiso Oro 18K Amatista | Rinaldi', precio: 1500, imagen: '/product2.jpg' },
    { id: 3, nombre: 'Anillo Compromiso Oro 18K Rubí | In Love', precio: 2900, imagen: '/product3.jpg' },
    { id: 4, nombre: 'Anillo Compromiso Oro 18K Rubí | Red Velvet', precio: 3500, imagen: '/product4.jpg' },
    { id: 5, nombre: 'Anillo Compromiso Oro 18K Rubí | Siury', precio: 3000, imagen: '/product5.jpg' },
    { id: 6, nombre: 'Anillo Promesa Oro 18K | Gante Amatista Natural', precio: 950, imagen: '/product6.jpg' },
    { id: 7, nombre: 'Anillo Promesa Oro 18K | Jaspia Amatista Natural', precio: 650, imagen: '/product7.jpg' },
    { id: 8, nombre: 'Zafiro Azul 3.6 Mm', precio: 750, imagen: '/product8.jpg' },
  ];

  return (
    <div className="piedrasPreciosas">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} Piedras Preciosas</div>
      <h1 className="titulo">Piedras Preciosas</h1>

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

export default PiedrasPreciosas;
