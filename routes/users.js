const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const usersController = require('../controllers/usersController');

// ************ Middleware Require ************
const upload = require('../middleware/multerUser');
const registerValidations = require('../middleware/validateRegister');
const loginValidations = require('../middleware/validateLogin');
const guestMiddleware = require('../middleware/guestMiddleware');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const { login } = require('../controllers/usersController');

/*** CREATE ONE USER ***/
router.get('/register', guestMiddleware, usersController.register);
router.post('/register', upload.single('profileImage'), registerValidations, usersController.create);

/*** LOGIN FORM ***/
router.get('/login', guestMiddleware, usersController.login);

/*** LOGIN PROCESS ***/
router.post('/login', loginValidations, usersController.loginProcess);

/*** USER PROFILE ***/
router.get('/profile', authMiddleware, usersController.profile);
router.get('/productCar', usersController.car);

/*** EDIT PROFILE ***/
router.put('/profile', upload.single('profileImage'), usersController.update);

/*** LOGOUT ***/
router.get('/logout', usersController.logout);

/*** GESTION DE USUARIOS ***/
router.get('/admin', adminMiddleware, usersController.admin);
router.put('/admin', usersController.change);

/*** ACCESS DENIED ***/
router.get('/accessError', usersController.accessError);

module.exports = router;