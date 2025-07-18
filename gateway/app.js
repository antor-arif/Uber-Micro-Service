const express = require('express')
const expressProxy = require('express-http-proxy')
require('dotenv').config()
const app = express()
const {CAPTAIN_PORT, RIDE_PORT, USER_PORT} = process.env


app.use('/user', expressProxy(`http://localhost:${USER_PORT}`));
app.use('/captain', expressProxy(`http://localhost:${CAPTAIN_PORT}`));
app.use('/ride', expressProxy(`http://localhost:${RIDE_PORT}`));


app.listen(3000, () => {
    console.log('Gateway server listening on port 3000')
})