const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


const Products = db.Product;


const productsAPIController = {
    'list': (req, res) => {

        Products.findAll({
            include: [{association: "brand"}, {association: "flavor"}],
            group: ['id_brand', 'id_flavor']
        })
        .then(products => {


            Object.values(products).forEach(function (product) {
                product.dataValues.detail = `api/products/${product.id_product}`;
              });

            let response = {
                meta: {
                    status: 200,
                    count: Object.values(products).length,
                    url: 'api/products/'
                },
                data: products
            }
            res.json(response);

        })
        .catch(e => {
            console.log(e)
        })
    },
    'detail': (req, res) => {

        db.Product.findByPk(req.params.id, {
            include: [{association: "brand"}, {association: "flavor"}]
        })
        .then(product => {

            let response = {
                meta: {
                    status: 200,
                    total: product.length,
                    url: 'api/product/:id'
                },
                data: product
            }

            res.json(response);

        })
        .catch(e => {
            console.log(e)
        })
    }
    
}

module.exports = productsAPIController;