import React, { useEffect, useState } from "react";
//import { Container } from "react-bootstrap"
import { PedirDatos } from "./Helper";
import ItemDetail from "../componentes/ItemDetail";
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () =>{
const [productDetail, setDetail] = useState(null)
const [loading, setLoading] = useState(true)

const {itemId} = useParams()

console.log = (itemId)


    useEffect(()=>{
        //setCargandin(true)
        PedirDatos()
            .then((res) => setDetail
            (res.find((prod) => prod.id === itemId)))
        
        //.catch((error) => console.log(error))
        //.finally(() => setCargandin(false))

    }, [])
   

    return(
        <div>
            { loading ? <p>Item Detail</p> : <ItemDetail productDetail={productDetail} /> }
        </div>
    )
}

export default ItemDetailContainer;