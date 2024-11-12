import React, { useState } from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './AlianzasDeAmor.css';

const AlianzasDeAmor = () => {
  const categorias = [
    { nombre: 'Novios', icono: '/icons/novios.png', link: '/novios' },
    { nombre: 'Alianzas De Amor', icono: '/icons/alianzas-de-amor.png', link: '/alianzas-de-amor' },
    { nombre: 'Anillo De Compromiso', icono: '/icons/anillo-compromiso.png', link: '/anillo-de-compromiso' },
    { nombre: 'Anillo De Promesa', icono: '/icons/anillo-promesa.png', link: '/anillo-de-promesa' },
    { nombre: 'Aro De Compromiso Caballero', icono: '/icons/aro-caballero.png', link: '/aro-caballero' },
    { nombre: 'Collares De Parejas', icono: '/icons/collares-parejas.png', link: '/collares-de-parejas' },
  ];

  const productos = [
    { id: 1, nombre: 'Alianzas De Plata | Aleph', precio: 300, imagen: '/product1.jpg' },
    { id: 2, nombre: 'Alianzas De Plata | Amara', precio: 280, imagen: '/product2.jpg' },
    { id: 3, nombre: 'Alianzas De Plata | Amor Infinito', precio: 290, imagen: '/product3.jpg' },
    { id: 4, nombre: 'Alianzas De Plata | Ariz', precio: 300, imagen: '/product4.jpg' },
    { id: 5, nombre: 'Alianzas De Plata | Aster', precio: 300, imagen: '/product5.jpg' },
    { id: 6, nombre: 'Alianzas De Plata | Ayra', precio: 290, imagen: '/product6.jpg' },
    { id: 7, nombre: 'Alianzas De Plata | Black Kings', precio: 380, imagen: '/product7.jpg' },
    { id: 8, nombre: 'Alianzas De Plata | Bliss', precio: 450, imagen: '/product8.jpg' },
    { id: 9, nombre: 'Alianzas De Plata | Blue Kings', precio: 380, imagen: '/product9.jpg' },
    { id: 10, nombre: 'Alianzas De Plata | Blue Love', precio: 300, imagen: '/product10.jpg' },
    { id: 11, nombre: 'Alianzas De Plata | Brisa', precio: 290, imagen: '/product11.jpg' },
    { id: 12, nombre: 'Alianzas De Plata | Caliope', precio: 400, imagen: '/product12.jpg' },
  ];

  return (
    <div className="alianzas-de-amor">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} Novios {'>'} Alianzas De Amor</div>
      <h1 className="titulo">Alianzas De Amor</h1>

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

export default AlianzasDeAmor;
