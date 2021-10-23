import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ProductList extends Component{
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
		<main className="main-product-list">
			<div className="mySlides">
            <h2 style={{color: 'black', textAlign: 'center', paddingTop:'15px'}}>LISTA DE PRODUCTOS</h2>
            </div>
			<div className="productos"style={{marginLeft:'85px', paddingBottom:'15px'}}>
			{this.state.productsList.map((product)=>{
				return(
		<Link to={`/detailProduct/${product.id_product}`} exact="true">
        <article className="product-container">
            <div>
            <img src={product.productImage} />
            </div>
            <h4 style={{fontSize: '18px'}}> {product.brand.name}  {product.flavor.name}  Ice Cream</h4>
        </article>
		</Link>
		)
	})}
	</div>
		</main>
    )
}
}
export default ProductList;



