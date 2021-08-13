const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const usersController = require('../controllers/usersController');

// ************ Middleware Require ************
const upload = require('../middleware/multerUser');
const registerValidations = require('../middleware/validateRegister');

/*** CREATE ONE USER ***/
router.get('/register', usersController.register);
router.post('/register', upload.single('foto'), registerValidations, usersController.create);

/*** LOGIN FORM ***/
router.get('/login', usersController.login);

/*** LOGIN PROCESS ***/
router.post('/login', usersController.loginProcess);

router.get('/profile', usersController.profile);
router.get('/productCar', usersController.car);

module.exports = router;