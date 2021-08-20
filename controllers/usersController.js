const path = require('path');
const User = require('../models/User');


// ************ USERS JSON ************
const fs = require('fs');
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

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
		let userToLogin = User.findByField('email', req.body.email);

		if(userToLogin) {
			let isOkThePassword = bcrypt.compareSync(req.body.password, userToLogin.password);
			if(isOkThePassword) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;

				if (req.body.remember_user) {
					res.cookie('userEmail', req.body.email), { maxAge: (1000 * 60) * 2 };
				}

                return res.redirect('/profile'); 
			}
			return res.render('./users/login', {
				errors: {
					password: {
						msg: 'Las credenciales son inválidas'
					}
				} 
			});
		}

		return res.render('./users/login', {
			errors: {
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				}
			} 
		})
	},
    register: (req,res)=>{
        res.render('./users/register');
    },
    create: (req, res)=>{
        const user = {
            id: Date.now(),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password,10),
            categoryUser: "cliente"
        }
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            if (req.file === undefined) {
                user.foto = 'default-user.jpg';
              } else {
                user.foto = req.file.filename;
              }
        } else{
                user.foto = 'default-user.jpg';
        }
        if (errors.isEmpty()) {
            users.push(user); 
            usersJSON = JSON.stringify(users, null, 2);
            fs.writeFileSync(usersFilePath, usersJSON);
            res.redirect('/login');
        } else {   
        res.render('./users/register', { errors: errors.mapped(), old: req.body });
        }
    },
    profile: (req,res)=>{
        //console.log(req.cookies.userEmail);
        //console.log(req.session.userLogged );
        res.render('./users/profile');
    },
    logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}
}
module.exports = usersControlador;