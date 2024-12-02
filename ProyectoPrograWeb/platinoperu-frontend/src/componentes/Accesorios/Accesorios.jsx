import React, { useState } from 'react';
import './Accesorios.css';

const Accesorios = () => {
  const [currentCategory, setCurrentCategory] = useState('relicarios');
  const [currentIndex, setCurrentIndex] = useState(0);

  const productos = {
    relicarios: [
      { id: 1, name: 'Relicario De Plata | Corazón Tallado', price: 'S/150', image: '/img/accesorios/relicario-fotoretrato-plata-corazontallado-plata-lima-platinoperu-600x600.jpg' },
      { id: 2, name: 'Relicario De Plata | Oval', price: 'S/140', image: '/img/accesorios/relicario-fotoretrato-plata-oval-plata-lima-platinoperu-600x600.jpg' },
      { id: 3, name: 'Relicario De Plata | Génesis', price: 'S/160', image: '/img/accesorios/relicario-fotoretrato-plata-genesis-plata-lima-platinoperu.jpg' },
      { id: 4, name: 'Relicario De Plata Con Baño De Oro 18K | Corazón', price: 'S/230', image: '/img/accesorios/relicario-plata-rectangular-PRAGA-lima-miraflores-platinoperu2-600x600.jpg' },
      { id: 5, name: 'Relicario De Plata Con Baño De Oro 19K | Corazón', price: 'S/230', image: '/img/accesorios/relicario-fotoretrato-plata-amaral-pajaros-plata-lima-platinoperu.jpg' },
    ],
    aretes: [
      { id: 1, name: 'Aretes De Plata | Lavanda Maxi', price: 'S/70', image: 'img/aretes1.jpg' },
      { id: 2, name: 'Aretes De Plata | Peridot London', price: 'S/80', image: 'img/aretes2.jpg' },
      { id: 3, name: 'Aretes De Plata | Rosé Mini', price: 'S/50', image: 'img/aretes3.jpg' },
      { id: 4, name: 'Aretes De Plata | Dunia Maxi', price: 'S/65', image: 'img/aretes4.jpg' },

    ],
    collares: [
      { id: 1, name: 'Collar De Plata | Delicado', price: 'S/120', image: 'img/collar1.jpg' },
      { id: 2, name: 'Collar De Plata | Minimalista', price: 'S/110', image: 'img/collar2.jpg' },
    ],
    pulseras: [
      { id: 1, name: 'Pulsera De Plata | Corazón', price: 'S/90', image: 'img/pulsera1.jpg' },
      { id: 2, name: 'Pulsera De Plata | Perla', price: 'S/100', image: 'img/pulsera2.jpg' },
    ],
    juegos: [
      { id: 1, name: 'Juego De Plata | Margaritas', price: 'S/200', image: 'img/juego1.jpg' },
      { id: 2, name: 'Juego De Plata | Florales', price: 'S/180', image: 'img/juego2.jpg' },
    ],
    'cadenas dama': [
      { id: 1, name: 'Cadena De Plata | Cartier', price: 'S/60', image: 'img/cadena1.jpg' },
      { id: 2, name: 'Cadena De Plata | Twist', price: 'S/60', image: 'img/cadena2.jpg' },
    ],
    'cadena caballero': [
      { id: 1, name: 'Collar De Plata | Ancla II', price: 'S/150', image: 'img/collarcaballero1.jpg' },
      { id: 2, name: 'Collar De Plata | Prada', price: 'S/250', image: 'img/collarcaballero2.jpg' },
    ],
    gemelos: [
      { id: 1, name: 'Gemelos De Plata | Classic', price: 'S/200', image: 'img/gemelos1.jpg' },
      { id: 2, name: 'Gemelos De Plata | Modern', price: 'S/210', image: 'img/gemelos2.jpg' },
    ],
  };

  const productosAMostrar = productos[currentCategory];
  const productosPorVista = 4;

  const handleNext = () => {
    const maxIndex = Math.ceil(productosAMostrar.length / productosPorVista) - 1;
    setCurrentIndex(prev => {
      const nextIndex = Math.min(prev + 1, maxIndex);
      console.log("Moving to index:", nextIndex);
      return nextIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex(prev => {
      const prevIndex = Math.max(prev - 1, 0);
      console.log("Moving to index:", prevIndex);
      return prevIndex;
    });
  };



  return (
    <section className="accessories-section">
      <h2>Accesorios</h2>
      <div className="accessories-menu">
        {Object.keys(productos).map((categoria) => (
          <button
            key={categoria}
            className={categoria === currentCategory ? 'active' : ''}
            onClick={() => {
              setCurrentCategory(categoria);
              setCurrentIndex(0);
            }}
          >
            {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
          </button>
        ))}
      </div>

      <div className="carousel">
        <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * (100 / productosPorVista)}%)` }}>

          {productosAMostrar.map((producto) => (
            <div className="product-card" key={producto.id}>
              <img src={producto.image} alt={producto.name} />
              <h3>{producto.name}</h3>
              <p>{producto.price}</p>
            </div>
          ))}
        </div>
        <button className="carousel-prev" onClick={handlePrev}>◀</button>
        <button className="carousel-next" onClick={handleNext}>▶</button>
      </div>

      <div className="carousel-dots">
        {Array.from({ length: Math.ceil(productosAMostrar.length / productosPorVista) }).map((_, i) => (
          <button
            key={i}
            className={i === currentIndex ? 'active' : ''}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Accesorios;
