const express = require('express');
const app = express();
const path = require('path');

console.log(__dirname);
const publicPath= path.resolve(__dirname, './public');
console.log(publicPath);

app.use(express.static(publicPath));
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/main/index.html'));
});
app.get('/index',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/main/index.html'));
});
app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/users/login.html'));
});
app.get('/productCar',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/users/productCar.html'));
});
app.get('/productDetail',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/products/productDetail.html'));
});
app.get('/productList',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/products/productList.html'));
});
app.get('/profile',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/users/profile.html'));
});
app.get('/register',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/users/register.html'));
});
app.get('/addProduct',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/products/addProduct.html'));
});
app.listen(3000,()=> console.log('Servidor corriendo en el puerto 3000'));