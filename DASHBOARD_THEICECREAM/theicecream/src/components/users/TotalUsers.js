import React, {Component} from 'react';
class TotalUser extends Component{
    constructor(){
        super()
        this.state ={
			valor: ''
        }
        }
    componentDidMount(){
        fetch('api/users')
            .then(respuesta =>{ return respuesta.json()})
            .then(users =>{
            this.setState({valor: users.meta.count})}) //CHECAR API
            .catch(error => console.log(error))
            }
	render(){
    return(
        <main>
            <div className="mySlides">
            <h2 style={{color: 'black', textAlign: 'center', paddingTop: '15px'}}>TOTAL DE USUARIOS</h2>
            <h2 style={{color: 'black', textAlign: 'center', paddingBottom: '15px'}}>{this.state.valor}</h2>
            </div>
        </main>
    )
    }
}
export default TotalUser;