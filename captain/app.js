const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const connect = require('./db/db')
connect()
const captainRoutes = require('./routes/captain')
const cookieParser = require('cookie-parser')
const rabbitMq = require('./services/rabbit')

rabbitMq.connect()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())


app.use('/', captainRoutes)

module.exports = app