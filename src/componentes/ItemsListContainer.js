import React, {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom'
import ItemList from './ItemList';
import { getProducts } from './mocks/FakeApi';



const ItemsListContainer = ({objetos,descripcion}) => {
    
        
    const[listaProductos,setListaproductos] = useState([])
    const[cargando,setCargando] = useState(false)

        const{categoryId} = useParams()
       

        useEffect(()=>
        {
            setCargando(true)
            getProducts.then((res)=> {
                if(categoryId)
                {
                    setListaproductos(res.filter((prod)=> prod.category === categoryId))
                    
                }else
                {
                    setListaproductos(res)
                }
            })

            .catch((error)=>console.log(error))
            .finally(()=>setCargando(false))
        },[categoryId])
        
        
        return (
            <div className='itemColection'>
        
              <div className='contenedorItemListas'>   
              {cargando ? <p className='Cargando'>cargando</p> : <ItemList listaProductos= {listaProductos} />}   
                </div>
            </div>
          );
        };
        export default ItemsListContainer ;
    