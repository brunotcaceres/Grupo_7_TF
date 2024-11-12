import React from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './Rubi.css';

const Rubi = () => {
  const categorias = [
    { nombre: 'Piedras Preciosas', icono: '/icons/piedras.png', link: '/piedras-preciosas' },
    { nombre: 'Amatista', icono: '/icons/amatista.png', link: '/amatista' },
    { nombre: 'Rubí', icono: '/icons/rubi.png', link: '/rubi' },
    { nombre: 'Zafiro', icono: '/icons/zafiro.png', link: '/zafiro' },
  ];

  const productos = [
    { id: 1, nombre: 'Anillo Compromiso En Oro 18K Con Rubí | In Love', precio: 2900, imagen: '/product1.jpg' },
    { id: 2, nombre: 'Anillo Compromiso En Oro 18K Con Rubí | Red Velvet', precio: 3500, imagen: '/product2.jpg' },
    { id: 3, nombre: 'Anillo Compromiso En Oro 18K Con Rubí | Siury Rubí', precio: 3000, imagen: '/product3.jpg' },
  ];

  return (
    <div className="rubi">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} Piedras Preciosas {'>'} Rubí</div>
      <h1 className="titulo">Rubí</h1>

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

export default Rubi;
