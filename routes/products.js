const express = require('express');
const router = express.Router();
const multer = require('multer'); 
const path = require('path');

const productsController = require('../controllers/productsController');

/*** GET ONE PRODUCT ***/ 
router.get('/productDetail/:id', productsController.detail);

/*** GET ALL PRODUCTS ***/ 
router.get('/productList', productsController.list);

/*** CREATE ONE PRODUCT ***/
router.get('/addProduct', productsController.create);

let storage = multer.diskStorage({
    destination: (req, file, callback) =>
    { let folder = path.join(__dirname, '../public/img'); 
        callback(null, folder);
    },
    filename: (req, file, callback) => 
    { let imageName = Date.now() + path.extname(file.originalname);
        callback(null, imageName);
    }
})

let upload = multer ({ storage : storage });

router.post('/addProduct', upload.single('image'), productsController.store);

/*** EDIT ONE PRODUCT ***/ 
router.get('/updateProduct', productsController.update);

/*** DELETE ONE PRODUCT***/ 


module.exports = router;