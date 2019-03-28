const express = require('express')
const multerConfig = require('../config/multer')
const upload = require('multer')(multerConfig)

const routes = express.Router()

const Controllers = require('../app/controllers')

routes.get('/signup', Controllers.UserController.create)
routes.post(
  '/signup',
  upload.single('avatar'),
  Controllers.UserController.store
)

module.exports = routes
