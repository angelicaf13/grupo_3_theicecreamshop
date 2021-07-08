const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/productDetail', productsController.detail);
router.get('/productList', productsController.list);
router.get('/addProduct', productsController.add);

module.exports = router;