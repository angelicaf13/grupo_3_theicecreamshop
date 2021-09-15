function adminMiddleware (req, res, next) {
    console.log('hola desde el admin middle');
    if (req.session.userLogged.id_category == 2){
        return res.redirect('/accessError');
    }
    next();
}

module.exports = adminMiddleware;