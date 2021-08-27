const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const usersController = require('../controllers/usersController');

// ************ Middleware Require ************
const upload = require('../middleware/multerUser');
const registerValidations = require('../middleware/validateRegister');
const guestMiddleware = require('../middleware/guestMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

/*** CREATE ONE USER ***/
router.get('/register', guestMiddleware, usersController.register);
router.post('/register', upload.single('foto'), registerValidations, usersController.create);

/*** LOGIN FORM ***/
router.get('/login', guestMiddleware, usersController.login);

/*** LOGIN PROCESS ***/
router.post('/login', usersController.loginProcess);

/*** USER PROFILE ***/
router.get('/profile', authMiddleware, usersController.profile);
router.get('/productCar', usersController.car);

/*** EDIT PROFILE ***/
router.put('/profile', upload.single('foto'), usersController.update);

/*** LOGOUT ***/
router.get('/logout', usersController.logout);

/*** ACCESS DENIED ***/
router.get('/accessError', usersController.accessError);

module.exports = router;