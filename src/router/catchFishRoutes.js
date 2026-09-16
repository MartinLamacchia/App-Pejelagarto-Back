const routesCatchFish = require('express').Router()
const { controllerDeleteManyFish } = require('../controllers/catchFish/deleteMany')
const { controllerGetFishById } = require('../controllers/catchFish/getFishById')
const { controllerRegisterCatch } = require('../controllers/catchFish/registerFish')

routesCatchFish.post("/registerFish", controllerRegisterCatch)
routesCatchFish.get('/deleteManyFish', controllerDeleteManyFish)
routesCatchFish.post('/getFishById', controllerGetFishById )


module.exports = routesCatchFish