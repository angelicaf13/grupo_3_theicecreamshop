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
			brand: req.body.brand,
            flavor: req.body.flavor,
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
    edit: (req,res)=>{
        const id = parseInt(req.params.id);
		const productToEdit = products.find(product => product.id === id);

        res.render('./products/updateProduct', {productToEdit : productToEdit});
    },
    update: (req, res) => {

		const id = parseInt(req.params.id);
		const productToEdit = products.find(product => product.id === id);
		
			productToEdit.brand = req.body.brand;
            productToEdit.flavor = req.body.flavor;
			productToEdit.price = parseInt(req.body.price);
            productToEdit.price1 = parseInt(req.body.price1);
            productToEdit.price2 = parseInt(req.body.price2);
			productToEdit.description = req.body.des;
            productToEdit.present1 = req.body.present1;
            productToEdit.present2 = req.body.present2;
            productToEdit.present3 = req.body.present3;
			
			if (req.file === undefined) {
				productToEdit.image = 'default-image.png';
			  } else {
				productToEdit.image = req.file.filename;
			  }
		
		productsJSON = JSON.stringify(products, null, 2);

		fs.writeFileSync(productsFilePath, productsJSON);

		res.redirect('/products/productList')
	},
    destroy: (req,res)=>{
        const id = parseInt(req.params.id);
		const productToDelete = products.find(product => product.id === id);
		
		products.splice(products.indexOf(productToDelete), 1);
		
		productsJSON = JSON.stringify(products, null, 2);

		fs.writeFileSync(productsFilePath, productsJSON);

		res.redirect('/products/productList');
    }
}

module.exports = productsControlador;