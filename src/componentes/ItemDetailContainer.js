import React, { useEffect, useState } from "react";
import { getProducts } from "../componentes/mocks/FakeApi";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () =>{
const [productDetail, setProductDetail] = useState({})
const [cargandin, setCargandin] = useState(false)

const {itemId} = useParams()

    useEffect(()=>{
      setCargandin(true)
        getProducts
        .then((res) => setProductDetail(res.find((item) => item.id === itemId)))
        .catch((error) => console.log(error))
        .finally(() => setCargandin(false))

    }, [])
   

    return(
        <div>
            { cargandin ? <p>cargandin</p> : <ItemDetail productDetail={productDetail} /> }
  
        </div>
    )
}

export default ItemDetailContainer;