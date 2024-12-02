import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from '../paginas/Inicio/Inicio';
import AdminPanel from '../paginas/Admin/admin';
import MiCuenta from '../paginas/MiCuenta/MiCuenta';
import Wishlist from '../paginas/Wishlist/Wishlist';
import Cart from '../paginas/Cart/Cart';
import Contactanos from '../paginas/Contactanos/Contactanos';
import Tienda from '../paginas/Tienda/Tienda';
import Matrimonio from '../paginas/Matrimonio/Matrimonio';
import Almohaditas from '../paginas/Almohaditas/Almohaditas';
import ArosDeBoda from '../paginas/ArosDeBoda/ArosDeBoda';
import CopasDecoradas from '../paginas/CopasDecoradas/CopasDecoradas';
import Novios from '../paginas/Novios/Novios';
import AlianzasDeAmor from '../paginas/AlianzasDeAmor/AlianzasDeAmor';
import AnillosDeCompromiso from '../paginas/AnillosDeCompromiso/AnillosDeCompromiso';
import AnilloPromesa from '../paginas/AnilloPromesa/AnilloPromesa';
import AroDeCompromisoCaballero from '../paginas/AroDeCompromisoCaballero/AroDeCompromisoCaballero';
import CollaresDeParejas from '../paginas/CollaresDeParejas/CollaresDeParejas';
import ParaEl from '../paginas/ParaEl/ParaEl';
import AroDeCaballero from '../paginas/AroDeCaballero/AroDeCaballero';
import Cadenas from '../paginas/Cadenas/Cadenas';
import PulserasDeCaballero from '../paginas/PulserasDeCaballero/PulserasDeCaballero';
import ParaElla from '../paginas/ParaElla/ParaElla';
import Aretes from '../paginas/Aretes/Aretes';
import AretesNina from '../paginas/AretesNina/AretesNina';
import CadenasElla from '../paginas/CadenasElla/CadenasElla';
import Collares from '../paginas/Collares/Collares';
import CollaresPiedrasNaturales from '../paginas/CollaresPiedrasNaturales/CollaresPiedrasNaturales';
import CollaresParaDama from '../paginas/CollaresParaDama/CollaresParaDama';
import CollaresPersonalizados from '../paginas/CollaresPersonalizados/CollaresPersonalizados';
import CollaresReligiosos from '../paginas/CollaresReligiosos/CollaresReligiosos';
import Juegos from '../paginas/Juegos/Juegos';
import Pulseras from '../paginas/Pulseras/Pulseras';
import Relicarios from '../paginas/Relicarios/Relicarios';
import Tobilleras from '../paginas/Tobilleras/Tobilleras';
import PiedrasPreciosas from '../paginas/PiedrasPreciosas/PiedrasPreciosas';
import Amatista from '../paginas/Amatista/Amatista';
import Rubi from '../paginas/Rubi/Rubi';
import Zafiro from '../paginas/Zafiro/Zafiro';
import Regalos from '../paginas/Regalos/Regalos';
import Churumbela from '../paginas/Churumbela/Churumbela';
import RosariosDePlata from '../paginas/RosariosDePlata/RosariosDePlata';
import Compromiso from '../paginas/Compromiso/Compromiso';
import ArosDeMatrimonio from '../paginas/ArosDeMatrimonio/ArosDeMatrimonio';
import AnilloCompromisoPlata from '../paginas/AnilloCompromisoPlata/AnilloCompromisoPlata';
import AnillosPlataOro from '../paginas/AnillosPlataOro/AnillosPlataOro';
import AnilloDeCompromisoOro18k from '../paginas/AnilloDeCompromisoOro18k/AnilloDeCompromisoOro18k';
import AnilloCompromisoDiamanteMoissanita from '../paginas/AnilloCompromisoDiamanteMoissanita/AnilloCompromisoDiamanteMoissanita';
import AMPlataLey950 from '../paginas/AMPlataLey950/AMPlataLey950';
import AMPlataConOro18k from '../paginas/AMPlataConOro18k/AMPlataConOro18k';
import AMOro18k from '../paginas/AMOro18k/AMOro18k.JSX';
import Checkout from '../paginas/Checkout/checkout';
import ThankYou from '../paginas/Gracias/ThankYou';
// Importen otras páginas si es necesario

function NavegadorApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/gracias" element={<ThankYou />} />
        <Route path="/mi-cuenta/*" element={<MiCuenta />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/matrimonio" element={<Matrimonio />} />
        <Route path="/almohaditas" element={<Almohaditas />} />
        <Route path="/aros-de-boda" element={<ArosDeBoda />} />
        <Route path="/copas-decoradas" element={<CopasDecoradas />} />
        <Route path="/novios" element={<Novios />} />
        <Route path="/alianzas-de-amor" element={<AlianzasDeAmor />} />
        <Route path="/anillo-de-compromiso" element={<AnillosDeCompromiso />} />
        <Route path="/anillo-de-promesa" element={<AnilloPromesa />} />
        <Route path="/aro-compromiso-caballero" element={<AroDeCompromisoCaballero />} />
        <Route path="/collares-de-parejas" element={<CollaresDeParejas />} />
        <Route path="/para-el" element={<ParaEl />} />
        <Route path="/aro-de-caballero" element={<AroDeCaballero />} />
        <Route path="/cadenas" element={<Cadenas />} />
        <Route path="/pulseras-de-caballero" element={<PulserasDeCaballero />} />
        <Route path="/para-ella" element={<ParaElla />} />
        <Route path="/aretes" element={<Aretes />} />
        <Route path="/aretes-nina" element={<AretesNina />} />
        <Route path="/cadenas-ella" element={<CadenasElla />} />
        <Route path="/collares" element={<Collares />} />
        <Route path="/collares-piedras-naturales" element={<CollaresPiedrasNaturales />} />
        <Route path="/collares-para-dama" element={<CollaresParaDama />} />
        <Route path="/collares-personalizados" element={<CollaresPersonalizados />} />
        <Route path="/collares-religiosos" element={<CollaresReligiosos />} />
        <Route path="/juegos" element={<Juegos />} />
        <Route path="/pulseras" element={<Pulseras />} />
        <Route path="/relicarios" element={<Relicarios />} />
        <Route path="/tobilleras" element={<Tobilleras />} />
        <Route path="/piedras-preciosas" element={<PiedrasPreciosas />} />
        <Route path="/amatista" element={<Amatista />} />
        <Route path="/rubi" element={<Rubi />} />
        <Route path="/zafiro" element={<Zafiro />} />
        <Route path="/regalos" element={<Regalos />} />
        <Route path="/churumbela" element={<Churumbela />} />
        <Route path="/rosarios" element={<RosariosDePlata />} />
        <Route path="/compromiso" element={<Compromiso />} />
        <Route path="/aros-de-matrimonio" element={<ArosDeMatrimonio />} />
        <Route path="/plata950" element={<AnilloCompromisoPlata />} />
        <Route path="/plataoro18k" element={<AnillosPlataOro />} />
        <Route path="/oro18k" element={<AnilloDeCompromisoOro18k />} />
        <Route path="/diamante" element={<AnilloCompromisoDiamanteMoissanita />} />
        <Route path="/plataley950" element={<AMPlataLey950 />} />
        <Route path="/amoro18" element={<AMPlataConOro18k />} />
        <Route path="/AMoro18k" element={<AMOro18k />} />
        <Route path="/Checkout" element={<Checkout/>}/>


        {/* Agreguen otras rutas si es necesario */}
      </Routes>
    </Router>
  );
}

export default NavegadorApp;
