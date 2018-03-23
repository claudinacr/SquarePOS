import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Containerproducts from './Products/Containerproducts';
import Containerflujo from './Flujos/Containerflujo';
import ContainerVentas from './Ventas/ContainerVentas';
import logo from './logo.png';
import './Main.css';

class Main extends Component {
  render() {
    return (
      
      <HashRouter>
        <div>
          <ul className="menu">
            <li className="logo"><img src={logo} alt="logo"/></li>
            <li className="usuario"><h4>¡Bienvenida! <strong>Jane Doe</strong></h4></li>
            <li><NavLink to="/Products/Containerproducts">Productos</NavLink></li>
            <li><NavLink to="">Cobro</NavLink></li>
            <li><NavLink to="/Flujos/Containerflujo">Flujo</NavLink></li>
            <li><NavLink to="/Ventas/ContainerVentas">Cierre de Caja</NavLink></li>
          </ul>
          <div className="contenido">
            <Route exact path="/Products/Containerproducts" component={Containerproducts}/>
            <Route path="/Ventas/ContainerVentas" component={ContainerVentas}/>
            <Route path="/Flujos/Containerflujo" component={Containerflujo}/>

          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;