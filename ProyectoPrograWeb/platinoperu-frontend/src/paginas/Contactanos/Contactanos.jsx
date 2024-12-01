import React from 'react';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './Contactanos.css';
import Breadcrumb from '../../componentes/Breadcrumb/Breadcrumb';

const Contactanos = () => {
  return (
    <div>
      <BarraNavegacion />
      <Breadcrumb path={"Inicio > Contactanos"}/>
      <div className="contactanos-container">
        <h1>Contáctanos</h1>
        <div className="contact-info">
        <div className="left-column">
          <div className="ubicacion-email">
            <h2>Ubícanos</h2>
            <p>📍 Jr. de la Unión 446 Tda 129 - Lima</p>
            <p>📍 Av. Larco 345 Tda S-9 - Miraflores</p>
            <h2>Email</h2>
            <p>📧 contacto@platinoperu.com</p>
          </div>
          <div className="horario">
            <h2>Atención</h2>
            <p>🕒 Lun - Sáb: 10:00am - 7:00pm</p>
          </div>
        </div>
        <div className="right-column">
          <h2>Te Atendemos</h2>
          <p>👩‍💼 Asesora | Susana Calderón</p>
          <p>📞 927 357 217</p>
          <p>👩‍💼 Asesora | Judith Huamaní</p>
          <p>📞 930 800 848</p>
          <p>👨‍💼 Asesor | Luis Mauricio</p>
          <p>📞 984 281 116</p>
        </div>
      </div>
        <div className="mapa-container">
          <div className="mapa">
            <h3>LIMA - Jirón de la Unión 446 Tda 129</h3>
            <iframe
              title="Mapa Lima"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3901.9612818810147!2d-77.03212!3d-12.046185!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b674f0e94d%3A0x6c330d503955aa2d!2zSmlyw7NuIGRlIGxhIFVuacOzbiA0NDYsIExpbWEgMTUwMDEsIFBlcsO6!5e0!3m2!1ses!2sus!4v1733023299888!5m2!1ses!2sus"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="mapa">
            <h3>MIRAFLORES - Avenida Larco 345 Tda S-9</h3>
            <iframe
              title="Mapa Miraflores"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.872566125701!2d-77.03135952397503!3d-12.120870643286917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9d86eb6eef7%3A0xbc4374f5e54a1e13!2sPlatino%20Per%C3%BA%20Joyer%C3%ADa%2C%20Sede%20Miraflores!5e0!3m2!1ses!2sus!4v1733023378009!5m2!1ses!2sus"
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
