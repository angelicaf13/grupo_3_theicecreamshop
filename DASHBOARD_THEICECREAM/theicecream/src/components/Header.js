import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/img/logo_errores/logotipo-sin.png';
class Header extends Component{
  constructor(){
    super()
    this.state ={
    clase: '',
    clase2: ''
    }
    }
  color(){
      this.setState({clase: 'color'})
  }
  color2(){
      this.setState({clase: 'color2'})
  }
  color3(){
    this.setState({clase2: 'color'})
}
  color4(){
    this.setState({clase2: 'color2'})
}
  render(){
    return (
<header>
  <nav>
    <div className="top-nav">
        <div className="nav-option" id="desktop-op"/>
        <div className={` nav-option ${this.state.clase}`} id="desktop-op">
        <a onMouseOver={()=>{this.color()}} onMouseOut={()=>{this.color2()}}>PRODUCTOS</a>
        </div>
        <div className="nav-option" id="desktop-op"/>
        <div class="nav-option" >
        <img className="logo" src={logo} />
        </div>
        <div className="nav-option" id="desktop-op"/>
        <div className={` nav-option ${this.state.clase2}`} id="desktop-op">
        <a onMouseOver={()=>{this.color3()}} onMouseOut={()=>{this.color4()}}> USUARIOS</a>
        </div>
        <div className="nav-option" id="desktop-op"/>
    </div>
    <div className="top-nav">
      <div className="nav-option" id="desktop-op">
      <Link to="/productList" exact="true">Listado</Link>
      </div>
      <div className="nav-option" id="desktop-op">
      <Link  to="/totalProduct" exact="true">Total</Link>
      </div>
      <div className="nav-option" id="desktop-op">
      <Link to="/theLastProduct" exact="true">Último agregado</Link>
      </div>
      <div className="nav-option" id="desktop-op"/>
      <div className="nav-option" id="desktop-op">
      <Link to="/userList" exact="true">Listado</Link>
      </div>
      <div className="nav-option" id="desktop-op">
      <Link to="/totalUser" exact="true">Total</Link>
      </div>
      <div className="nav-option" id="desktop-op">
      <Link to="/theLastUser" exact="true">Último agregado</Link>
      </div>
    </div>
    <div className="top-nav" style={{paddingTop:'10px'}}>
      <div className="nav-option" id="desktop-op">
      <Link to="/productStock" exact="true">Stock por producto</Link>
      </div>
      <div className="nav-option" id="desktop-op">
      <Link to="/brands" exact="true"> Marcas</Link>
      </div>
      <div className="nav-option" id="desktop-op">
      <Link to="" exact="true"></Link>
      </div>
      <div className="nav-option" id="desktop-op"/>
      <div className="nav-option" id="desktop-op">
      <Link to="" exact="true"></Link>
      </div>
      <div className="nav-option" id="desktop-op">
      <Link to="" exact="true"></Link>
      </div>
      <div className="nav-option" id="inicio">
      <Link to="/" exact="true"> INICIO</Link>
      </div>
    </div>
  </nav>
</header>
)}
}
export default Header;
