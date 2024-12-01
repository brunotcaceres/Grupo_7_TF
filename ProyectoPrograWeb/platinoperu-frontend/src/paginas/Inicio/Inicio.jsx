import React from 'react';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import HeroSection from '../../componentes/HeroSection/HeroSection';
import SeccionDestacados from '../../componentes/SeccionDestacados/SeccionDestacados';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import Accesorios from '../../componentes/Accesorios/Accesorios';
import NuestroProceso from '../../componentes/NuestroProceso/NuestroProceso';

const Inicio = () => {
  return (
    <div>
      <header><BarraNavegacion /></header>
      <HeroSection />
      <SeccionDestacados />
      <Accesorios />
      <NuestroProceso />
      <footer><PiePagina /></footer>
    </div>
    
  );
};

export default Inicio;
