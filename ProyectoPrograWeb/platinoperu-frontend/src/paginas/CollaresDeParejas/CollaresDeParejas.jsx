import React from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './CollaresDeParejas.css';

const CollaresDeParejas = () => {
  const categorias = [
    { nombre: 'Novios', icono: '/icons/novios.png', link: '/novios' },
    { nombre: 'Alianzas De Amor', icono: '/icons/alianzas-de-amor.png', link: '/alianzas-de-amor' },
    { nombre: 'Anillo De Compromiso', icono: '/icons/anillo-de-compromiso.png', link: '/anillo-de-compromiso' },
    { nombre: 'Anillo De Promesa', icono: '/icons/anillo-de-promesa.png', link: '/anillo-de-promesa' },
    { nombre: 'Aro De Compromiso Caballero', icono: '/icons/aro-compromiso-caballero.png', link: '/aro-compromiso-caballero' },
    { nombre: 'Collares De Parejas', icono: '/icons/collares-de-parejas.png', link: '/collares-de-parejas' },
  ];

  const productos = [
    { id: 1, nombre: 'Collares De Plata | Blacky', precio: 350, imagen: '/product1.jpg' },
    { id: 2, nombre: 'Collares De Plata | In Love', precio: 280, imagen: '/product2.jpg' },
  ];

  return (
    <div className="collares-de-parejas">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} Novios {'>'} Collares De Parejas</div>
      <h1 className="titulo">Collares De Parejas</h1>

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
        <span>4</span>
        <span>&gt;</span>
      </div>

      <PiePagina />
    </div>
  );
};

export default CollaresDeParejas;
