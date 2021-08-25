function adminMiddleware (req, res, next) {
    console.log('hola desde el admin middle');
    if (req.session.userLogged.categoryUser == 'cliente'){
        return res.redirect('/accessError');
    }
    next();
}

module.exports = adminMiddleware;