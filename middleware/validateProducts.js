//VALIDACIONES PARA LOS CAMPOS CORRESPONDIENTES A LOS FORMULARIOS DE PRODUCTOS
const { body } = require('express-validator');

const productsValidations = [
    body('id_brand')
.notEmpty().withMessage('Debes seleccionar la marca correspondiente'),
    body('id_flavor')
.notEmpty().withMessage('Debes seleccionar el sabor correspondiente'),
    body('description')
.notEmpty().withMessage('Debes ingresar una breve descripción').bail()
.isString().withMessage('Debes ingresar texto').bail()
.isLength({ min: 20 }).withMessage('La descripción no cuenta con el número de caracteres esperados'),
    body('id_size')
.notEmpty().withMessage('Debes seleccionar el tamaño correspondiente'),
    body('price')
.notEmpty().withMessage('Debes ingresar el precio correspondiente').bail()
.isNumeric({ min: 1 }).withMessage('La descripción no cuenta con el número de caracteres esperados'),
    body('stock')
.notEmpty().withMessage('Debes ingresar la cantidad correspondiente').bail()
.isNumeric({ min: 1 }).withMessage('La descripción no cuenta con el número de caracteres esperados')
]; 

module.exports = productsValidations; 