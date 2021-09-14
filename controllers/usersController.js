const path = require('path');
const User = require('../models/User');
const db = require("../database/models");

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
		//console.log (req.body.remember_user);
        let userToLogin = User.findByField('email', req.body.email);

		if(userToLogin) {
			let isOkThePassword = bcrypt.compareSync(req.body.password, userToLogin.password);
			if(isOkThePassword) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;

				if (req.body.remember_user) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 30 });
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
        const userEdit = users.find(user => user.id === req.session.userLogged.id);
        userEdit.firstName = req.body.firstName,
        userEdit.lastName = req.body.lastName,
        userEdit.email = req.body.email

        if (req.file === undefined) {
            userEdit.foto = userEdit.foto;
          } else {
            fs.unlinkSync('./public/img/users/' + userEdit.foto);
            userEdit.foto = req.file.filename;
          };
        usersJSON = JSON.stringify(users, null, 2);
        fs.writeFileSync(usersFilePath, usersJSON);
        return res.redirect('/profile');
    }
}
module.exports = usersControlador;