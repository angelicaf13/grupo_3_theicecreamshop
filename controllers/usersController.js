const path = require('path');
const usersControlador = {
    car: (req,res)=>{
        res.sendFile(path.resolve(__dirname,'../views/users/productCar.html'));
    },
    login: (req,res)=>{
        res.sendFile(path.resolve(__dirname,'../views/users/login.html'));
    },
    register: (req,res)=>{
        res.sendFile(path.resolve(__dirname,'../views/users/register.html'));
    },
    profile: (req,res)=>{
        res.sendFile(path.resolve(__dirname,'../views/users/profile.html'));
    }
}
module.exports = usersControlador;