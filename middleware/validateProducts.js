//VALIDACIONES PARA LOS CAMPOS CORRESPONDIENTES A LOS FORMULARIOS DE PRODUCTOS
const { body } = require('express-validator');

const productsValidations = [
    body('id_brand')
.notEmpty().withMessage('Debes seleccionar la marca correspondiente'),
    body('id_flavor')
.notEmpty().withMessage('Debes seleccionar el sabor correspondiente'),
    body('description')
.notEmpty().withMessage('Debes ingresar una breve descripción')
]; 

module.exports = productsValidations; 