const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/productCar', usersController.car);
router.get('/login', usersController.login);
router.get('/profile', usersController.profile);
router.get('/register', usersController.register);

module.exports = router;