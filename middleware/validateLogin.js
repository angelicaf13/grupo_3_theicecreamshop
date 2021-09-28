const { body } = require('express-validator'); 

const loginValidations = [
    
    body('email').notEmpty().withMessage('Debes ingresar un email').bail() 
.isEmail().withMessage('Debes ingresar un email válido'),

    body('pass').notEmpty().withMessage('Debes ingresar una contraseña')
]; 

module.exports = loginValidations; 