import React from 'react';
import { Item } from "./Item";
import ItemInf from './ItemList';



const ItemsListColection = ({objetos,descripcion}) => {
    return( 
    
    <div className='itemColection'>
        <h2>coleccion</h2>
        <h2 className='objColocado'>{objetos} </h2>    
        <p>{descripcion}</p>
        <div >
         <span> <Item/> </span>

        </div>

        <div className="contenedorCard">
         <span> <ItemInf/> </span>


        </div>
        
    </div>

    

    );
    

};



export default ItemsListColection;