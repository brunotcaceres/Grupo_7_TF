import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="logo-container">
        
        <svg
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
          className="rotating-text"
        >
          <defs>
            
            <path
              id="circlePath"
              d="M 200, 200 m -140, 0 a 140,140 0 1,1 280,0 a 140,140 0 1,1 -280,0"
            />
          </defs>
          <text
            fontSize="20"
            fontFamily="Arial, sans-serif"
            fill="#ffffff"
            letterSpacing="10"
          >
            <textPath href="#circlePath" startOffset="0%">
              JOYERÍA FINA - PLATINO PERÚ - DESDE 1985 -
            </textPath>
          </text>
        </svg>

        
        <img src="/img/Logo/lofo.png" alt="Logo Platino Perú" className="main-logo" />
      </div>

      <h1 className="hero-title">
        Nuestras joyas son un símbolo perdurable de tus sentimientos{" "}
        <span className="heart-icon">❤️</span>
      </h1>

      <a href="https://beacons.ai/platinoperu" target="_blank" rel="noopener noreferrer" className="hero-button">ASESORÍA EXCLUSIVA</a>
    </section>
  );
};

export default HeroSection;
