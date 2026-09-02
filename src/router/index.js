const routes = require('express').Router()
const routesCatchFish = require('./catchFishRoutes')
const userRoutes = require('./userRoutes')

routes.use('/user', userRoutes)
routes.use('/catchFish', routesCatchFish)

module.exports = routes

