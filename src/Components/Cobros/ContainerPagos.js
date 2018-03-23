import React, {Components} from 'react';
import Pagos from './Pagos';
import Recibo from './Recibo';

const ContainerPagos = () => (
  <div className='Containergral'>
    <Pagos />
    <Recibo />
  </div>
)

export default ContainerPagos;