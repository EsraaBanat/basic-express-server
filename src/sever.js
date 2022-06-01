'use strict'
const express = require('express');
const logger = require('./middleware/logger');
const notFoundHandler = require('./error-handlers/404');
const internalErrorHandler = require('./error-handlers/500');
const validator = require('./middleware/validator');

const app = express();

app.use(logger);


app.get('/', handleHomePage);
app.get('/person',validator, handleName);

app.use(internalErrorHandler);
app.use('*', notFoundHandler);

module.exports = {
    app,
    start,
}

// Functions :
function start(port) {
    app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
    })
}

function handleHomePage(req, res) {
    res.status(200).send('Hello World');
}

function handleName(req, res) {
    let name = req.query.name;
    // console.log(name);
        res.status(200).json({
        name,
        });

}