import React from "react";
import { Link } from 'react-router-dom';
import Cart from "./ItemCount";

const stock = 10;
const initial =1;
const onAdd =(contador) =>{
    console.log('click', contador);
};

const ItemDetail = ({productDetail}) =>{
   const {img, producto, precio, imgDetail, descripcionDetail, pjclaseH } = productDetail
  
    return(
        <div className="contenedorDetail">
           <div className="contenedorMuestraImg">
            <div className="contenedorMiniMuestra">
                <div className="miniProduct">
                    <a href="" ></a>
              <img className="imgDetail" src={ imgDetail} alt={producto} />
              <img className="imgDetail" src={img} alt={producto} />
              <img className="imgDetail" src={img} alt={producto} /> 
                </div>
            </div>
            <div className="contenedorProductoVista">
           <img className="productoI" src={img} alt={producto} />
        </div>
           </div>
            <div className="detailProduct">
                <div className="contenedorInfDetail">
            <h2 className="tituloDetail">{producto} </h2> 
            <p className="descripcionProducto"> {descripcionDetail} </p>
            <p className="precioDetail"> {precio} </p>
            <hr />
             <div className="contenedorTallas">
                 <p>Selecciona para que clase de personaje</p>
                 <div className="tallas">
                    <p className="mago">{pjclaseH} </p> 
                    <p className="mago">{pjclaseH} </p> 
                    <p className="mago">{pjclaseH} </p> 
                 </div>
             </div>
             <hr />
             </div>

             <div className="contenedorConteoCart">
             <p className="parrafoCantidad">Selecciona cantidad </p>
    <div className="cartAdd" href={"#/"}>  <span> <Cart stock={stock} initial={initial} onAdd={onAdd} /> </span></div>
 </div>
          
            </div>
        </div>
    )
}
export default ItemDetail;