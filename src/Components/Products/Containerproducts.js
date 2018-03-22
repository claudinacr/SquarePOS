import React from 'react';
import Products from './Products';
import Detail from './Detail';
import Date from './Date';


const Containerproducts = () =>(
  <div className='Containerall'>
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