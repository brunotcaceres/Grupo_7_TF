import React, { useState } from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import Breadcrumb from '../../componentes/Breadcrumb/Breadcrumb';
import './Tienda.css';

const handleWishlistClick = (producto) => {
  
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  
  const isInWishlist = wishlist.some((item) => item.id === producto.id);
  
  if (isInWishlist) {
    
    const updatedWishlist = wishlist.filter((item) => item.id !== producto.id);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    alert(`${producto.nombre} eliminado de la lista de deseos.`);
  } else {
    
    wishlist.push(producto);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert(`${producto.nombre} añadido a la lista de deseos.`);
  }
};

const Tienda = () => {
    const categorias = [
      { nombre: 'Matrimonio', icono: '/img/shop/A1-100x100.png', link: '/matrimonio' },
      { nombre: 'Novios', icono: '/img/shop/a14-100x100.png', link: '/novios' },
      { nombre: 'Para Él', icono: '/img/shop/a5-100x100.png', link: '/para-el' },
      { nombre: 'Para Ella', icono: '/img/shop/a6-100x100.png', link: '/para-ella' },
      { nombre: 'Piedras Preciosas', icono: '/img/shop/a13-100x100.png', link: '/piedras-preciosas' },
      { nombre: 'Regalos', icono: '/img/shop/a11-100x100.png', link: '/regalos' },
    ];
  
    const productos = [
      { id: 1, nombre: 'Alianzas De Plata | Ariz', precio: 300, imagen: '/img/shop/alianzas-parejas-plata-amor-infinito-lima-miraflores-platinoperu-600x600.jpg' },
      { id: 2, nombre: 'Alianzas De Plata | Aster', precio: 300, imagen: '/img/shop/alianzas-parejas-plata-aster-lima-miraflores-platinoperu-600x600.jpg' },
      { id: 3, nombre: 'Alianzas De Plata | Ayra', precio: 290, imagen: '/img/shop/alianzas-plata-parejas-ALEPH-lima-miraflores-platinoperu.jpg' },
      { id: 4, nombre: 'Alianzas De Plata | Brisa', precio: 290, imagen: '/img/shop/presentacion-platino-alianzas-platinoperu-final-600x600.jpg', descuento: '17%' },
      { id: 5, nombre: 'Alianzas De Plata | Barroco', precio: 650, imagen: '/img/shop/alianzas-plata-novios-amor-BLISS-lima-miraflores-platinoperu2-600x600.jpg' },
    ];
  
    return (
      <div>
        <BarraNavegacion />
        <Breadcrumb path="Tienda" />
        <h1 className="titulo">Shop</h1>
      <div className="tienda">
        
        
        
  
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
    <div key={producto.id} className="producto-card">
      
      <div className="producto-imagen">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>

      
      <button
        className="wishlist-btn"
        onClick={() => handleWishlistClick(producto)}
      >
        ❤️
      </button>

      
      <div className="producto-detalles">
        <h3>{producto.nombre}</h3>
        <p>Precio: ${producto.precio}</p>
      </div>
    </div>
  ))}
</div>

        <div className="paginacion">
          <span>1</span>
          <span>2</span>
          <span>...</span>
          <span>49</span>
          <span>&gt;</span>
        </div>
        
      </div>
      <PiePagina />
      </div>
    );
  };
  
  export default Tienda;