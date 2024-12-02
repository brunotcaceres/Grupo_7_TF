import React from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './Regalos.css';

const Regalos = () => {
  const categorias = [
    { nombre: 'Shop', icono: '/icons/shop.png', link: '/tienda' },
    { nombre: 'Churumbela', icono: '/icons/churumbela.png', link: '/churumbela' },
    { nombre: 'Rosarios De Plata', icono: '/icons/rosarios-plata.png', link: '/rosarios' },
  ];

  const productos = [
    { id: 1, nombre: 'Churumbela De Oro 18K | Magical Mini', precio: 1350, imagen: '/product1.jpg' },
    { id: 2, nombre: 'Churumbela De Plata | Finite', precio: 450, imagen: '/product2.jpg' },
    { id: 3, nombre: 'Churumbela De Plata | Love You', precio: 550, imagen: '/product3.jpg' },
    { id: 4, nombre: 'Churumbela De Plata | Magical', precio: 400, imagen: '/product4.jpg' },
    
  ];

  return (
    <div className="regalos">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} Regalos</div>
      <h1 className="titulo">Regalos</h1>

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
        <span className="pagina-activa">1</span>
        <span>2</span>
        <span>&gt;</span>
      </div>

      <PiePagina />
    </div>
  );
};

export default Regalos;
