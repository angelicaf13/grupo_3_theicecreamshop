const path = require('path');

const fs = require('fs');
const jsonString = fs.readFileSync(path.resolve(__dirname,'./products.json'), 'utf-8');
const products = JSON.parse(jsonString);


const productsControlador = {
    detail: (req,res)=>{
        res.render(path.resolve(__dirname,'../views/products/productDetail'));
    },
    list: (req,res)=>{
        res.render(path.resolve(__dirname,'../views/products/productList'), {listaProductos: products});
    },
    add: (req,res)=>{
        res.render(path.resolve(__dirname,'../views/products/addProduct'));
    },
    update: (req,res)=>{
        res.render(path.resolve(__dirname,'../views/products/updateProduct'));
    }
}

module.exports = productsControlador;