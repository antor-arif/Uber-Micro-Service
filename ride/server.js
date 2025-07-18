const http = require('http');
const app = require('./app');
require('dotenv').config();
const { RIDE_PORT } = process.env;

const server = http.createServer(app);


server.listen(RIDE_PORT, () => {
    console.log(`Ride service is running on port ${RIDE_PORT}`);
});