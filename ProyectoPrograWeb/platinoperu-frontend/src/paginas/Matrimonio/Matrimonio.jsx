import React from 'react';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './Matrimonio.css';

const Matrimonio = () => {
    const categorias = [
        { nombre: 'Tienda', icono: '/icons/tienda.png', link: '/tienda' },
        { nombre: 'Almohaditas', icono: '/icons/almohaditas.png', link: '/almohaditas' },
        { nombre: 'Aros De Boda', icono: '/icons/aros-de-boda.png', link: '/aros-de-boda' },
        { nombre: 'Copas Decoradas', icono: '/icons/copas-decoradas.png', link: '/copas-decoradas' },
    ];

    const productos = [
        { id: 1, nombre: 'Alianzas De Plata | Blue Love', precio: 300, imagen: '/product1.jpg' },
        { id: 2, nombre: 'Alianzas De Plata | Brisa', precio: 290, imagen: '/product2.jpg', descuento: '17%' },
        { id: 3, nombre: 'Alianzas De Plata | Caliopé', precio: 400, imagen: '/product3.jpg' },
    ];

    return (
        <div className="matrimonio">
            <BarraNavegacion />
            <div className="breadcrumb">Home {'>'} Shop {'>'} Matrimonio</div>
            <h1 className="titulo">Matrimonio</h1>

            <div className="categorias">
                {categorias.map((categoria, index) => (
                    <CategoriaCard key={index} nombre={categoria.nombre} icono={categoria.icono} link={categoria.link} />
                ))}
            </div>

            <div className="filtro-orden">
                <Filtro />
                <Ordenamiento />
            </div>

            <div className="productos">
                {productos.map((producto) => (
                    <ProductoCard
                        key={producto.id}
                        nombre={producto.nombre}
                        precio={producto.precio}
                        imagen={producto.imagen}
                        descuento={producto.descuento}
                    />
                ))}
            </div>

            <div className="paginacion">
                <span>1</span>
                <span>2</span>
                <span>...</span>
                <span>9</span>
                <span>&gt;</span>
            </div>
            <PiePagina />
        </div>
    );
};

export default Matrimonio;
