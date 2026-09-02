const routes = require('express').Router()
const userRoutes = require('./userRoutes')

routes.use('/user', userRoutes)

module.exports = routes

