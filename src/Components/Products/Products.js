import React from 'react';
import data from './../../data/data';

const Products = () =>{
  return(
  
      data.map((producto)=>
        <div className='Products' key ={producto.code}>
            <img src={producto.image}/>
            <div className='Decription'>
            <p>{producto.title}</p>
            <p>{`$${producto.price}`}</p>
            </div>


            <button className='buttonItems' onClick={this.Search =()=>{
              const actual = document.querySelector('.TotalR').textContent
              document.querySelector('.TotalR').innerHTML='';
              document.querySelector('.TotalR').appendChild(document.createTextNode(parseInt(actual) + parseInt(producto.price)))
              
              const divContainer = document.createElement('div');
              divContainer.className='divContainer'
              const imagen = document.createElement('img');
              imagen.className='imagen';
              const imageLink = producto.image;
              const ContainerCart = document.querySelector('.DetailCart');
              imagen.setAttribute('src', imageLink)
              divContainer.appendChild(imagen)
              const divFlex = document.createElement('div');
              divFlex.className='divFlex';
              divFlex.appendChild(document.createElement('p')).appendChild(document.createTextNode(producto.title))
              const divPrice = document.createElement('div');
              divPrice.className='divPrice';
              const simbol = divPrice.appendChild(document.createElement('p')).appendChild(document.createTextNode('$'))
              const content = divPrice.appendChild(document.createElement('p')).appendChild(document.createTextNode(producto.price))
              divFlex.appendChild(simbol)
              divFlex.appendChild(content)
              divContainer.appendChild(divFlex)
              const buttonRemove = document.createElement('button');
              buttonRemove.className='buttonRemove';
              buttonRemove.innerText='Remove'
              divContainer.appendChild(buttonRemove)
              ContainerCart.appendChild(divContainer)
               buttonRemove.addEventListener('click', function(){
                const Contenedor = this.parentNode
                console.log(Contenedor)
                const Precio = this.parentNode.firstChild.nextSibling.lastChild.textContent
                console.log(Precio)
                const actuall = document.querySelector('.TotalR').textContent
                document.querySelector('.TotalR').innerHTML='';
                document.querySelector('.TotalR').appendChild(document.createTextNode(parseInt(actuall) - parseInt(Precio)))
                Contenedor.innerHTML='';

                })
            }}>
              Comprar</button>
        </div>

      )
  )
}
export default Products;