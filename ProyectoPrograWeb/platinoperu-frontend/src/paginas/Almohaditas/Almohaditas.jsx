import React from 'react';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import Breadcrumb from '../../componentes/Breadcrumb/Breadcrumb';
import CategoriaCard from '../../componentes/CategoriaCard/CategoriaCard';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard';
import Filtro from '../../componentes/Filtro/Filtro';
import Ordenamiento from '../../componentes/Ordenamiento/Ordenamiento';
import './Almohaditas.css';

const Almohaditas = () => {
    const categorias = [
        { nombre: 'Matrimonio', icono: '/icons/matrimonio.png', link: '/matrimonio' },
        { nombre: 'Almohaditas', icono: '/icons/almohaditas.png', link: '/almohaditas' },
        { nombre: 'Aros de Boda', icono: '/icons/aros-boda.png', link: '/aros-de-boda' },
        { nombre: 'Copas Decoradas', icono: '/icons/copas.png', link: '/copas-decoradas' }
    ];

    const productos = [
        { id: 1, nombre: 'Almohada Porta Aros | Diem', precio: 20, imagen: '/product1.jpg' },
        { id: 2, nombre: 'Almohada Porta Aros | Love Rose', precio: 60, imagen: '/product2.jpg' },
        { id: 3, nombre: 'Almohada Porta Aros | Soul', precio: 20, imagen: '/product3.jpg' },
        { id: 4, nombre: 'Porta Aros | Nido De Amor', precio: 80, imagen: '/product4.jpg' },
    ];

    return (
        <div className="almohaditas">
            <BarraNavegacion />
            <Breadcrumb path="Inicio > Shop > Matrimonio > Almohaditas" />
            <h1 className="titulo">Almohaditas</h1>
            
            <div className="categorias">
                {categorias.map((categoria, index) => (
                    <CategoriaCard key={index} {...categoria} />
                ))}
            </div>

            <div className="filtro-orden">
                <Filtro />
                <Ordenamiento />
            </div>

            <div className="productos">
                {productos.map((producto) => (
                    <ProductoCard key={producto.id} {...producto} />
                ))}
            </div>
            <div className="paginacion">
                <span>1</span>
                <span>2</span>
                <span>...</span>
                <span>8</span>
                <span>&gt;</span>
            </div>
            <PiePagina />
        </div>
    );
};

export default Almohaditas;
