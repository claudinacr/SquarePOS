import React, { Component } from 'react';
import ContenedorVenta from './componentesListadoVentas/ContenedorVenta';
import './ventas.css';

class ListadoVentas extends Component {
 render() {
   return (
    <div className="ListadoVentas">
      <ContenedorVenta />
      <ContenedorVenta />
    </div>
   );
 }
}

export default ListadoVentas;