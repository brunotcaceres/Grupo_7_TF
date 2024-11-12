import React from 'react';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import './Wishlist.css';

const Wishlist = () => {
    return (
        <div className="wishlist-container">
            <BarraNavegacion />
            <div className="breadcrumb">
                <span>Home</span> &gt; <span>Wishlist</span>
            </div>
            <h1 className="wishlist-title">Wishlist</h1>
            <div className="wishlist-content">
                <div className="wishlist-icon">
                    <i className="heart-icon">❤️</i>
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
