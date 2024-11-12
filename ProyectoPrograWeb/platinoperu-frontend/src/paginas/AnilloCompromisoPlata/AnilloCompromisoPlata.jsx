import React from 'react';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './AnilloCompromisoPlata.css';

const AnilloCompromisoPlata = () => {
  const productos = [
    { id: 1, nombre: 'Anillo Compromiso De Plata | 9 Promesas', precio: 280, imagen: '/images/9-promesas.jpg' },
    { id: 2, nombre: 'Anillo Compromiso De Plata | 9 Promesas Blue', precio: 350, imagen: '/images/9-promesas-blue.jpg' },
    { id: 3, nombre: 'Anillo Compromiso De Plata | Aranza', precio: 290, imagen: '/images/aranza.jpg' },
    { id: 4, nombre: 'Anillo Compromiso De Plata | Azalea', precio: 250, imagen: '/images/azalea.jpg' },
    { id: 5, nombre: 'Anillo Compromiso De Plata | Azalea Topacio Sky Blue', precio: 450, imagen: '/images/azalea-topacio.jpg' },
    { id: 6, nombre: 'Anillo Compromiso De Plata | Blue Magical', precio: 350, imagen: '/images/blue-magical.jpg' },
    { id: 7, nombre: 'Anillo Compromiso De Plata | Bliss', precio: 300, imagen: '/images/bliss.jpg' },
    { id: 8, nombre: 'Anillo Compromiso De Plata | Blue Royal', precio: 650, imagen: '/images/blue-royal.jpg' },
  ];

  return (
    <div className="anillo-compromiso-plata">
      <BarraNavegacion />
      <div className="breadcrumb">Inicio {'>'} Shop {'>'} Productos Etiquetados {'>'} Anillo De Compromiso Plata Ley 950</div>
      <h1 className="titulo">Anillo De Compromiso Plata Ley 950</h1>

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
        <span className="pagina-actual">1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>&gt;</span>
      </div>

      <PiePagina />
    </div>
  );
};

export default AnilloCompromisoPlata;
