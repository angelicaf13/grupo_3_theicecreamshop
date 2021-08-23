const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const Product = require('../models/Product');

// ************ Express Validator Require ************
const { validationResult } = require('express-validator');

const productsControlador = {
    detail: (req,res)=>{
        let idProducto = req.params.id;
        res.render('./products/productDetail', {idProducto, listaProductos: products});
    },
    list: (req,res)=>{
        res.render('./products/productList', {listaProductos: products});
    },
    create: (req,res)=>{
        res.render('./products/addProduct');
    },
    store: (req, res) => {
        const resultValidation = validationResult(req);

        if (!resultValidation.isEmpty()) {
			return res.render('./products/addProduct', { 
				errors : resultValidation.mapped(), 
				oldData : req.body 
			});
		}

        let productToCreate = {
			...req.body,
			present1: "1/2 litro",
            present2: "1 litro",
            present3: "1.89 litro",
            price1: parseInt(req.body.price1),
            price2: parseInt(req.body.price2),
            price3: parseInt(req.body.price3),
            cant1: parseInt(req.body.cant1),
            cant2: parseInt(req.body.cant2),
            cant3: parseInt(req.body.cant3),
		}

        if (req.file === undefined) {
            productToCreate.image = 'default-image.png';
          } else {
            productToCreate.image = req.file.filename;
        }

		let productCreated = Product.create(productToCreate);

		return res.redirect('/products/productList');
    },
    edit: (req,res)=>{
        const id = parseInt(req.params.id);
		const productToEdit = products.find(product => product.id === id);

        res.render('./products/updateProduct', {productToEdit : productToEdit});
    },
    update: (req, res) => {
        let errors = validationResult(req);
            const id = parseInt(req.params.id);
		const productToEdit = products.find(product => product.id === id);
		
			productToEdit.brand = req.body.brand;
            productToEdit.flavor = req.body.flavor;
			productToEdit.price1 = parseInt(req.body.price1);
            productToEdit.price2 = parseInt(req.body.price2);
            productToEdit.price3 = parseInt(req.body.price3);
			productToEdit.description = req.body.des;
            productToEdit.cant1 = parseInt(req.body.cant1);
            productToEdit.cant2 = parseInt(req.body.cant2);
            productToEdit.cant3 = parseInt(req.body.cant3);
			
			if (req.file === undefined) {
				productToEdit.image = productToEdit.image;
			  } else {
                fs.unlinkSync('./public/img/products/' + productToEdit.image);
                productToEdit.image = req.file.filename;
              }
        if (errors.isEmpty()) {
		productsJSON = JSON.stringify(products, null, 2);
		fs.writeFileSync(productsFilePath, productsJSON);
		res.redirect('/products/productList')
        }else{
        res.render('./products/updateProduct', {productToEdit : productToEdit, errors: errors.mapped(), old: req.body});
        }
	},
    destroy: (req,res)=>{
        const id = parseInt(req.params.id);
		const productToDelete = products.find(product => product.id === id);


        if (productToDelete.image != 'default-image.png') {
            fs.unlinkSync('./public/img/products/' + productToDelete.image);
        }
        		
		products.splice(products.indexOf(productToDelete), 1);
		
		productsJSON = JSON.stringify(products, null, 2);

		fs.writeFileSync(productsFilePath, productsJSON);

		res.redirect('/products/productList');
    }
}

module.exports = productsControlador;