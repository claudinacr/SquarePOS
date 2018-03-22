import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import './Main.css';
import Containerproducts from './Products/Containerproducts.js';
import Containerflujo from './Flujos/Containerflujo'
/*import Ventas from './Ventas/Ventas';*/

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="menu">
            <li><NavLink to="/Products/Containerproducts">Productos</NavLink></li>
            <li><NavLink to="/Ventas/Ventas">Ventas</NavLink></li>
            <li><NavLink to="/Flujos/Containerflujo">Flujo</NavLink></li>
          </ul>
          <div className="contenido">
            <Route path="/Products/Containerproducts" component={Containerproducts}/>
            <Route path="/Ventas/Ventas" />
            <Route path="/Flujos/Containerflujo" component={Containerflujo}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;