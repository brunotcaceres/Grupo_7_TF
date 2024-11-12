import React from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './ArosDeMatrimonio.css';

const ArosDeMatrimonio = () => {
  const categorias = [
    { nombre: 'Plata 950', imagen: '/images/plata950.jpg', link: '/plataley950' },
    { nombre: 'Plata con Oro', imagen: '/images/plataOro.jpg', link: '/amoro18' },
    { nombre: 'Oro 18k', imagen: '/images/oro18k.jpg', link: '/AMoro18k' },
  ];

  const productos = [
    { id: 1, nombre: 'Anillo Solitario Plata', precio: 500, imagen: '/productos/anillo1.jpg' },
    { id: 2, nombre: 'Anillo Oro con Diamante', precio: 3000, imagen: '/productos/anillo2.jpg' },
    { id: 3, nombre: 'Anillo Moissanita', precio: 4500, imagen: '/productos/anillo3.jpg' },
  ];

  return (
    <div className="compromiso">
      <BarraNavegacion />
      <div className="hero">
        <h1>Aros de Compromiso</h1>
        <button onClick={() => window.location.href = "/aros-de-boda"} className="btn-ver-coleccion">Ver Colección</button>
      </div>

      <div className="categorias">
        {categorias.map((categoria, index) => (
          <CategoriaCard key={index} nombre={categoria.nombre} imagen={categoria.imagen} link={categoria.link} />
        ))}
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

      <div className="informacion">
        <div className="info-item">Recibir el anillo de compromiso es tener un proyecto con amor.</div>
        <div className="info-item">Piezas con Certificado de Garantía.</div>
        <div className="info-item">Visitanos en Lima y Miraflores</div>
        <div className="info-item">Te asesoramos para elegir la pieza ideal.</div>
      </div>

      <PiePagina />
    </div>
  );
};

export default ArosDeMatrimonio;
