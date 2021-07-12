const path = require('path');
const productsControlador = {
    detail: (req,res)=>{
        res.render(path.resolve(__dirname,'../views/products/productDetail'));
    },
    list: (req,res)=>{
        res.render(path.resolve(__dirname,'../views/products/productList'));
    },
    add: (req,res)=>{
        res.render(path.resolve(__dirname,'../views/products/addProduct'));
    },
    update: (req,res)=>{
        res.render(path.resolve(__dirname,'../views/products/updateProduct'));
    }
}
module.exports = productsControlador;