import React, { useState, useEffect } from 'react';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './Wishlist.css';
import Breadcrumb from '../../componentes/Breadcrumb/Breadcrumb';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Cargar la wishlist desde localStorage al montar el componente
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlistItems(storedWishlist);

    // Cargar el carrito desde localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemoveFromWishlist = (id) => {
    // Eliminar el producto de la wishlist
    const updatedWishlist = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const handleAddToCart = (producto) => {
    // Verificar si el producto ya está en el carrito
    const isInCart = cartItems.some((item) => item.id === producto.id);

    if (!isInCart) {
      const updatedCart = [...cartItems, producto];
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      alert(`${producto.nombre} añadido al carrito.`);
    } else {
      alert(`${producto.nombre} ya está en el carrito.`);
    }
  };

  return (
    <div className="wishlist-container">
      <BarraNavegacion />
      <Breadcrumb />

      <h1 className="wishlist-title">Wishlist</h1>

      {wishlistItems.length > 0 ? (
        <div className="wishlist-content">
          {wishlistItems.map((item) => (
            <div key={item.id} className="wishlist-card">
              <img src={item.imagen} alt={item.nombre} />
              <h3>{item.nombre}</h3>
              <p>Precio: ${item.precio}</p>

              {/* Botón para eliminar de la wishlist */}
              <button
                className="remove-btn"
                onClick={() => handleRemoveFromWishlist(item.id)}
              >
                Eliminar
              </button>

              {/* Botón para añadir al carrito */}
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(item)}
              >
                Añadir al carrito
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="wishlist-empty">
          <div className="wishlist-icon">
            <img
              src="\img\cart\caja-abierta-con-dos-corazones.png"
              alt="Corazon"
            />
          </div>
          <p>Your Wishlist Is Currently Empty</p>
          <p>
            Click the <span className="heart-highlight">❤️</span> icons to add
            products
          </p>
          <button
            onClick={() => (window.location.href = '/tienda')}
            className="wishlist-btn"
          >
            Volver a la tienda
          </button>
        </div>
      )}

      <PiePagina />
    </div>
  );
};

export default Wishlist;
