const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const connect = require('./db/db');
connect();
const rabbitMq = require('./service/rabbit')

rabbitMq.connect();

const cookieParser = require('cookie-parser');




app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



module.exports = app;