import React from 'react';
import Grafico1 from './Grafico1';
import Grafico2 from './Grafico2';
import Grafico3 from './Grafico3';
import ContainerFiltro from './ContainerFiltro';
import './Flujos.css'

const Containerflujo = () => (
  <div className='Containerflujo'>
    <div className="Filtro">
      <ContainerFiltro />
    </div>
    <div className="contenedorGraficos">
      <div className="graficos">
        <Grafico1 />
        <Grafico1 />
      </div>
      <div className="graficoGrande">
        <Grafico3 />
        <Grafico2 />
      </div>
    </div>
  </div>
)

export default Containerflujo;

