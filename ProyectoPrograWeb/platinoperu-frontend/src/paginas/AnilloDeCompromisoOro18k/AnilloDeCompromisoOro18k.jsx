import React from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './AnilloDeCompromisoOro18k.css';

const AnilloDeCompromisoOro18k = () => {
  const productos = [
    { id: 1, nombre: 'Anillo Compromiso En Oro 18K | 9 Promesas', precio: 1300, imagen: '/product1.jpg' },
    { id: 2, nombre: 'Anillo Compromiso En Oro 18K | Adorei Rosé', precio: 1350, imagen: '/product2.jpg' },
    { id: 3, nombre: 'Anillo Compromiso En Oro 18K | Alizee', precio: 1400, imagen: '/product3.jpg' },
    { id: 4, nombre: 'Anillo Compromiso En Oro 18K | Aranza', precio: 1700, imagen: '/product4.jpg' },
    { id: 5, nombre: 'Anillo Compromiso En Oro 18K | Diamore', precio: 1600, imagen: '/product5.jpg' },
    { id: 6, nombre: 'Anillo Compromiso En Oro 18K | Dinnor', precio: 1600, imagen: '/product6.jpg' },
    { id: 7, nombre: 'Anillo Compromiso En Oro 18K | Dupont', precio: 1100, imagen: '/product7.jpg' },
    { id: 8, nombre: 'Anillo Compromiso En Oro 18K | Dupont Rosé', precio: 1200, imagen: '/product8.jpg' },
    { id: 9, nombre: 'Anillo Compromiso En Oro 18K | Elegance', precio: 1100, imagen: '/product9.jpg' },
    { id: 10, nombre: 'Anillo Compromiso En Oro 18K | Eternal Love Lavanda', precio: 1400, imagen: '/product10.jpg' },
    { id: 11, nombre: 'Anillo Compromiso En Oro 18K | Finesse', precio: 1200, imagen: '/product11.jpg' },
    { id: 12, nombre: 'Anillo Compromiso En Oro 18K | Fleur', precio: 1000, imagen: '/product12.jpg' },
  ];

  return (
    <div className="anillos-oro">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} Oro {'>'} Anillos De Compromiso Oro 18K</div>
      <h1 className="titulo">Anillo De Compromiso Oro 18k</h1>

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
        <span>4</span>
        <span>5</span>
        <span>&gt;</span>
      </div>

      <PiePagina />
    </div>
  );
};

export default AnilloDeCompromisoOro18k;
