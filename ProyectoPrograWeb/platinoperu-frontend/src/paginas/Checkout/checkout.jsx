import React, { useState, useEffect } from 'react';
import './checkout.css';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import Breadcrumb from '../../componentes/Breadcrumb/Breadcrumb';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [shippingCost, setShippingCost] = useState(12); 
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);

    
    const calculatedSubtotal = storedCart.reduce(
      (acc, item) => acc + item.precio * item.quantity,
      0
    );
    setSubtotal(calculatedSubtotal);

   
    setTotal(calculatedSubtotal + shippingCost);
  }, [shippingCost]); 

  const handleOrderClick = () => {
    
    const form = document.querySelector('.Formulariopago');
    if (form.reportValidity()) {
     
      localStorage.removeItem('cart');
      localStorage.removeItem('wishlist');

      
      navigate('/gracias');
    } else {
      alert('Por favor, completa todos los campos requeridos.');
    }
  };

  return (
    <div>
      <BarraNavegacion />
      <Breadcrumb path={"Inicio > Checkout"} />
      <h5>Checkout</h5>
      <div className="checkout-container">
        <div className="formulario-pago">
          <h6>Detalles de Facturación</h6>
          <form className="Formulariopago">
            <label htmlFor="nombre">Nombre *</label>
            <input type="text" id="nombre" name="nombre" required />

            <label htmlFor="apellidos">Apellidos *</label>
            <input type="text" id="apellidos" name="apellidos" required />

            <label htmlFor="telefono">Teléfono *</label>
            <input type="tel" id="telefono" name="telefono" required />

            <label htmlFor="email">Dirección de correo electrónico *</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="direccion">Dirección de la calle *</label>
            <input type="text" id="direccion" name="direccion" required />

            <label htmlFor="departamento">Departamento / Piso (opcional)</label>
            <input type="text" id="departamento" name="departamento" />

            <label htmlFor="referencia">Referencia de llegada *</label>
            <input type="text" id="referencia" name="referencia" required />

            <label htmlFor="pais">País / Región *</label>
            <select id="pais" name="pais" required>
              <option value="peru">Perú</option>
            </select>

            <label htmlFor="departamento-region">Departamento *</label>
            <select id="departamento-region" name="departamento" required>
              <option value="lima">Lima Metropolitana</option>
            </select>

            <label htmlFor="provincia">Provincia *</label>
            <input type="text" id="provincia" name="provincia" required />

            <label htmlFor="distrito">Distrito *</label>
            <input type="text" id="distrito" name="distrito" required />

            <label htmlFor="dni">Carnet Ext. / DNI *</label>
            <input type="text" id="dni" name="dni" required />

            <label>
              <input type="checkbox" required />
              He leído y estoy de acuerdo con los términos y condiciones de la
              web *
            </label>
          </form>
         
          
        </div>
        <div className="order-summary">
          <h6>Tu Pedido</h6>
          {cartItems.map((item) => (
            <p key={item.id}>
              <strong>Producto:</strong> {item.nombre} x {item.quantity}
            </p>
          ))}
          <p>
            <strong>Subtotal:</strong> S/{subtotal}
          </p>
          <p>
            <strong>Envío:</strong> S/{shippingCost}
          </p>
          <p>
            <strong>Total:</strong> S/{total}
          </p>

          <h6>Método de Pago</h6>
          <p>Transferecia o Depósito Bancario</p>
          <p>
            Realiza tu pago directamente en nuestra cuenta bancaria. Por favor,
            usa el número del pedido como referencia de pago. Tu pedido no se
            procesará hasta que se haya recibido el importe en nuestra cuenta.
          </p>
          <p>Yape / Plim</p>
          <p>
            Tus datos personales se utilizarán para procesar tu pedido, mejorar
            tu experiencia en esta web y otros propósitos descritos en nuestra
            política de privacidad.
          </p>
          <button type="button" onClick={handleOrderClick}>
            Realizar el pedido
          </button>
        </div>
      </div>
      <PiePagina />
    </div>
  );
};

export default Checkout;
