import React from 'react';
import './SeccionDestacados.css';
import { useNavigate } from 'react-router-dom'; // Importar hook para redireccionar

const productos = [
  {
    titulo: "Anillo de Compromiso",
    descripcion: "Diseño: Sweetie - Oro Rosa 18k",
    imagen1: "ruta_anillo1.jpg",
    imagen2: "ruta_anillo2.jpg",
    boton: "Ver Modelos",
    ruta: "/compromiso",
    colorFondo: "#ffffff" // Blanco
  },
  {
    titulo: "Aros de Matrimonio",
    descripcion: "Diseño: Triad - Oro Amarillo 18k",
    imagen1: "ruta_aros1.jpg",
    imagen2: "ruta_aros2.jpg",
    boton: "Ver Modelos",
    ruta: "/aros-de-matrimonio",
    colorFondo: "#f8f3e9" // Color crema
  },
  {
    titulo: "Anillo de Promesa",
    descripcion: "Diseño: Finite - Plata Ley 950",
    imagen1: "ruta_promesa1.jpg",
    imagen2: "ruta_promesa2.jpg",
    boton: "Ver Modelos",
    ruta: "/anillo-de-promesa",
    colorFondo: "#ffffff" // Blanco
  },
  {
    titulo: "Alianzas de Amor",
    descripcion: "Diseño: Celtas - Plata Ley 950",
    imagen1: "ruta_alianzas1.jpg",
    imagen2: "ruta_alianzas2.jpg",
    boton: "Ver Modelos",
    ruta: "/alianzas-de-amor",
    colorFondo: "#f8f3e9" // Color crema
  },
];

const SeccionDestacados = () => {
  const navigate = useNavigate(); // Hook para navegación

  return (
    <section className="seccion-destacados">
      {productos.map((producto, index) => (
        <div
          key={index}
          className="destacado"
          style={{ backgroundColor: producto.colorFondo }} // Fondo dinámico
        >
          <div className="imagenes">
            <img src={producto.imagen1} alt={producto.titulo} />
            <img src={producto.imagen2} alt={producto.titulo} />
          </div>
          <div className="informacion">
            <h2>{producto.titulo}</h2>
            <p>{producto.descripcion}</p>
            <button
              className="btn"
              onClick={() => navigate(producto.ruta)} // Redirección al hacer clic
            >
              {producto.boton}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SeccionDestacados;
