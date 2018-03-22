import React from 'react';
import Products from './Products';
import Detail from './Detail';
import Header from './Header';
import Time from './../../Components/Products/Time';


const Containerproducts = () => (
  <div className='Containerproducts'>
    <Header>
      
    </Header>
    <div className='Timer'>
      
       <Time></Time>
    </div>
   
    <div className='Containerproductdetail'>
      <div className='Containerallproduct'>
        <Products></Products>
      </div>

      <Detail></Detail>
    </div>
  </div>
)
export default Containerproducts;