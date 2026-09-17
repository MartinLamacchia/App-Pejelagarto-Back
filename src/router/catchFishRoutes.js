const routesCatchFish = require('express').Router()
const { controllerDeleteManyFish } = require('../controllers/catchFish/deleteMany')
const { controllerGetAllFishForUser } = require('../controllers/catchFish/getAllFishForUser')

const { controllerRegisterCatch } = require('../controllers/catchFish/registerFish')

routesCatchFish.post("/registerFish", controllerRegisterCatch)
routesCatchFish.get('/deleteManyFish', controllerDeleteManyFish)
routesCatchFish.post('/getAllFishForUser', controllerGetAllFishForUser )


module.exports = routesCatchFish