import React from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './Churumbela.css';

const Churumbela = () => {
  const categorias = [
    { nombre: 'Regalos', icono: '/icons/regalos.png', link: '/regalos' },
    { nombre: 'Churumbela', icono: '/icons/churumbela.png', link: '/churumbela' },
    { nombre: 'Rosarios De Plata', icono: '/icons/rosarios.png', link: '/rosarios' },
  ];

  const productos = [
    { id: 1, nombre: 'Churumbela De Oro 18K | Magical Mini', precio: 1350, imagen: '/product1.jpg' },
    { id: 2, nombre: 'Churumbela De Plata | Finite', precio: 450, imagen: '/product2.jpg' },
    { id: 3, nombre: 'Churumbela De Plata | Love You', precio: 550, imagen: '/product3.jpg' },
    { id: 4, nombre: 'Churumbela De Plata | Magical', precio: 400, imagen: '/product4.jpg' },
    { id: 5, nombre: 'Churumbela De Plata | Magical Mini', precio: 350, imagen: '/product5.jpg' },
    { id: 6, nombre: 'Churumbela De Plata | Magical Mix', precio: 350, imagen: '/product6.jpg' },
    { id: 7, nombre: 'Churumbela De Plata | Magical Rosé', precio: 350, imagen: '/product7.jpg' },
    { id: 8, nombre: 'Churumbela De Plata | Peony', precio: 400, imagen: '/product8.jpg' },
    { id: 9, nombre: 'Churumbela De Plata | Venus', precio: 350, imagen: '/product9.jpg' },
    { id: 10, nombre: 'Churumbela Oro Amarillo | Aster', precio: 1500, imagen: '/product10.jpg' },
    { id: 11, nombre: 'Churumbela Oro Amarillo | Magical', precio: 1450, imagen: '/product11.jpg' },
  ];

  return (
    <div className="churumbela">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} Regalos {'>'} Churumbela</div>
      <h1 className="titulo">Churumbela</h1>

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
        <span>&gt;</span>
      </div>

      <PiePagina />
    </div>
  );
};

export default Churumbela;
