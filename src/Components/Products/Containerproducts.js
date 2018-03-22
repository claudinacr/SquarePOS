import React from 'react';
import Products from './Products';
import Detail from './Detail';
import Encabezado from './Encabezado';
import Date from './Date';


const Containerproducts = () =>(
  <div className='Containerall'>
    <Encabezado></Encabezado>
    <Date></Date>
    <div className='Containerproducts'>
    <div className='Containerallproduct'>
        <Products></Products>
    </div>
    <Detail>
          
    </Detail>
    </div>
  </div>
)
export default Containerproducts;