import React, { useState, useEffect } from 'react';
import './Cart.css';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import Breadcrumb from '../../componentes/Breadcrumb/Breadcrumb';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [shippingCost, setShippingCost] = useState(12); 
  const navigate = useNavigate();
  const handleCheckout = () => {
    
    navigate('/checkout');
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const handleQuantityChange = (id, change) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleRemoveFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.precio * item.quantity, 0);
  };

  const handleShippingChange = (cost) => {
    setShippingCost(cost);
  };

  const total = calculateSubtotal() + shippingCost;

  return (
    <div>
      <BarraNavegacion />
      <Breadcrumb path={"Inicio > Cart"} />
      <div className="cart-container">
        <div className="cart-header">
          <h2>Carrito</h2>
        </div>

        {cartItems.length > 0 ? (
          <div className="cart-content">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.imagen} alt={item.nombre} />
                  <div className="cart-item-details">
                    <h3>{item.nombre}</h3>
                    <p>{`Precio: S/${item.precio}`}</p>
                    <div className="cart-quantity">
                      <button onClick={() => handleQuantityChange(item.id, -1)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(item.id, +1)}>
                        +
                      </button>
                    </div>
                    <p>{`Subtotal: S/${item.precio * item.quantity}`}</p>
                    <button
                      className="remove-btn"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>Código de cupón</h3>
              <div className="summary-row">
                <p>Subtotal</p>
                <p>{`S/${calculateSubtotal()}`}</p>
              </div>
              <h3>Envío</h3>
              <div className="shipping-options">
                <label>
                  <input
                    type="radio"
                    name="shipping"
                    onChange={() => handleShippingChange(0)}
                  />
                  Recoge en tienda (Sin costo)
                </label>
                <label>
                  <input
                    type="radio"
                    name="shipping"
                    defaultChecked
                    onChange={() => handleShippingChange(12)}
                  />
                  Envío a domicilio (S/12)
                </label>
              </div>
              <div className="summary-row total-row">
                <p>Total</p>
                <p>{`S/${total}`}</p>
              </div>
              <button className="checkout-btn" onClick={handleCheckout}>Finalizar Compra</button>
            </div>
          </div>
        ) : (
          <div className="cart-empty">
            <img
              src="img/cart/shopping-cart-empty-side-view.png"
              alt="Carrito Vacío"
            />
            <p>Tu carrito está actualmente vacío.</p>
            <button onClick={() => (window.location.href = '/tienda')}>
              Volver a la tienda
            </button>
          </div>
        )}
      </div>
      <PiePagina />
    </div>
  );
};

export default Cart;
