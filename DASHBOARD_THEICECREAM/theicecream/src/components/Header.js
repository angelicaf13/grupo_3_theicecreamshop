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
        <a>PRODUCTOS</a>
        </div>
        <div className="nav-option" id="desktop-op"/>
        <div class="nav-option" id="desktop-op">
        <img className="logo" src={logo} />
        </div>
        <div className="nav-option" id="desktop-op"/>
        <div className="nav-option" id="desktop-op">
        <a> USUARIOS</a>
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
      <Link to="/totalBrands" exact="true"> Total marcas</Link>
      </div>
      <div class="nav-option" id="desktop-op">
      <Link to="" exact="true">NADA</Link>
      </div>
      <div className="nav-option" id="desktop-op"/>
      <div className="nav-option" id="desktop-op">
      <Link to="" exact="true">NADA</Link>
      </div>
      <div className="nav-option" id="desktop-op">
      <Link to="" exact="true">NADA</Link>
      </div>
      <div className="nav-option" id="desktop-op">
      <Link to="" exact="true">NADA</Link>
      </div>
    </div>
  </nav>
</header>
)
}
export default Header;
