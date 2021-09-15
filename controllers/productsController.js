const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const Product = require('../models/Product');
const db = require("../database/models");

// ************ Express Validator Require ************
const { validationResult } = require('express-validator');
//const { where } = require('../../clase-33-crud/CRUD/node_modules/sequelize/types');

const productsControlador = {
    detail: (req,res)=>{

        db.Product.findByPk(req.params.id, {
            include: [{association: "brand"}, {association: "flavor"}]
        })
        .then(product => {
            db.Product.findAll({
                where: {
                    id_brand: product.id_brand,
                    id_flavor: product.id_flavor
                },
                include: [{association: "size"}]
            }).then(sizes => {
            res.render('./products/productDetail', { producto : product, allSizes: sizes });

            })
        })

        // Version anterior donde se obtiene desde el JSON
        // let idProducto = req.params.id;
        // res.render('./products/productDetail', {idProducto, listaProductos: products});
    },
    list: (req,res)=>{
        db.Product.findAll({
            include: [{association: "brand"}, {association: "flavor"}],
            group: ['id_brand', 'id_flavor']
        })
        .then(products => {
            console.log(typeof products)
            res.render('./products/productList', {listaProductos: products});
        })
        //res.render('./products/productList', {listaProductos: products});
    },
    create: (req,res)=>{
        let brands = db.Brand.findAll();
        let flavors = db.Flavor.findAll();
        let sizes = db.Size.findAll();

        Promise
        .all([brands, flavors, sizes])
        .then(function([allBrands, allFlavors, allSizes]) {
            res.render('./products/addProduct', { allBrands, allFlavors, allSizes })
        })
    },
    store: (req, res) => {
        const errors = validationResult(req);
        const {id_brand, id_flavor, description, id_size, price, stock} = req.body;
        const status = 1;
        
        if (req.file === undefined) {
            productImage = 'default-image.png';
          } else {
            productImage = req.file.filename;
        }

        if (errors.isEmpty()) {
            db.Product.create({
                id_brand,
                id_flavor,
                description, 
                id_size,
                price,
                stock,
                status,
                productImage
            })

            .then(() => {
                res.redirect('/products/productList');
            })
        } else {
                res.render('./products/addProduct', { 
                    errors: errors.mapped,
                    old: req.body,
                    allBrands: db.Brand.findAll(), 
                    allFlavors: db.Flavor.findAll(), 
                    allSizes: db.Size.findAll()})
        }
    },
    edit: (req,res)=>{
        const id = parseInt(req.params.id);
		const productToEdit = Product.findByPk(id);

        res.render('./products/updateProduct', {productToEdit : productToEdit});
    },
    update: (req, res) => {

            let errors = validationResult(req);
            //const id = parseInt(req.params.id);
            //const productToEdit = Product.findByPk(id);
            const id = parseInt(req.params.id);
            const productToEdit = products.find(product => product.id === id);
        
            if (!errors.isEmpty()) {
                return res.render('./products/updateProduct', {
                    productToEdit: productToEdit,
                    errors : errors.mapped(), 
                    oldData : req.body 
                })
            } 
    
                productToEdit.brand = req.body.brand;
                productToEdit.flavor = req.body.flavor;
                productToEdit.price1 = parseInt(req.body.price1);
                productToEdit.price2 = parseInt(req.body.price2);
                productToEdit.price3 = parseInt(req.body.price3);
                productToEdit.description = req.body.description;
                productToEdit.cant1 = parseInt(req.body.cant1);
                productToEdit.cant2 = parseInt(req.body.cant2);
                productToEdit.cant3 = parseInt(req.body.cant3);


            if (req.file === undefined) {
				productToEdit.image = productToEdit.image;
			  } else {
                fs.unlinkSync('./public/img/products/' + productToEdit.image);
                productToEdit.image = req.file.filename;
              };

            productsJSON = JSON.stringify(products, null, 2);
            fs.writeFileSync(productsFilePath, productsJSON);
            return res.redirect('/products/productList');
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