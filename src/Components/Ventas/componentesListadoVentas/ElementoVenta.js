import React from 'react';
import NumeroVenta from './NumeroVenta';
import DetalleProducto from './DetalleProducto';
import TotalVenta from './TotalVenta';
import './../ventas.css'

const ElementoVenta = () =>(
  <div className='elementoVentas'>
    <NumeroVenta />
    <DetalleProducto />
    <TotalVenta />
  </div>
)

export default ElementoVenta;