const express = require('express');
const { SessionController } = require('./controllers');

const routes = express.Router();

routes.post('/sessions', SessionController.store);

module.exports = routes;
