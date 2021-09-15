const db = require("../database/models");

function userLoggedMiddleware (req, res, next) {
    res.locals.isLogged = false; //res.locals son variables que se pueden compartir en todas las vistas indistintamente del controlador

    console.log(req.cookies.userEmail);
    let userFromCookie =  db.User.findOne({where: {email: req.cookies.userEmail}})
    
        .then(function(result) {

            if(result) { //este of es para loggear de manera automática si se presionó el checkbox de recordar
               req.session.userLogged = result;
            }
            
            //console.log(req.session.userLogged )

        });

    if (req.session.userLogged) { //este if es para modificar las vista
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged; //para pasar una variable local a la vista 
    }

    next();
} 

module.exports = userLoggedMiddleware;