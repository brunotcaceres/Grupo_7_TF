import React from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './Zafiro.css';

const Zafiro = () => {
  const categorias = [
    { nombre: 'Piedras Preciosas', icono: '/icons/piedras.png', link: '/piedras-preciosas' },
    { nombre: 'Amatista', icono: '/icons/amatista.png', link: '/amatista' },
    { nombre: 'Rubí', icono: '/icons/rubi.png', link: '/rubi' },
    { nombre: 'Zafiro', icono: '/icons/zafiro.png', link: '/zafiro' },
  ];

  const productos = [
    { id: 1, nombre: 'Zafiro Azul 3.6 Mm', precio: 750, imagen: '/productZafiro.jpg' },
  ];

  return (
    <div className="zafiro">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} Piedras Preciosas {'>'} Zafiro</div>
      <h1 className="titulo">Zafiro</h1>

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

export default Zafiro;
