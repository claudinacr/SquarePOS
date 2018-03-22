import React from 'react';
import Products from './Products';
import Detail from './Detail';
import Header from './Header';

const Containerproducts = () =>(
  <div className='Containerproducts'>
    <div className='Containerallproduct'>
        <Products></Products>
    </div>
   
    <Detail></Detail>
  </div>
)
export default Containerproducts;