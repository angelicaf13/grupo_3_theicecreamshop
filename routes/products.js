const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

// ************ Middleware Require ************
const upload = require('../middleware/multer');
const productsValidations = require('../middleware/validateProducts');
const adminMiddleware = require('../middleware/adminMiddleware');

/*** GET ONE PRODUCT ***/ 
router.get('/productDetail/:id', productsController.detail);

/*** GET ALL PRODUCTS ***/ 
router.get('/productList', productsController.list);

/*** CREATE ONE PRODUCT ***/
router.get('/addProduct', adminMiddleware, productsController.create);
router.post('/addProduct', upload.single('image'), productsValidations, productsController.store);

/*** EDIT ONE PRODUCT ***/ 
router.get('/updateProduct/:id', productsController.edit);
router.put('/updateProduct/:id', upload.single('image'), productsValidations, productsController.update); 

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 


module.exports = router;