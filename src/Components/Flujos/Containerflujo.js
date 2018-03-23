import React from 'react';
import Grafico1 from './Grafico1';
import Grafico2 from './Grafico2';
import Grafico3 from './Grafico3';
import Grafico4 from './Grafico4';
import Grafico5 from './Grafico5';
import ContainerFiltro from './ContainerFiltro';
import './Flujos.css'

const Containerflujo = () => (
  <div className='Containerflujo'>
    <div className="Filtro">
      <ContainerFiltro />
    </div>
    <div className="contenedorGraficos">
      <div className="graficosbarra">
        <Grafico1 />
        <Grafico3 />
      </div>
      <div className="graficostorta">
        <Grafico4 />
        <Grafico5 />
    
      </div>
    </div>
  </div>
)

export default Containerflujo;

