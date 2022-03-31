import { Item } from "./Item"
import React  from "react";



export const ItemList = ( {listaProductos} ) => {

    return (
        <div>    
            <h2>Productos</h2>   
            <hr/>
            <div className="row">
                { listaProductos.map( (el) => <Item key={el.id} {...el}/> )}
            </div> 
        </div>
    )
}
export default ItemList;