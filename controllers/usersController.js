const path = require('path');

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
        if (req.file === undefined) {
            user.foto = 'default-user.jpg';
          } else {
            user.foto = req.file.filename;
          }

        let errors = validationResult(req);
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
        res.render('./users/profile');
    }
}
module.exports = usersControlador;