import React, {Component} from 'react';

class TheLastProduct extends Component{
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
									<tbody>
										{this.state.productsList.map((product)=>{
											return(
												<ListP product = {product}/>
											)
										})}
									</tbody>
    )
}
}

const ListP = (product) =>{
	return(
		<tr>
		<td>{product.id_product}</td>
		</tr>
	)
}
export default TheLastProduct;