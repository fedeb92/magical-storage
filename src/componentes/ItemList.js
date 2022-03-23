import React  from "react";
import { Item } from "./Item";
import prod01 from '../img/brazales1.png';
import prod02 from '../img/brazales2.png';
import prod03 from '../img/brazales3.png';
import prod04 from '../img/brazales4.png';



const ItemCard = [

    {   id: 1,
        img: prod01,
        producto:'brazales de libertad arcana',
        precio: '2300 ARG',
        descripcion:'estos brazales de cuero azul ricamente adornados tiene imagenes de aguilas doradas en pleno vuelo',
        btn:'Ver más'
    
    },
    
    {   id: 2,
        img: prod02,
        producto:'brazales de poder',
        precio: '4100 ARG',
        descripcion:'estos brazalas de bronce tiene grabad de imagenes de cuernos de toro',
        btn:'Ver más'
    
    },
    
    
    {   id: 3,
        img: prod03,
        producto:'brazales de represalia',
        precio: '5000 ARG',
        descripcion:'estos brazales de duro cuero parece resistentes aunque flexibles',
        btn:'Ver más'
    
    },
    {   id: 4,
        img: prod04,
        producto:'brazales de gran colision',
        precio: '1500 ARG',
        descripcion:'estos grusos brazales de platino tiene grabado un dibujo de martillos cruzados',
        btn:'Ver más'
    
    },
    
    ];
    
    const promesaCard = new Promise((resolve , reject)=>{
     setTimeout(() =>{
    
        const Items   = ItemCard;
       resolve ( Items );
    
      },2000 )
    
    
    });


    export const ItemInf = () =>{
        return (
            <div className="contenedorInfoCard">
                {
                  ItemCard.map ((item )=> (
    
                  <Item producto={item.producto} precio = {item.precio} descripcion = {item.descripcion} img ={item.img} btn = {item.btn}  />
    
                  ))}
            </div>
        )
    };
    
    
    export default ItemInf; 
