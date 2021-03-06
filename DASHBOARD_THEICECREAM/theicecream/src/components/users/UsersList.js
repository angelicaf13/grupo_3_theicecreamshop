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
        this.setState({usersList: users.users})})
            .catch(error => console.log(error))
            }
	render(){
        return(
    <main class="main-users-list">
        <div className="mySlides">
            <h2 style={{color: 'black', textAlign: 'center', paddingTop:'10px', paddingBottom: '15px'}}>LISTA DE USUARIOS</h2>
            </div>
          <div className="container-main-users-list">
            {this.state.usersList.map((user)=>{
				return(
        <div>
            <article className="user-container" style={{maxWidth: '500px', width: '250px', minHeight:'50px', height: '100px'}}>
                <img className="imagen-user" src={user.profileImage}/>
                <h2> {user.first_name} {user.last_name} </h2>
                <p style={{fontSize: '14px', textAlign: 'center'}}> {user.email} </p>
            </article>
        </div>
		) 
                })}  
        </div>
      </main>
      )
      }
    }
export default UsersList;
