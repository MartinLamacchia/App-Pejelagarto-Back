const routesCatchFish = require('express').Router()
const { controllerRegisterCatch } = require('../controllers/catchFish/registerFish')

routesCatchFish.post("/registerFish", controllerRegisterCatch)


module.exports = routesCatchFish