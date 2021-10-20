import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/img/logo_errores/logotipo-sin.png';
function Header(){
    return (
<header>
  <nav>
    <div className="top-nav">
        <div className="nav-option" id="desktop-op"/>
        <div className="nav-option" id="desktop-op">
        <a href="/index#contactanos-link">PRODUCTOS</a>
        </div>
        <div className="nav-option" id="desktop-op"/>
        <div class="nav-option" id="desktop-op">
        <img className="logo" src={logo} />
        </div>
        <div className="nav-option" id="desktop-op"/>
        <div className="nav-option" id="desktop-op">
        <a href="/index#contactanos-link">USUARIOS</a>
        </div>
        <div className="nav-option" id="desktop-op"/>
    </div>
    <div className="top-nav">
      <div className="nav-option" id="desktop-op">
      <Link to="/productList" exact="true">Listado</Link>
      </div>
      <div class="nav-option" id="desktop-op">
      <Link to="/totalProduct" exact="true">Total</Link>
      </div>
      <div class="nav-option" id="desktop-op">
      <Link to="/theLastProduct" exact="true">Último agregado</Link>
      </div>
      <div className="nav-option" id="desktop-op"/>
      <div className="nav-option" id="desktop-op">
        <a href="/userList">Listado</a>
      </div>
      <div className="nav-option" id="desktop-op">
        <a href="/totalUser">Total</a>
      </div>
      <div className="nav-option" id="desktop-op">
        <a href="/theLastUser">Último agregado</a>
      </div>
    </div>
  </nav>
</header>
)
}
export default Header;
