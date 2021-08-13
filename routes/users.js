const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const usersController = require('../controllers/usersController');

// ************ Middleware Require ************
const upload = require('../middleware/multerUser');

router.get('/productCar', usersController.car);
router.get('/login', usersController.login);
router.get('/profile', usersController.profile);

/*** CREATE ONE USER ***/
router.get('/register', usersController.register);
router.post('/register', upload.single('foto'), usersController.create);

module.exports = router;