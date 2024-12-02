import React from 'react';
import './thankyou.css';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';

const ThankYou = () => {
  return (
    <div>
      <BarraNavegacion />
      <div className="thankyou-container">
        <h1>Gracias por tu compra</h1>
        <p>Tu pedido ha sido procesado exitosamente.</p>
        <p>Pronto recibirás un correo electrónico con los detalles de tu pedido.</p>
        <button onClick={() => (window.location.href = '/')}>
          Volver al Inicio
        </button>
      </div>
      <PiePagina />
    </div>
  );
};

export default ThankYou;
