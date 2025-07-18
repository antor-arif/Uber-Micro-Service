const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');




app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



module.exports = app;