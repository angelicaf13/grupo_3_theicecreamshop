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
.matches(/^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*.]{8,}$/, "i").withMessage('La contraseña debe contener minimo una mayúscula y un número'),
]; 

module.exports = registerValidations; 