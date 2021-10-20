import React, {Component} from 'react';
class TotalProduct extends Component{
    constructor(){
        super()
        this.state ={
			valor: ''
        }
        }
    componentDidMount(){
        fetch('api/products')
            .then(respuesta =>{ return respuesta.json()})
            .then(products =>{
            this.setState({valor: products.meta.count})})
            .catch(error => console.log(error))
            }
	render(){
    return(
        <main>
            <div className="mySlides">
            <h2 style={{color: 'black', textAlign: 'center', paddingTop: '15px'}}>TOTAL DE PRODUCTOS</h2>
            <h2 style={{color: 'black', textAlign: 'center', paddingBottom: '15px'}}>{this.state.valor}</h2>
            </div>
        </main>
    )
    }
}
export default TotalProduct;