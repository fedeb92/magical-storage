
import React, { useState } from 'react';

const Cart = ({stock,initial,onAdd}) => {
const[contador,setContador]=useState(0);
const addToCount = () =>
{
    
    if(contador <stock)
    {
        setContador((prevCount) => prevCount+1);
    }
}

const substractToCount = () =>{
    if( contador === 0 ){
      return;
    } 
    if( contador  > 0 ) {
      setContador((prevCount) => prevCount - 1);
    } 
   };
const addToCart = () =>
{
    onAdd(contador);
}

return <div  className='contadorCart'>

    

<div className = "ContenedorContador">    
<button onClick={addToCount} type="button" class="btnCard btnW btn-secondary">+</button>
<p className='contador'>{contador}</p>
<button  onClick={substractToCount} type="button" class="btnCard btn-secondary">-</button>
  </div>   

  <div> 
   <button onClick={addToCart} type="button" class="btnCarrito">ADD</button></div>
    </div>;
  ;
 } 
  export default Cart;
