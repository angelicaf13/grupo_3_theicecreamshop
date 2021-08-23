const User = require('../models/User'); //nos traemos el modelo para poder hacer operaciones con la base de datos

function userLoggedMiddleware (req, res, next) {
    res.locals.isLogged = false; //res.locals son variables que se pueden compartir en todas las vistas indistintamente del controlador

    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = User.findByField('email', emailInCookie);


    if(userFromCookie) { //este of es para loggear de manera automática si se presionó el checkbox de recordar
        req.session.userLogged = userFromCookie;
    }

    if (req.session.userLogged) { //este if es para modificar las vista
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged; //para pasar una variable local a la vista 
    }

    next();
} 

module.exports = userLoggedMiddleware;