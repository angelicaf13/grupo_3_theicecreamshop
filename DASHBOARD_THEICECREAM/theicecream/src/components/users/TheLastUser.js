import React, {Component} from 'react';

class TheLastUser extends Component{
    constructor(){
        super()
        this.state ={
			usersList:[],
            ultimo:[]
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
                <h2 style={{color: 'black', textAlign: 'center', paddingTop:'10px', paddingBottom: '15px'}}>ÚLTIMO USUARIO AGREGADO</h2>
                </div>
              <div className="container-main-users-list">
                {this.state.usersList.map((user)=>{
                    if(user.id_user == this.state.usersList.length){
                    return(
            <div>
                <article className="user-container" style={{maxWidth: '500px', width: '400px', minHeight:'50px', height: '100px'}}>
                    <h2> {user.first_name} {user.last_name} </h2>
                    <p style={{fontSize: '18px', textAlign: 'center'}}> {user.email} </p>
                </article>
            </div>
            ) 
         } })}  
            </div>
          </main>
          )
          }
        }
export default TheLastUser;
