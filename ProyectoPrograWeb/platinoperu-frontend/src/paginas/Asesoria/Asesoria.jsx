import React from 'react';
import './Asesoria.css'; // Archivo CSS externo

const Asesoria = () => {
  return (
    <div className="asesoria-container">
      <div className="header">
        <img src="path-to-banner-image" alt="Asesoría Banner" className="banner-img" />
      </div>

      <div className="profile-section">
        <img src="path-to-profile-image" alt="Profile" className="profile-img" />
        <h1>platinoperu</h1>
        <p>Anillos de Compromiso, Alianzas y Aros de Matrimonio</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-tiktok"></i></a>
        </div>
      </div>

      <div className="contact-section">
        <a href="/"><button className="contact-btn">Nuestra Web</button></a>
        <button className="contact-btn">WhatsApp - Sede Lima Centro</button>
        <button className="contact-btn">WhatsApp - Sede Miraflores</button>
      </div>

      <div className="horario-section">
        <h2>Horario de Atención</h2>
        <p>SEDE LIMA CENTRO</p>
        <p>Lunes a Viernes 10am - 8pm</p>
        <p>Sábado 10am - 7pm</p>
        <p>SEDE MIRAFLORES</p>
        <p>Lunes a Sábado 10am - 7pm</p>
      </div>

      <div className="footer-section">
        <button className="social-btn"><i className="fab fa-instagram"></i> Instagram</button>
        <button className="social-btn"><i className="fab fa-facebook"></i> Facebook</button>
        <div className="footer-img">
          <img src="path-to-footer-image" alt="Footer Logo" />
        </div>
      </div>
    </div>
  );
};

export default Asesoria;
