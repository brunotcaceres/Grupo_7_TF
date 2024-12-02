import React, { useState, useEffect } from 'react';

import './BarraNavegacion.css';
import { Link } from 'react-router-dom';

const BarraNavegacion = () => {
  const [menuActivo, setMenuActivo] = useState('');
  
  const [submenuVisible, setSubmenuVisible] = useState({
    novios: true,  
    matrimonio: true,  
    accesorios: true,  
    noviosCompromiso: true,
    alianzasDeAmor: true,
    anilloDePromesa: true,
    masParaTi: true,
    caballero: true,
    accesoriosDama: true,
    collagesDama: true,
    paraEl: true,
    matrimonioMaterial: true,
    matrimonioDiseno: true,
    matrimonioDecorativo: true,
  });
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);

  useEffect(() => {
    
    const user = JSON.parse(localStorage.getItem('user'));
    setUsuarioAutenticado(user);
  }, []);

  const manejarMenu = (menu) => {
    setMenuActivo(menuActivo === menu ? '' : menu);
  };

  const toggleSubmenu = (submenu) => {
    setSubmenuVisible({
      ...submenuVisible,
      [submenu]: !submenuVisible[submenu], 
    });
  };

  return (
    <nav className="barra-navegacion">
      <div className="logo">PLATINO</div>
      <ul className="menu">
        <li><a href="/">Inicio</a></li>

        
        <li
          className="menu-item"
          onMouseEnter={() => manejarMenu('novios')}
          onMouseLeave={() => manejarMenu('')}
        >
          Novios
          <i className={`fa fa-chevron-down flecha ${menuActivo === 'novios' ? 'activo' : ''}`}></i>
          <div className={`submenu ${menuActivo === 'novios' ? 'visible' : ''}`}>
            <div className="submenu-column">
              <img src="/img/Barranavegacion/novioscompromiso.png" alt="Anillo de Compromiso" />
              <h4 onClick={() => toggleSubmenu('noviosCompromiso')}>
                <i className={`fa ${submenuVisible.noviosCompromiso ? 'fa-minus' : 'fa-plus'}`} />
                Anillo de Compromiso
              </h4>
              {submenuVisible.noviosCompromiso && (
                <ul>
                  <li>
                    <Link to="/AMPlataLey950">Plata Ley 950</Link>
                  </li>
                  <li>
                    <Link to="/AMPlataConOro18k">Plata con Oro 18k</Link>
                  </li>
                  <li>
                    <Link to="/AnilloDeCompromisoOro18k">Oro 18k</Link>
                  </li>
                  <li>
                    <Link to="/AnilloDeCompromisoDiamanteMoissanita">Diamante y Moissanita</Link>
                  </li>
                </ul>
              )}
            </div>
            <div className="submenu-column">
              <img src="/img/Barranavegacion/noviosAlianza.png" />
              <h4 onClick={() => toggleSubmenu('alianzasDeAmor')}>
                <i className={`fa ${submenuVisible.alianzasDeAmor ? 'fa-minus' : 'fa-plus'}`} />
                Alianzas de Amor
              </h4>
              {submenuVisible.alianzasDeAmor && (
                <ul>
                  <li>
                    <Link to="/AlianzasDeAmorPlata">Plata Ley 950</Link>
                  </li>
                  <li>
                    <Link to="/AlianzasDeAmorOro18k">Plata con Oro 18k</Link>
                  </li>
                </ul>
              )}
            </div>
            <div className="submenu-column">
              <img src="/img/Barranavegacion/noviospromesa.png" />
              <h4 onClick={() => toggleSubmenu('anilloDePromesa')}>
                <i className={`fa ${submenuVisible.anilloDePromesa ? 'fa-minus' : 'fa-plus'}`} />
                Anillo de Promesa
              </h4>
              {submenuVisible.anilloDePromesa && (
                <ul>
                  <li>
                    <Link to="/AnilloPromesaPlata">Plata Ley 950</Link>
                  </li>
                  <li>
                    <Link to="/AnilloPromesaOro18k">Oro 18k</Link>
                  </li>
                </ul>
              )}
              <h4 onClick={() => toggleSubmenu('masParaTi')}>
                <i className={`fa ${submenuVisible.masParaTi ? 'fa-minus' : 'fa-plus'}`} />
                Más para ti
              </h4>
              {submenuVisible.masParaTi && (
                <ul>
                  <li>
                    <Link to="/MasParaTiChurumbelas">Churumbelas</Link>
                  </li>
                  <li>
                    <Link to="/MasParaTiCollarPareja">Collar de pareja</Link>
                  </li>
                </ul>
              )}
            </div>
            <div className="submenu-column">
              <img src="/img/Barranavegacion/novioscaballero.png" />
              <h4 onClick={() => toggleSubmenu('caballero')}>
                <i className={`fa ${submenuVisible.caballero ? 'fa-minus' : 'fa-plus'}`} />
                Caballero
              </h4>
              {submenuVisible.caballero && (
                <ul>
                  <li>
                    <Link to="/AroDeCompromisoCaballero">Aro de Compromiso</Link>
                  </li>
                  <li>
                    <Link to="/CadenaDeCaballero">Cadena de Caballero</Link>
                  </li>
                  <li>
                    <Link to="/PulseraDeCaballero">Pulsera de Caballero</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </li>

        
        <li
          className="menu-item"
          onMouseEnter={() => manejarMenu('matrimonio')}
          onMouseLeave={() => manejarMenu('')}
        >
          Matrimonio
          <i className={`fa fa-chevron-down flecha ${menuActivo === 'matrimonio' ? 'activo' : ''}`}></i>
          <div className={`submenu ${menuActivo === 'matrimonio' ? 'visible' : ''}`}>
            <div className="submenu-column">
              <img src="/img/Barranavegacion/matrimonio1.png" />
              <h4 onClick={() => toggleSubmenu('matrimonioMaterial')}>
                <i className={`fa ${submenuVisible.matrimonioMaterial ? 'fa-minus' : 'fa-plus'}`} />
                Aros Matrimonio por Material
              </h4>
              {submenuVisible.matrimonioMaterial && (
                <ul>
                  <li>
                    <Link to="/ArosMatrimonioPlata">Plata Ley 950</Link>
                  </li>
                  <li>
                    <Link to="/ArosMatrimonioOro18k">Oro 18k</Link>
                  </li>
                </ul>
              )}
            </div>
            <div className="submenu-column">
              <img src="/img/Barranavegacion/matrimonio2.png" />
              <h4 onClick={() => toggleSubmenu('matrimonioDiseno')}>
                <i className={`fa ${submenuVisible.matrimonioDiseno ? 'fa-minus' : 'fa-plus'}`} />
                Aros Matrimonio por Diseño
              </h4>
              {submenuVisible.matrimonioDiseno && (
                <ul>
                  <li>
                    <Link to="/ArosMatrimonioClasicos">Clásicos</Link>
                  </li>
                  <li>
                    <Link to="/ArosMatrimonioConPiedras">Con Piedras</Link>
                  </li>
                </ul>
              )}
            </div>
            <div className="submenu-column">
              <img src="/img/Barranavegacion/matrimonio3.png" />
              <h4 onClick={() => toggleSubmenu('matrimonioDecorativo')}>
                <i className={`fa ${submenuVisible.matrimonioDecorativo ? 'fa-minus' : 'fa-plus'}`} />
                Decorativos
              </h4>
              {submenuVisible.matrimonioDecorativo && (
                <ul>
                  <li>
                    <Link to="/CopasDeMatrimonio">Copas de matrimonio</Link>
                  </li>
                  <li>
                    <Link to="/AlmohaditasMatrimonio">Almohaditas</Link>
                  </li>
                </ul>
              )}
            </div>
            <div className="submenu-column">
              <img src="/img/Barranavegacion/matrimonio4.png" />
            </div>
          </div>
        </li>

        
        <li
          className="menu-item"
          onMouseEnter={() => manejarMenu('accesorios')}
          onMouseLeave={() => manejarMenu('')}
        >
          Accesorios
          <i className={`fa fa-chevron-down flecha ${menuActivo === 'accesorios' ? 'activo' : ''}`}></i>
          <div className={`submenu ${menuActivo === 'accesorios' ? 'visible' : ''}`}>
            <div className="submenu-column">
              <img src="/img/Barranavegacion/accesorio.png" />
            </div>
            <div className="submenu-column">
              <h4 onClick={() => toggleSubmenu('accesoriosDama')}>
                <i className={`fa ${submenuVisible.accesoriosDama ? 'fa-minus' : 'fa-plus'}`} />
                Accesorios Dama
              </h4>
              {submenuVisible.accesoriosDama && (
                <ul>
                  <li>
                    <Link to="/AretesDama">Aretes</Link>
                  </li>
                  <li>
                    <Link to="/CadenasDama">Cadenas</Link>
                  </li>
                  <li>
                    <Link to="/JuegosDama">Juegos</Link>
                  </li>
                  <li>
                    <Link to="/PulserasDama">Pulseras</Link>
                  </li>
                  <li>
                    <Link to="/TobillerasDama">Tobilleras</Link>
                  </li>
                  <li>
                    <Link to="/AretesNina">Aretes de niña</Link>
                  </li>
                </ul>
              )}
            </div>
            <div className="submenu-column">
              <h4 onClick={() => toggleSubmenu('collaresDama')}>
                <i className={`fa ${submenuVisible.collaresDama ? 'fa-minus' : 'fa-plus'}`} />
                Collares Dama
              </h4>
              {submenuVisible.collaresDama && (
                <ul>
                  <li>
                    <Link to="/CollaresDamaVestir">De Vestir</Link>
                  </li>
                  <li>
                    <Link to="/CollaresDamaPersonalizados">Personalizados</Link>
                  </li>
                  <li>
                    <Link to="/CollaresDamaPiedrasNaturales">Piedras naturales</Link>
                  </li>
                  <li>
                    <Link to="/CollaresDamaRelicarios">Relicarios</Link>
                  </li>
                  <li>
                    <Link to="/CollaresDamaReligiosos">Religiosos</Link>
                  </li>
                </ul>
              )}
            </div>
            <div className="submenu-column">
              <h4 onClick={() => toggleSubmenu('paraEl')}>
                <i className={`fa ${submenuVisible.paraEl ? 'fa-minus' : 'fa-plus'}`} />
                Para Él
              </h4>
              {submenuVisible.paraEl && (
                <ul>
                  <li>
                    <Link to="/ArosDeVestirParaEl">Aro de vestir</Link>
                  </li>
                  <li>
                    <Link to="/CadenasParaEl">Cadenas</Link>
                  </li>
                  <li>
                    <Link to="/PulserasParaEl">Pulseras</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </li>

        <li><Link to="/contactanos"><a>Contáctanos</a></Link></li>
      </ul>

      <div className="iconos">
        <i className="fa fa-search"></i>
        <nav>
          {usuarioAutenticado ? (
            
            <Link to="/mi-cuenta/dashboard">
              <i className="fa fa-user"></i>
            </Link>
          ) : (
            
            <Link to="/mi-cuenta">
              <i className="fa fa-user"></i>
            </Link>
          )}
        </nav>
        <nav>
          <Link to="/wishlist"><i className="fa fa-heart"></i></Link>
        </nav>
        <div>
          <Link to="/cart">
            <i className="fa fa-shopping-cart"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default BarraNavegacion;
