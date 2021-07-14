const path = require('path');

const fs = require('fs');
const jsonString = fs.readFileSync(path.resolve(__dirname,'./products.json'), 'utf-8');
const products = JSON.parse(jsonString);


const productsControlador = {
    detail: (req,res)=>{
        res.render('./products/productDetail');
    },
    list: (req,res)=>{
        res.render('./products/productList', {listaProductos: products});
    },
    add: (req,res)=>{
        res.render('./products/addProduct');
    },
    update: (req,res)=>{
        res.render('./products/updateProduct');
    }
}

module.exports = productsControlador;