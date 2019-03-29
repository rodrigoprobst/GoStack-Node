const express = require('express')
const multerConfig = require('../config/multer')
const upload = require('multer')(multerConfig)

const routes = express.Router()

const Middlewares = require('../app/middlewares')
const Controllers = require('../app/controllers')

routes.use((req, res, next) => {
  res.locals.flashSuccess = req.flash('success')
  res.locals.flashError = req.flash('error')

  return next()
})

routes.get('/files/:file', Controllers.FileController.show)

routes.get('/', Middlewares.guest, Controllers.SessionController.create)
routes.post('/signin', Controllers.SessionController.store)

routes.get('/signup', Middlewares.guest, Controllers.UserController.create)
routes.post(
  '/signup',
  upload.single('avatar'),
  Controllers.UserController.store
)

routes.use('/app', Middlewares.auth)

routes.get('/app/logout', Controllers.SessionController.destroy)

routes.get('/app/dashboard', Controllers.DashboardController.index)

module.exports = routes
