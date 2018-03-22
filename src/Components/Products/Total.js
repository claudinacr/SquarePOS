import React from 'react';
import ModalTotal from './Modal';

const Total = () => (
  <div className='Total'>
    <div className='DetailCart'>

    </div>
    <div className='totalCart'>
      <button className='buttonTotal'>Total &nbsp;$<span className='TotalR'>0</span></button>
    </div>
    <div className='Cobrar'>
    <button className='buttonCobrar'>Cobrar</button>

    </div>
  </div>
)
export default Total;