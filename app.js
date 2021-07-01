const express = require('express');
const app = express();
const path = require('path');

console.log(__dirname);
const publicPath= path.resolve(__dirname, './public');
console.log(publicPath);

app.use(express.static(publicPath));
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/profile.html'));
});
app.get('/index',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/index.html'));
});
app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
});
app.get('/productCar',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/productCar.html'));
});
app.get('/productDetail',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/productDetail.html'));
});
app.get('/productList',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/productList.html'));
});
app.get('/profile',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/profile.html'));
});
app.get('/register',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
});
app.listen(3000,()=> console.log('Servidor corriendo en el puerto 3000'));