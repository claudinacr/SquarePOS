import React from 'react';
import Filtro1 from './Filtro1';
import Filtro2 from './Filtro2';
import Filtro3 from './Filtro3';
import Filtro4 from './Filtro4';
import Filtro5 from './Filtro5';



const ContainerFiltro = () =>(
  <div className='Filtro'>
    <ul>
      <li><a><Filtro1 /></a></li>
      <li><a><Filtro2 /></a></li>
      <li><a><Filtro3 /></a></li>
      <li><a><Filtro4 /></a></li>
      <li><a><Filtro5 /></a></li>
    </ul>
  </div>
)

export default ContainerFiltro;