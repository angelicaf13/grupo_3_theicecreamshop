import React, {Component} from 'react';

class Brands extends Component{
	constructor(){
        super()
        this.state ={
			brandsList:[],
            valor: ''
        }
        }
    componentDidMount(){
        fetch("api/products/")
            .then(respuesta =>{ return respuesta.json()})
            .then(brands =>{
        this.setState({brandsList: brands.meta.brands, valor: brands.meta.brandsCount})})
            .catch(error => console.log(error))
            }
	render(){
    return(
        <main class="main-product-list">
            <div className="mySlides">
            <h2 style={{color: 'black', textAlign: 'center', paddingTop: '15px'}}>TOTAL:</h2>
            <h2 style={{color: 'black', textAlign: 'center', paddingBottom: '15px'}}>{this.state.valor}</h2>
            </div>
			<div className="mySlides">
            <h2 style={{color: 'black', textAlign: 'center', paddingTop:'15px'}}>LISTA:</h2>
            </div>
			<div class="productos"style={{marginLeft:'85px', paddingBottom:'15px'}}>
			{this.state.brandsList.map((brand)=>{
				return(
        <article class="product-container" style={{minHeight: '50px', }}>
            <h4 style={{color: 'black', fontSize: '20px'}}> {brand} </h4>
        </article>
		)
	})}
	</div>
		</main>
    )
}
}
export default Brands;



