const http = require('http');
const app = require('./app');
require('dotenv').config();
const { CAPTAIN_PORT } = process.env;

const server = http.createServer(app);

server.listen(CAPTAIN_PORT, () => {
    console.log(`Captain service is running on port ${CAPTAIN_PORT}`);
});