import React from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './AnilloCompromisoDiamanteMoissanita.css';

const AnilloCompromisoDiamanteMoissanita = () => {
  const productos = [
    { id: 1, nombre: 'Anillo De Plata Con Moissanita | Loveliness', precio: 1200, imagen: '/product1.jpg' },
    { id: 2, nombre: 'Anillo Oro 18K Con Moissanita | Cambridge', precio: 4000, imagen: '/product2.jpg' },
    { id: 3, nombre: 'Anillo Oro 18K Con Moissanita | Fleur', precio: 2000, imagen: '/product3.jpg' },
    { id: 4, nombre: 'Anillo Oro 18K Con Moissanita | Harmony', precio: 2400, imagen: '/product4.jpg' },
    { id: 5, nombre: 'Anillo Oro 18K Con Moissanita | Heaven Heart', precio: 2350, imagen: '/product5.jpg' },
    { id: 6, nombre: 'Anillo Oro 18K Con Moissanita | Trial', precio: 2500, imagen: '/product6.jpg' },
  ];

  return (
    <div className="anillo-diamante-moissanita">
      <BarraNavegacion />
      <div className="breadcrumb">
        Inicio {'>'} Shop {'>'} Anillo de Compromiso Diamante & Moissanita
      </div>
      <h1 className="titulo">Anillo De Compromiso Diamante & Moissanita</h1>

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
      </div>

      <PiePagina />
    </div>
  );
};

export default AnilloCompromisoDiamanteMoissanita;
