const routesCatchFish = require('express').Router()
const { controllerDeleteManyFish } = require('../controllers/catchFish/deleteMany')
const { controllerRegisterCatch } = require('../controllers/catchFish/registerFish')

routesCatchFish.post("/registerFish", controllerRegisterCatch)
routesCatchFish.get('/deleteManyFish', controllerDeleteManyFish)


module.exports = routesCatchFish