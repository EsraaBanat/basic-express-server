'use strict'
require('dotenv').config();
const server = require('./src/sever');
let PORT = process.env.PORT || 3000;

server.start(PORT);