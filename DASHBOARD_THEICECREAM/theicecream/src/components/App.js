import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
//PRODUCTS
import TotalProduct from './products/TotalProduct';
import ProductList from './products/ProductList';
import TheLastProduct from './products/TheLastProduct';
import ProductStock from './products/ProductStock';
import Brands from './products/Brands';
//USERS
import TotalUser from './users/TotalUsers';
import UsersList from './users/UsersList';
import TheLastUSer from './users/TheLastUser';
//ERROR404
import Error404 from './Error404';

function App() {
  return (
    <div>
       <Header />
    <Switch>
      <Route path="/" exact={true} component={Main} /> 
      <Route path="/totalProduct" exact={true} component={TotalProduct} />
      <Route path="/productList" exact={true} component={ProductList} />
      <Route path="/theLastProduct" exact={true} component={TheLastProduct} />
      <Route path="/productStock" exact={true} component={ProductStock} />
      <Route path="/brands" exact={true} component={Brands} />
      <Route path="/totalUser" exact={true} component={TotalUser} />
      <Route path="/userList" exact={true} component={UsersList} />
      <Route path="/theLastUser" exact={true} component={TheLastUSer} />
      <Route component={Error404} />
    </Switch>
        <Footer />
    </div>
  );
}

export default App;
