const path = require('path');
const usersControlador = {
    car: (req,res)=>{
        res.render(path.resolve(__dirname,'../views/users/productCar'));
    },
    login: (req,res)=>{
        res.render(path.resolve(__dirname,'../views/users/login'));
    },
    register: (req,res)=>{
        res.render(path.resolve(__dirname,'../views/users/register'));
    },
    profile: (req,res)=>{
        res.render(path.resolve(__dirname,'../views/users/profile'));
    }
}
module.exports = usersControlador;