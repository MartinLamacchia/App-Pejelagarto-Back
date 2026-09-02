const routesUser = require('express').Router()
const { controllerRegister } = require('../controllers/users/register')
const {controllerLogin} = require('../controllers/users/login')

routesUser.post('/register', controllerRegister)
routesUser.post('/login', controllerLogin)

module.exports = routesUser