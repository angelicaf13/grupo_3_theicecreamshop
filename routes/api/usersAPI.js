const express = require('express');
const router = express.Router();
const usersAPIController = require('../../controllers/api/usersAPIController');

//Rutas
//Listado de productos
router.get('/', usersAPIController.list);
//Detalle de un producto
router.get('/:id', usersAPIController.detail);


module.exports = router;