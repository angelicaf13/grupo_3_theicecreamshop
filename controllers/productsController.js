const path = require('path');
const productsControlador = {
    detail: (req,res)=>{
        res.sendFile(path.resolve(__dirname,'../views/products/productDetail.html'));
    },
    list: (req,res)=>{
        res.sendFile(path.resolve(__dirname,'../views/products/productList.html'));
    },
    add: (req,res)=>{
        res.render(path.resolve(__dirname,'../views/products/addProduct'));
    },
    update: (req,res)=>{
        res.sendFile(path.resolve(__dirname,'../views/products/updateProduct.html'));
    }
}
module.exports = productsControlador;