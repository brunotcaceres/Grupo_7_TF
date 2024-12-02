import React from 'react';
import './checkout.css';

import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import Breadcrumb from '../../componentes/Breadcrumb/Breadcrumb';
const Checkout = () => {
    return (
        <div>
            <BarraNavegacion />
            <Breadcrumb path={"Inicio > Checkout"}/>
            <h5>Checkout</h5>
            <div className="checkout-container">
                
                <div className="formulario-pago">
                    <h6>Detalles de Facturación</h6>
                    <form className ="Formulariopago">

                    <label for="nombre">Nombre *</label>
                    <input type="text" id="nombre" name="nombre" required />

                    <label for="apellidos">Apellidos *</label>
                    <input type="text" id="apellidos" name="apellidos" required />


                    <label for="telefono">Teléfono *</label>
                    <input type="tel" id="telefono" name="telefono" required />

                    <label for="email">Dirección de correo electrónico *</label>
                    <input type="email" id="email" name="email" required />


                    <label for="direccion">Dirección de la calle *</label>
                    <input type="text" id="direccion" name="direccion" required />

                    <label for="departamento">Departamento / Piso (opcional)</label>
                    <input type="text" id="departamento" name="departamento"/>

                    <label for="referencia">Referencia de llegada *</label>
                    <input type="text" id="referencia" name="referencia" required />


                    <label for="pais">País / Región *</label>
                    <select id="pais" name="pais" required />
                    <option value="peru">Perú</option>
                    

                    <label for="departamento-region">Departamento *</label>
                    <select id="departamento-region" name="departamento" required />
                    <option value="lima">Lima Metropolitana</option>
                

                    <label for="provincia">Provincia *</label>
                    <input type="text" id="provincia" name="provincia" required />

                    <label for="distrito">Distrito *</label>
                    <input type="text" id="distrito" name="distrito" required />


                    <label for="dni">Carnet Ext. / DNI *</label>
                    <input type="text" id="dni" name="dni" required/>

                    <button type="submit">Realizar el pedido</button>
                </form>
                </div>
                <div className="order-summary">
                    <h6>Tu Pedido</h6>
                    <p><strong>Producto:</strong> Alianzas De Plata | Aleph x 1</p>
                    <p><strong>Subtotal:</strong> S/300</p>
                    <p><strong>Envío:</strong> S/12</p>
                    <p><strong>Total:</strong> S/312</p>

                    <h6>Método de Pago</h6>
                    <h6>Método de Pago</h6>
                    <p>Transferecia o Depósito Bancario</p>
                    <p>Realiza tu pago directamente en nuestra cuenta bancaria. Por favor, usa el número del pedido como referencia de pago. Tu pedido no se procesará hasta que se haya recibido el importe en nuestra cuenta.</p>
                    {/* Aquí puedes agregar los logos de los bancos */}
                    <p>Yape / Plim</p>
                    <p>Tus datos personales se utilizarán para procesar tu pedido, mejorar tu experiencia en esta web y otros propósitos descritos en nuestra política de privacidad.</p>
                    <label>
                        <input type="checkbox" required />
                        He leído y estoy de acuerdo con los términos y condiciones de la web *
                    </label>
                    <button type="submit">Realizar el pedido</button>
                </div>
            </div>
            <PiePagina />
        </div>


    );
};

export default Checkout;
