import React from 'react';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './Contactanos.css';

const Contactanos = () => {
  return (
    <div>
      <BarraNavegacion />
      <div className="contactanos-container">
        <h1>Contáctanos</h1>
        <div className="contactanos-info">
          <div className="ubicacion">
            <h2>Ubícanos</h2>
            <p>📍 Jr. de la Unión 446 Tda 129 - Lima</p>
            <p>📍 Av. Larco 345 Tda S-9 - Miraflores</p>
          </div>
          <div className="atencion">
            <h2>Te Atendemos</h2>
            <p>👩‍💼 Asesora | Susana Calderón</p>
            <p>📞 927 357 217</p>
            <p>👩‍💼 Asesora | Judith Huamaní</p>
            <p>📞 930 800 848</p>
            <p>👨‍💼 Asesor | Luis Mauricio</p>
            <p>📞 984 281 116</p>
          </div>
          <div className="email">
            <h2>Email</h2>
            <p>contacto@platinoperu.com</p>
          </div>
          <div className="horario">
            <h2>Atención</h2>
            <p>🕒 Lun - Sáb: 10:00am - 7:00pm</p>
          </div>
        </div>
        <div className="mapa-container">
          <div className="mapa">
            <h3>LIMA - Jirón de la Unión 446 Tda 129</h3>
            <iframe
              title="Mapa Lima"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="mapa">
            <h3>MIRAFLORES - Avenida Larco 345 Tda S-9</h3>
            <iframe
              title="Mapa Miraflores"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <PiePagina />
    </div>
  );
};

export default Contactanos;
