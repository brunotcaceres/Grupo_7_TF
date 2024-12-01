import React from 'react';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './Wishlist.css';
import Breadcrumb from '../../componentes/Breadcrumb/Breadcrumb';
const Wishlist = () => {
    return (
        
            
        <div className="wishlist-container">
            <BarraNavegacion />
            <Breadcrumb  />
            
            <h1 className="wishlist-title">Wishlist</h1>
            <div className="wishlist-content">
                <div className="wishlist-icon">
                <img src="\img\cart\caja-abierta-con-dos-corazones.png" alt="Corazon" />
                </div>
                <p>Your Wishlist Is Currently Empty</p>
                <p>Click the <span className="heart-highlight">❤️</span> icons to add products</p>
                <button onClick={() => window.location.href = "/tienda"} className="wishlist-btn">Volver a la tienda</button>
            </div>
            <PiePagina />
        </div>
        
        
    );
};

export default Wishlist;
