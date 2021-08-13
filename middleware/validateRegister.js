const { body } = require('express-validator');

const registerValidations = [
    body('firstName')
.notEmpty().withMessage('Debes ingresar un nombre').bail()
.isLength({ min: 3 }).withMessage('El nombre no cuenta con el número de caracteres esperados'),

    body('lastName').notEmpty().withMessage('Debes ingresar un apellido').bail()
.isLength({ min: 6 }).withMessage('El apellido no cuenta con el número de caracteres esperados'),

    body('email').notEmpty().withMessage('Debes ingresar un email').bail() 
.isEmail().withMessage('Debes ingresar un email válido'),

    body('password').notEmpty().withMessage('Debes ingresar una contraseña').bail()
.isLength({ min: 8 }).withMessage('Recuerda que la contraseña debe tener 8 caracteres minimo').bail()
.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i").withMessage('La contraseña debe contener una mayúscula minimo y un número minimo'),
]; 

module.exports = registerValidations; 