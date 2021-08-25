const fs = require('fs');
const { all } = require('../routes/main');

const Product = {
    fileName: './data/products.json',
    
    getData: function() {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8')); //Para convertirlo en un array
    },

    generateId: function() {
        return Date.now();
    },

    findAll: function() {
        return this.getData();
    },
    
    findByPk: function(id) {
        let allProducts = this.findAll();
        let productFound = allProducts.find(oneProduct => oneProduct.id === id);
        return productFound;
    },

    findByField: function(field, text) {
        let allProducts = this.findAll();
        let productFound = allProducts.find(oneProduct => oneProduct[field] === text);
        return productFound;
    },

    create: function(productData) {
        let allProducts = this.findAll();
        let newProduct = {
            id: this.generateId(),
            ...productData
        }
        allProducts.push(newProduct);
        fs.writeFileSync(this.fileName, JSON.stringify(allProducts, null, ' '));
        return newProduct; //para usarlo después
    },

    delete: function(id) {
        let allProducts = this.findAll();
        let finalProducts = allProducts.filter(oneProduct =>  oneProduct.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalProducts, null, ' '));
        return true;
    }
}

module.exports = Product;