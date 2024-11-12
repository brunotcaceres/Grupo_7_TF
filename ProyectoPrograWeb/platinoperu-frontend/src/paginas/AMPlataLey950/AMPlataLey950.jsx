import React from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './AMPlataLey950.css';

const AMPlataLey950 = () => {
  
  const productos = [
    { id: 1, nombre: 'Alianzas De Plata | Aleph', precio: 300, imagen: '/product1.jpg' },
    { id: 2, nombre: 'Alianzas De Plata | Amara', precio: 280, imagen: '/product2.jpg' },
    { id: 3, nombre: 'Alianzas De Plata | Ariz', precio: 300, imagen: '/product3.jpg' },
    { id: 4, nombre: 'Alianzas De Plata | Barroco', precio: 650, imagen: '/product4.jpg' },
    { id: 5, nombre: 'Alianzas De Plata | Blue Love', precio: 300, imagen: '/product5.jpg' },
    { id: 6, nombre: 'Alianzas De Plata | Brisa', precio: 290, imagen: '/product6.jpg' },
    { id: 7, nombre: 'Alianzas De Plata | Caliope', precio: 400, imagen: '/product7.jpg' },
    { id: 8, nombre: 'Alianzas De Plata | Celtas', precio: 390, imagen: '/product8.jpg' },
    { id: 9, nombre: 'Alianzas De Plata | Central', precio: 240, imagen: '/product9.jpg' },
    { id: 10, nombre: 'Alianzas De Plata | Cintas', precio: 200, imagen: '/product10.jpg' },
    { id: 11, nombre: 'Alianzas De Plata | Cintas II', precio: 240, imagen: '/product11.jpg' },
    { id: 12, nombre: 'Alianzas De Plata | Cintillo', precio: 270, imagen: '/product12.jpg' },
  ];

  return (
    <div className="am-plata-ley">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} AM - Plata Ley 950</div>
      <h1 className="titulo">AM - Plata Ley 950</h1>

      

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
        <span>&gt;</span>
      </div>

      <PiePagina />
    </div>
  );
};

export default AMPlataLey950;
