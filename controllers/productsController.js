const path = require('path');

const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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
		const product = {
			id: Date.now(),
			name: req.body.brand + " " + req.body.flavor,
			price: parseInt(req.body.price),
            price1: parseInt(req.body.price1),
            price2: parseInt(req.body.price2),
			description: req.body.des 	
		}

        if (req.file === undefined) {
            product.image = 'default-image.png';
          } else {
            product.image = req.file.filename;
          }

        console.log(req.body)

		products.push(product); 

		productsJSON = JSON.stringify(products, null, 2);

		fs.writeFileSync(productsFilePath, productsJSON);

		res.redirect('/products/productList');
    },
    update: (req,res)=>{
        res.render('./products/updateProduct');
    }
}

module.exports = productsControlador;