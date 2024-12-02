import React from 'react';
import './SeccionDestacados.css';
import { useNavigate } from 'react-router-dom'; 

const productos = [
  {
    titulo: "Anillo de Compromiso",
    descripcion: "Diseño: Sweetie - Oro Rosa 18k",
    imagen1: "/img/Destacados/Anillo_de_Compromiso.png",
    
    boton: "Ver Modelos",
    ruta: "/compromiso",
    colorFondo: "#ffffff" 
  },
  {
    titulo: "Aros de Matrimonio",
    descripcion: "Diseño: Triad - Oro Amarillo 18k",
    imagen1: "/img/Destacados/Aros_de_Matrimonio2.png",
    
    boton: "Ver Modelos",
    ruta: "/aros-de-matrimonio",
    colorFondo: "#f8f3e9" 
  },
  {
    titulo: "Anillo de Promesa",
    descripcion: "Diseño: Finite - Plata Ley 950",
    imagen1: "/img/Destacados/Anillo_de_Promesa.png",
    
    boton: "Ver Modelos",
    ruta: "/anillo-de-promesa",
    colorFondo: "#ffffff"
  },
  {
    titulo: "Alianzas de Amor",
    descripcion: "Diseño: Celtas - Plata Ley 950",
    imagen1: "/img/Destacados/Alianzas_de_Amor.png",
    imagen2: "ruta_alianzas2.jpg",
    boton: "Ver Modelos",
    ruta: "/alianzas-de-amor",
    colorFondo: "#f8f3e9" 
  },
];

const SeccionDestacados = () => {
  const navigate = useNavigate(); 

  return (
    <section className="seccion-destacados">
      {productos.map((producto, index) => (
        <div
  key={index}
  className={`destacado ${index % 2 !== 0 ? "reversa" : ""}`}
  style={{ backgroundColor: producto.colorFondo }} 
>
  <div className="imagenes">
    <img src={producto.imagen1} alt={producto.titulo} />
    
  </div>
  <div className="informacion">
    <h2>{producto.titulo}</h2>
    
    <button
      className="btn"
      onClick={() => navigate(producto.ruta)}
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
