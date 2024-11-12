import React from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './RosariosDePlata.css';

const RosariosDePlata = () => {
  const categorias = [
    { nombre: 'Regalos', icono: '/icons/regalos.png', link: '/regalos' },
    { nombre: 'Churumbela', icono: '/icons/churumbela.png', link: '/churumbela' },
    { nombre: 'Rosarios De Plata', icono: '/icons/rosarios.png', link: '/rosarios' },
  ];

  const productos = [
    { id: 1, nombre: 'Pulsera De Plata | Denario', precio: 95, imagen: '/product1.jpg' },
    { id: 2, nombre: 'Rosario De Plata | Génesis (Dama)', precio: 190, imagen: '/product2.jpg' },
    { id: 3, nombre: 'Rosario De Plata | Prada (Caballero)', precio: 350, imagen: '/product3.jpg' },
  ];

  return (
    <div className="rosarios-de-plata">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} Regalos {'>'} Rosarios De Plata</div>
      <h1 className="titulo">Rosarios De Plata</h1>

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

export default RosariosDePlata;
