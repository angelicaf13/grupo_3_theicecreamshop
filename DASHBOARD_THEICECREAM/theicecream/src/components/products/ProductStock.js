import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ProductStock extends Component{
	constructor(){
        super()
        this.state ={
			productsList:[]
        }
        }
    componentDidMount(){
        fetch("api/products/")
            .then(respuesta =>{ return respuesta.json()})
            .then(products =>{
        this.setState({productsList: products.data})})
            .catch(error => console.log(error))
            }
	render(){
    return(
		<main class="main-product-list">
			<div className="mySlides">
            <h2 style={{color: 'black', textAlign: 'center', paddingTop:'15px'}}>CANTIDAD EN ALMACÉN POR PRODUCTO</h2>
            </div>
			<div class="productos"style={{marginLeft:'85px', paddingBottom:'15px'}}>
			{this.state.productsList.map((product)=>{
				return(
        <div>
            <article class="user-container" style={{width: '150px'}}>
            <h2 style={{fontSize: '18px', textAlign: 'justify'}}>Sabor:</h2>
            <p style={{fontSize: '15px', textAlign: 'center'}}>   {product.flavor.name}    </p>
            <h2 style={{fontSize: '18px', textAlign: 'justify'}}>Marca:</h2>
            <p style={{fontSize: '15px', textAlign: 'center'}}>  {product.brand.name}      </p>
            <br></br>
            <h2> {product.stock} pzas</h2>
            </article>
        </div>
		)
	})}
	</div>
		</main>
    )
}
}
export default ProductStock;



