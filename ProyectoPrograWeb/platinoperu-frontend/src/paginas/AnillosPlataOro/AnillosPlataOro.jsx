import React from 'react';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './AnillosPlataOro.css';

const AnillosPlataOro = () => {
  const productos = [
    { id: 1, nombre: 'Anillo Compromiso De Plata Y Oro 18K | 9 Promesas', precio: 480, imagen: '/images/anillo1.jpg' },
    { id: 2, nombre: 'Anillo Compromiso De Plata Y Oro 18K | Bliss', precio: 490, imagen: '/images/anillo2.jpg' },
    { id: 3, nombre: 'Anillo Compromiso De Plata Y Oro 18K | Harmony', precio: 450, imagen: '/images/anillo3.jpg' },
    { id: 4, nombre: 'Anillo Compromiso De Plata Y Oro 18K | Infinito', precio: 490, imagen: '/images/anillo4.jpg' },
    { id: 5, nombre: 'Anillo Compromiso De Plata Y Oro 18K | Lotus', precio: 470, imagen: '/images/anillo5.jpg' },
    { id: 6, nombre: 'Anillo Compromiso De Plata Y Oro 18K | Loveliness', precio: 450, imagen: '/images/anillo6.jpg' },
    { id: 7, nombre: 'Anillo Compromiso De Plata Y Oro 18K | Magah', precio: 450, imagen: '/images/anillo7.jpg' },
    { id: 8, nombre: 'Anillo Compromiso De Plata Y Oro 18K | Moray', precio: 500, imagen: '/images/anillo8.jpg' },
    { id: 9, nombre: 'Anillo Compromiso De Plata Y Oro 18K | Romancing', precio: 450, imagen: '/images/anillo9.jpg' },
    { id: 10, nombre: 'Anillo Compromiso De Plata Y Oro 18K | Siury', precio: 500, imagen: '/images/anillo10.jpg' },
  ];

  return (
    <div className="anillos-plata-oro">
      <BarraNavegacion />
      <div className="breadcrumb">
        Inicio {'>'} Shop {'>'} Productos Etiquetados {'>'} Anillo de Compromiso Plata con Oro 18k
      </div>
      <h1 className="titulo">Anillo De Compromiso Plata Con Oro 18k</h1>

      <div className="filtro-orden">
        <Filtro />
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
        <span className="activo">1</span>
        <span>2</span>
      </div>

      <PiePagina />
    </div>
  );
};

export default AnillosPlataOro;
