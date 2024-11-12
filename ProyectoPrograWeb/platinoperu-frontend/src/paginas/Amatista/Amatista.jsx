import React from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './Amatista.css';

const Amatista = () => {
  const categorias = [
    { nombre: 'Piedras Preciosas', icono: '/icons/piedras-preciosas.png', link: '/piedras-preciosas' },
    { nombre: 'Amatista', icono: '/icons/amatista.png', link: '/amatista' },
    { nombre: 'Rubí', icono: '/icons/rubi.png', link: '/rubi' },
    { nombre: 'Zafiro', icono: '/icons/zafiro.png', link: '/zafiro' },
  ];

  const productos = [
    { id: 1, nombre: 'Anillo Compromiso En Oro 18K Con Amatista | Amatista London', precio: 2200, imagen: '/product1.jpg' },
    { id: 2, nombre: 'Anillo Compromiso En Oro 18K Con Amatista | Rinaldi', precio: 1500, imagen: '/product2.jpg' },
    { id: 3, nombre: 'Anillo De Promesa Oro 18K | Gante Amatista Natural', precio: 950, imagen: '/product3.jpg' },
    { id: 4, nombre: 'Anillo De Promesa Oro 18K | Jaspia Amatista Natural', precio: 650, imagen: '/product4.jpg' },
  ];

  return (
    <div className="amatista">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} Piedras Preciosas {'>'} Amatista</div>
      <h1 className="titulo">Amatista</h1>

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
      </div>

      <PiePagina />
    </div>
  );
};

export default Amatista;
