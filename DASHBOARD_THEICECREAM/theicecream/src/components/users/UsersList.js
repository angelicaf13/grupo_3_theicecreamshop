import React, {Component} from 'react';
class UsersList extends Component{
    constructor(){
        super()
        this.state ={
			usersList:[]
        }
        }
    componentDidMount(){
        fetch("api/users/")
            .then(respuesta =>{ return respuesta.json()})
            .then(users =>{
        this.setState({usersList: users.data})})//CHECAR API
            .catch(error => console.log(error))
            }
	render(){
        return(
    <main class="main-users-list">
        <div className="mySlides">
            <h2 style={{color: 'black', textAlign: 'center', paddingTop:'10px', paddingBottom: '15px'}}>LISTA DE USUARIOS</h2>
            </div>
          <div class="container-main-users-list">
            <article class="user-container">
            {this.state.usersList.map((user)=>{
				return(
        <div>
                {/*<!-- <img class="imagen-user" src={}/> -->*/}
                <p > {user.first_name} + {user.last_name} </p>
                <h2> {user.category.name} </h2>
        </div>
		) 
                })}  
        </article>
        </div>
      </main>
      )
      }
    }
export default UsersList;
