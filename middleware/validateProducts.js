//VALIDACIONES PARA LOS CAMPOS CORRESPONDIENTES A LOS FORMULARIOS DE PRODUCTOS
const { body } = require('express-validator');

const productsValidations = [
    body('brand')
.notEmpty().withMessage('Debes ingresar la marca correspondiente'),
    body('flavor')
.notEmpty().withMessage('Debes ingresar el sabor correspondiente'),
    body('description')
.notEmpty().withMessage('Debes ingresar una breve descripción')
]; 

module.exports = productsValidations; 