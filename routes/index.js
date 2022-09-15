const routes = require('express').Router();
const controller = require('../controllers');

routes.get("/", controller.welcome);

module.exports = routes;