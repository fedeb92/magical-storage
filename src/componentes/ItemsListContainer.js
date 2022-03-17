import React from 'react';


const ItemsListColection = ({objetos,descripcion}) => {
    return( 
    
    <div className='itemColection'>
        <h2>coleccion</h2>
        <h2 className='objColocado'>{objetos} </h2>    
        <p>{descripcion}</p>
    </div>
    );

}

export default ItemsListColection