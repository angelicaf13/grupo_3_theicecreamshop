const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const db = require("../database/models");
const { Op } = require("sequelize");

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
    list: (req, res)=>{

            db.Product.findAll({
                include: [{association: "brand"}, {association: "flavor"}],
                group: ['id_brand', 'id_flavor']
            })
            .then(products => {
                console.log("Todos los productos: " + products)
                res.render('./products/productList', {listaProductos: products});
                console.log("Lo del req.query: " + req.query)
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
        let brands = db.Brand.findAll();
        let flavors = db.Flavor.findAll();

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
                Promise
                .all([brands, flavors])
                    .then(function([allBrands, allFlavors]) {
                        res.render('./products/updateProduct', { 
                            producto : product, 
                            allSizes: sizes, 
                            allBrands, 
                            allFlavors });
                })
            })
        })
    },
    update: (req, res) => {
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
                let errors = validationResult(req);

                const {id_brand, id_flavor, description, price, stock} = req.body;

                if (req.file === undefined) {
                    productImage = product.productImage;
                  } else {
                    productImage = req.file.filename;
                }
            
                const newData = {
                    id_brand,
                    id_flavor,
                    description,
                    price,
                    stock,
                    productImage
                }
        
                const options = { 
                    where: {
                        id_brand: product.id_brand, 
                        id_flavor: product.id_flavor, 
                        id_size: req.body.id_size
                    } 
                }
            
                console.log(product.id_brand);
                console.log(product.id_flavor);
                console.log(req.body.id_size);
                
                if (errors.isEmpty()) {
                    db.Product.update(newData, options)
                    
                    .then(() => {
                        res.redirect('/products/productList')
                    })
                } else {
                        res.render('./products/updateProduct', {
                            productToEdit: productToEdit,
                            errors : errors.mapped(), 
                            old: req.body,
                            producto : product, 
                            allBrands: db.Brand.findAll(), 
                            allFlavors: db.Flavor.findAll(), 
                            allSizes: sizes 
                        })
                }

            })
        })
	},
    destroy: (req,res)=>{
        db.Product.findByPk(req.params.id,{
            include: [{association: "size"}]
        })
        .then(producto =>{
            db.Product.update({status:0},{
                where: {
                    id_brand: producto.id_brand,
                    id_flavor: producto.id_flavor,
                    id_size: producto.id_size
                }
            })
            .then(()=>{
                res.redirect('/products/productList');
            })
        })
    },
    recuperar: (req,res)=>{
        db.Product.findByPk(req.params.id,{
            include: [{association: "size"}]
        })
        .then(producto =>{
            db.Product.update({status:1},{
                where: {
                    id_brand: producto.id_brand,
                    id_flavor: producto.id_flavor,
                    id_size: producto.id_size
                }
            })
            .then(()=>{
                res.redirect('/products/productList');
            })
        })
    }
}

module.exports = productsControlador;