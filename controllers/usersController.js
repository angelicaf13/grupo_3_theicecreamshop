const path = require('path');

// ************ USERS JSON ************
const fs = require('fs');
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

// ************ Bcryptjs Require ************
const bcrypt = require('bcryptjs');

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
            passwordConfirm: bcrypt.hashSync(req.body.passwordConfirm,10),
            categoryUser: "cliente"
		}
        if (req.file === undefined) {
            user.foto = 'default-user.jpg';
          } else {
            user.foto = req.file.filename;
          }
		users.push(user); 

		usersJSON = JSON.stringify(users, null, 2);

		fs.writeFileSync(usersFilePath, usersJSON);
        res.redirect('/login');
    },
    profile: (req,res)=>{
        res.render('./users/profile');
    }
}
module.exports = usersControlador;