const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const routes = require('./router/index')


app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use('/', routes)

module.exports = app