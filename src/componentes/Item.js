import React from 'react';
import Cart from "./ItemCount";
import { Link } from "react-router-dom"
const stock = 14;
const initial = 1;
const onAdd =(contador) =>
{
    console.log('click',contador);
};

export const Item = ({id,img, producto, precio, descripcion,btn}) => {


    return (
    
        <div  className="contenedorCardInf">
            <div className="infContenedor">
        
            <img src={img} className="imgProd" />  
            <hr></hr>
            <div className="contendorNombre">
                <h3 className="tituloProducto">  {producto} </h3>
                <p className="precio">  {precio} </p>
            </div>  
        
            <p className="parrafoCard"> {descripcion} </p>
            <div className="contenedorConteo">
                <div className="cartC" href="#">  <span> <Cart stock={stock} initial={initial} onAdd={onAdd} /> </span></div>
                </div>
            </div>
        
            <div className="contenedorBtn">
                <Link to={`/detail/${id}`}><button className="btnCatalogo">{btn} </button></Link>
            </div>
        </div>
    );
};

