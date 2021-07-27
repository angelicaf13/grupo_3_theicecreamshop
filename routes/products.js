const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

// ************ Middleware Require ************
const upload = require('../middleware/multer');

/*** GET ONE PRODUCT ***/ 
router.get('/productDetail/:id', productsController.detail);

/*** GET ALL PRODUCTS ***/ 
router.get('/productList', productsController.list);

/*** CREATE ONE PRODUCT ***/
router.get('/addProduct', productsController.create);
router.post('/addProduct', upload.single('image'), productsController.store);

/*** EDIT ONE PRODUCT ***/ 
router.get('/updateProduct/:id', productsController.edit);
router.put('/updateProduct/:id', upload.single('image'), productsController.update); 

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 


module.exports = router;