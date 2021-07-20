const path = require('path');

const fs = require('fs');
const jsonString = fs.readFileSync(path.resolve(__dirname,'../data/products.json'), 'utf-8');
const products = JSON.parse(jsonString);


const productsControlador = {
    detail: (req,res)=>{
        let idProducto = req.params.id;
        res.render('./products/productDetail', {idProducto, listaProductos: products});
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