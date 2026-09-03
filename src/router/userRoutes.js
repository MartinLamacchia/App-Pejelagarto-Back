const routesUser = require('express').Router()
const { controllerRegister } = require('../controllers/users/register')
const {controllerLogin} = require('../controllers/users/login')
const {controllerGetAllUsers} = require('../controllers/users/getAllUser')
const {controllerGetUser} = require('../controllers/users/getUserById')

routesUser.post('/register', controllerRegister)
routesUser.post('/login', controllerLogin)
routesUser.get('/getAllUsers', controllerGetAllUsers)
routesUser.post('/getUserById', controllerGetUser)

module.exports = routesUser