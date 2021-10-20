import React from 'react';

function DetailProduct (props){
    const productos = [{id: 28, nombre: 'Ana'}]
    const id = props.match.params.id
    const producto = productos.find(product => product.id == id)
    return(
    <div>
    <h3>{producto.nombre}</h3>
    </div>
    )
   }
export default DetailProduct;