const http = require('http');
const app = require('./app');
require('dotenv').config();
const { USER_PORT } = process.env;

const server = http.createServer(app);

server.listen(USER_PORT, () => {
    console.log(`User service is running on port ${USER_PORT}`);
});