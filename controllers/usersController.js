const path = require('path');

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
    profile: (req,res)=>{
        res.render('./users/profile');
    }
}
module.exports = usersControlador;