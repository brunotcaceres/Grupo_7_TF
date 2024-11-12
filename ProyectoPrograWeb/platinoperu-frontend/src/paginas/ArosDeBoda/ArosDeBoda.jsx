import React from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './ArosDeBoda.css';

const ArosDeBoda = () => {
  const categorias = [
    { nombre: 'Matrimonio', icono: '/icons/matrimonio.png', link: '/matrimonio' },
    { nombre: 'Almohaditas', icono: '/icons/almohaditas.png', link: '/almohaditas' },
    { nombre: 'Aros De Boda', icono: '/icons/aros-de-boda.png', link: '/aros-de-boda' },
    { nombre: 'Copas Decoradas', icono: '/icons/copas.png', link: '/copas-decoradas' },
  ];

  const productos = [
    { id: 1, nombre: 'Alianzas De Plata | Aleph', precio: 300, imagen: '/product1.jpg' },
    { id: 2, nombre: 'Alianzas De Plata | Amara', precio: 280, imagen: '/product2.jpg' },
    { id: 3, nombre: 'Alianzas De Plata | Ariz', precio: 300, imagen: '/product3.jpg' },
    { id: 4, nombre: 'Alianzas De Plata | Aster', precio: 300, imagen: '/product4.jpg' },
    { id: 5, nombre: 'Alianzas De Plata | Ayra', precio: 290, imagen: '/product5.jpg' },
  ];

  return (
    <div className="aros-de-boda">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} Matrimonio {'>'} Aros De Boda</div>
      <h1 className="titulo">Aros De Boda</h1>

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
        <span>...</span>
        <span>8</span>
        <span>&gt;</span>
      </div>
      
      <PiePagina />
    </div>
  );
};

export default ArosDeBoda;
