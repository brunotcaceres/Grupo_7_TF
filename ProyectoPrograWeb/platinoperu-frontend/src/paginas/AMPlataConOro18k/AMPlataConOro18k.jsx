import React from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './AMPlataConOro18k.css';

const AMPlataConOro18k = () => {
  const productos = [
    { id: 1, nombre: 'Alianzas De Plata Y Oro | Cintas', precio: 1750, imagen: '/product1.jpg' },
    { id: 2, nombre: 'Alianzas De Plata Y Oro | Clásicos', precio: 1750, imagen: '/product2.jpg' },
    { id: 3, nombre: 'Alianzas De Plata Y Oro | Trial', precio: 1750, imagen: '/product3.jpg' },
  ];

  return (
    <div className="am-plata-con-oro">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} AM - Plata con Oro 18k</div>
      <h1 className="titulo">AM - Plata con Oro 18k</h1>

      <div className="filtro-orden">
        <Filtro />
        <Ordenamiento />
      </div>

      <div className="productos">
        {productos.map((producto) => (
          <ProductoCard
            key={producto.id}
            nombre={producto.nombre}
            precio={`S/${producto.precio}`}
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

export default AMPlataConOro18k;
