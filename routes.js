const express = require("express");
const routes = express.Router()


const homeController  = require("./controllers/homeController.js");

routes.get('/', homeController.initialPage)

module.exports = routes