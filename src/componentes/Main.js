import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Productos from './Productos/';
import Ventas from './Ventas/';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="menu">
            <li><NavLink to="/productos">Productos</NavLink></li>
            <li><NavLink to="/ventas">Ventas</NavLink></li>
          </ul>
          <div className="contenido">
            <Route path="/productos" component={Stuff}/>
            <Route path="/ventas" component={Contact}/>
          </div>
        </div>
      </HashRouter>  
    );
  }
}
 
export default Main;