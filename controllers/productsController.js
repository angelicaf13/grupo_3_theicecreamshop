const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const db = require("../database/models");
const { Op, where } = require("sequelize");

// ************ Express Validator Require ************
const { validationResult } = require('express-validator');
const e = require('express');
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
        .catch(e => {
            console.log(e)
        })
    },
    list: (req, res)=>{

        if(req.query.brands && req.query.priceRange){ // if both brands and prices filter are applied
            let prices = req.query.priceRange;
            prices = prices.toString().split('-').join(',').split(',');
            prices = prices.map(price => parseInt(price));

            db.Product.findAll({
                include:[{association: "brand"}, {association: "flavor"}],
                group: ['id_brand', 'id_flavor'],
                where: {
                    price: {
                        [Op.between] : [prices[0], prices[prices.length - 1]]
                    }
                }
            })
            .then(products => {
                products.forEach(element => {
                    console.log(element.brand.dataValues.name)
                });
                let selectedBrands = req.query.brands;
                let productsToSend = [];
                products.forEach(element => {
                    if(selectedBrands.includes(element.brand.dataValues.name)){
                        productsToSend.push(element)
                    }
                });
                res.render('./products/productList', {listaProductos: productsToSend});

            })
            .catch(e => {
                console.log(e)
            })

        }else if(req.query.brands){ //if only brands filter is applied

            db.Product.findAll({
                include:[{association: "brand"}, {association: "flavor"}],
                group: ['id_brand', 'id_flavor'],
            })
            .then(products => {
                products.forEach(element => {
                    console.log(element.brand.dataValues.name)
                });
                let selectedBrands = req.query.brands;
                let productsToSend = [];
                products.forEach(element => {
                    if(selectedBrands.includes(element.brand.dataValues.name)){
                        productsToSend.push(element)
                    }
                });
                products = products.map(product => selectedBrands.includes(product.brand.dataValues.name))
                res.render('./products/productList', {listaProductos: productsToSend});

            })
            .catch(e => {
                console.log(e)
            })

        }else if(req.query.priceRange){ // if only price filter is applied
            let prices = req.query.priceRange;
            prices = prices.toString().split('-').join(',').split(',');
            prices = prices.map(price => parseInt(price));

            db.Product.findAll({
                include: [{association: "brand"}, {association: "flavor"}],
                group: ['id_brand', 'id_flavor'],
                where: {
                    price: {
                        [Op.between] : [prices[0], prices[prices.length - 1]]
                    }
                }
            })
            .then(products => {
                res.render('./products/productList', {listaProductos: products});

            })
            .catch(e => {
                console.log(e)
            })

            //res.send(prices)
            
        }else if(req.query.search){ // if using the search bar
            let search = req.query.search.toUpperCase();
            db.Product.findAll({
                include: [{association: "brand"}, {association: "flavor"}],
                group: ['id_brand', 'id_flavor']
            })
            .then(products => {
                let filteredProducts = [];
                products.forEach(product => {
                    let brand = product.brand.dataValues.name.toUpperCase();
                    let flavor = product.flavor.dataValues.name.toUpperCase();
                    if(brand.includes(search) || flavor.includes(search)){
                        filteredProducts.push(product);
                    }
                });
                res.render('./products/productList', {listaProductos: filteredProducts});

            })
            .catch(e => {
                console.log(e)
            })
        }else{ // if there aren't filter or search
            db.Product.findAll({
                include: [{association: "brand"}, {association: "flavor"}],
                group: ['id_brand', 'id_flavor']
            })
            .then(products => {
                res.render('./products/productList', {listaProductos: products});

            })
            .catch(e => {
                console.log(e)
            })
        }
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
        .catch(error => {
            console.log(error)
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
            .catch(error => {
                console.log(error)
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
                .catch(e => {
                    console.log(e)
                })
            })
            .catch(e => {
                console.log(e)
            })
        })
        .catch(e => {
            console.log(e)
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
                
                if (errors.isEmpty()) {
                    db.Product.update(newData, options)
                    
                    .then(() => {
                        res.redirect('/products/productList')
                    })
                    .catch(e => {
                        console.log(e)
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
        .catch(e => {
            console.log(e)
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
            .catch(e => {
                console.log(e)
            })
        })
        .catch(e => {
            console.log(e)
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
            .catch(e => {
                console.log(e)
            })
        })
        .catch(e => {
            console.log(e)
        })
    }
}

module.exports = productsControlador;