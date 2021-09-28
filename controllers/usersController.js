const db = require("../database/models");

// ************ Bcryptjs Require ************
const bcrypt = require('bcryptjs');

// ************ Express Validator Require ************
const { validationResult } = require('express-validator');

const usersControlador = {
    car: (req,res)=>{
        res.render('./users/productCar');
    },
    login: (req,res)=>{
        res.render('./users/login');
    },
    loginProcess: (req, res) => {
        //let userToLogin = User.findByField('email', req.body.email);
        //const errores = validationResult(req);
        let userToLogin = db.User.findOne({where: {email: req.body.email}})
        .then(function(result){
            const password = req.body.pass;
            const pass = result.pass;
            //console.log(pass);

		    if(userToLogin) {
		    	let isOkThePassword = bcrypt.compareSync(password, pass);
		    	if(isOkThePassword) {
		    		delete userToLogin.pass;
		    		req.session.userLogged = result;
                    //console.log(req.session.userLogged)


		    		if (req.body.remember_user) {
		    			res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 30 });
		    		}

                    //console.log(req.cookies.userEmail)

                    return res.redirect('/profile'); 
		    	}
		    	return res.render('./users/login', {
		    		errors: {
		    			pass: {
		    				msg: 'Las credenciales son inválidas'
		    			    }
		    		    } 
		            })
        
		        }

            })
        .catch(function(){
            res.render('./users/login', { 
                errors: { 
                    email: { 
                        msg: 'No se encuentra este email en nuestra base de datos' 
                    } 
                } 
            })
        })
 
	},
    register: (req,res)=>{
        res.render('./users/register');
    },
    create: (req, res)=>{
        const errors = validationResult(req);

        const {first_name, last_name, email} = req.body;
        const pass = req.body.pass;
        const id_category = 2;

        if (req.file === undefined) {
            profileImage = 'default-user.png';
          } else {
            profileImage = req.file.filename;
        }

        if (errors.isEmpty()) {
            db.User.create({
                first_name,
                last_name,
                email, 
                pass: bcrypt.hashSync(pass,10),
                id_category,
                profileImage
            })
    
            .then(() => {
                res.redirect('/login');
            })
        } else {   
            res.render('./users/register', { errors: errors.mapped(), old: req.body });
        }
    },
    profile: (req,res)=>{
        console.log(req.cookies.userEmail);
        console.log(req.session.userLogged );
        res.render('./users/profile');
    },
    logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	},
    accessError: (req, res) => {
        res.render('./errores/accessError')
    },
    update:(req, res) =>{
        const {first_name, last_name, email} = req.body;
        
        if (req.file === undefined) {
            profileImage = req.session.userLogged.profileImage;
          } else {
            profileImage = req.file.filename;
        }

        const newData = {
            first_name,
            last_name,
            email,
            profileImage
        }
        const options = { where: {email: req.session.userLogged.email} }

        console.log(req.session.userLogged)
        
        db.User.update(newData, options)
        .then(() => {
            res.redirect('/profile')
        })
    },
    admin: (req, res) =>{
            db.User.findAll({
                include: [{association: "category"}]
            })
                .then(users => {
                    res.render('./users/usersAdmin', {listausuarios: users});
                })
    },
    change: (req, res)=>{
        if(req.body.rol == 1){
        db.User.update({
            id_category:2
        }, {
            where: {
                id_user: req.body.tipo
            }
        })
        .then(() => {
            res.redirect('/admin')
        })
    } else {
        db.User.update({
            id_category:1
        }, {
            where: {
                id_user: req.body.tipo
            }
        })
        .then(() => {
            res.redirect('/admin')
        })
    }

    }
}
module.exports = usersControlador;