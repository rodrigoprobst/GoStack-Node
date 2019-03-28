const express = require('express')
const path = require('path')

const routes = express.Router()

const Controllers = require(path.resolve(__dirname, '..', 'app', 'controllers'))

routes.get('/signup', Controllers.UserController.create)
routes.post('/signup', Controllers.UserController.store)

module.exports = routes
