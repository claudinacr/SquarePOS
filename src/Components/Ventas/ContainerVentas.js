import React from 'react';
import Date from './../Products/Date';
import Ventas from './Ventas';
import ContainerCierreCaja from './ContainerCierreCaja';
import BotonCaja from './BotonCaja';
import './ventas.css';

const ContainerVentas = () => (
  <div className='ContainerVentas'>
    <div className="contenedorListadoVentas">
      <Date />
      <Ventas />
      <BotonCaja />
    </div>
    <div className="cierreCaja">
      <ContainerCierreCaja/>
    </div>
  </div>
)

export default ContainerVentas;