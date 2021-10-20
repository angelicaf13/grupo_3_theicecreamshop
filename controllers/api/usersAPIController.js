const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


const Users = db.User;


const usersAPIController = {
    'list': (req, res) => {

        Users.findAll({
            include: [{association: "category"}],
        })
        .then(users => {

            console.log(users);
            Object.values(users).forEach(function (user) {
                user.dataValues.detail = `api/users/${user.id_user}`;
              });

            let response = {
                meta: {
                    status: 200,
                    count: Object.values(users).length,
                    url: 'api/users/'
                },
                users: users
            }
            res.json(response);

        })
        .catch(e => {
            console.log(e)
        })
    },
    'detail': (req, res) => {

        db.User.findByPk(req.params.id, {
            include: [{association: "category"}]
        })
        .then(user => {

            let response = {
                meta: {
                    status: 200,
                    total: user.length,
                    url: 'api/user/:id'
                },
                data: user
            }

            res.json(response);

        })
        .catch(e => {
            console.log(e)
        })
    }
    
}

module.exports = usersAPIController;