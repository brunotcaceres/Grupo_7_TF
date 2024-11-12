import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="logo-container">
        <div className="rotating-text">
          <span>PLATINO PERÚ - DESDE 1985 - JOYERÍA FINA - </span>
        </div>
        <img src="ruta_del_logo.svg" alt="Logo Platino Perú" className="main-logo" />
      </div>
      <h1>
        Nuestras joyas son un símbolo perdurable de tus sentimientos{' '}
        <span className="heart-icon">❤️</span>
      </h1>
      <a href="/asesoria" className="hero-button">ASESORÍA EXCLUSIVA</a>
    </section>
  );
};

export default HeroSection;
