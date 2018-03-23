import React, { Component } from 'react';
import ListadoVentas from './ListadoVentas';

class Ventas extends Component {
  render() {
    return (
      <div>
        <h2> Tus ventas del día</h2>
        <ListadoVentas/>
      </div>
    );
  }
}
 
export default Ventas;