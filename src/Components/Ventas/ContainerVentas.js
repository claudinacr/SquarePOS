import React from 'react';
import Date from './../Products/Date';
import Ventas from './Ventas';
import ContainerCierreCaja from './ContainerCierreCaja'
import './ventas.css'

const ContainerVentas = () =>(
  <div className='ContainerVentas'>
    <div className="listadoVentas">
      <Date />
      <Ventas />
    </div>
    <div className="cierreCaja">
      <ContainerCierreCaja/>
    </div>
  </div>
)
export default ContainerVentas;