const path = require('path');
const fs = require('fs');
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

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
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm,
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
        res.redirect('/profile');
    },
    profile: (req,res)=>{
        res.render('./users/profile');
    }
}
module.exports = usersControlador;