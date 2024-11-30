import React from 'react';
import './NuestroProceso.css';

const NuestroProceso = () => {
  const procesos = [
    {
      titulo: 'Diseño',
      descripcion: 'Nuestro proceso de diseño comienza con la inspiración, recurriendo a una variedad de fuentes para crear diseños únicos y hermosos que son atemporales y modernos. Trabajamos en estrecha colaboración con nuestros clientes para comprender sus preferencias y crear piezas que se adapten a su estilo individual.',
      icono: '/img/diamantes/esmeralda-min.png',
    },
    {
      titulo: 'Creación',
      descripcion: 'Una vez finalizado el diseño, nuestros expertos artesanos utilizan únicamente los mejores materiales y técnicas tradicionales para crear cada pieza a mano. Desde el modelado inicial y la soldadura hasta el pulido final, cada paso del proceso se ejecuta meticulosamente para garantizar la máxima calidad.',
      icono: '/img/diamantes/aguamarina-min.png',
    },
    {
      titulo: 'Calidad',
      descripcion: 'Nos tomamos muy en serio el control de calidad y cada pieza se somete a pruebas rigurosas para garantizar que cumpla con nuestros altos estándares. Inspeccionamos cada pieza minuciosamente, verificamos la fuerza de las uniones y evaluamos los ajustes necesarios para garantizar que el producto terminado sea perfecto.',
      icono: '/img/diamantes/amatista-min.png',
    },
    {
      titulo: 'Entrega',
      descripcion: 'Una vez que la pieza ha pasado nuestras pruebas de control de calidad, se empaqueta cuidadosamente y se envía directamente a nuestros clientes. Ofrecemos opciones de envío rápidas y confiables, para que puedan disfrutar de su nueva pieza lo antes posible.',
      icono: '/img/diamantes/diamante-min.png',
    },
  ];

  return (
    <section className="nuestro-proceso">
      <h2>Nuestro Proceso</h2>
      <div className="proceso-grid">
        {procesos.map((proceso, index) => (
          <div className="proceso-item" key={index}>
            <img src={proceso.icono} alt={`${proceso.titulo} icon`} className="proceso-icono" />
            <h3>{proceso.titulo}</h3>
            <p>{proceso.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NuestroProceso;
