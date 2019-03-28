const express = require('express')
const multerConfig = require('../config/multer')
const upload = require('multer')(multerConfig)

const routes = express.Router()

const authMiddleware = require('../app/middlewares/auth')
const guestMiddleware = require('../app/middlewares/guest')
const Controllers = require('../app/controllers')

routes.get('/', guestMiddleware, Controllers.SessionController.create)
routes.post('/signin', Controllers.SessionController.store)

routes.get('/signup', guestMiddleware, Controllers.UserController.create)
routes.post(
  '/signup',
  upload.single('avatar'),
  Controllers.UserController.store
)

routes.use('/app', authMiddleware)

routes.get('/app/dashboard', (req, res) => {
  return res.render('dashboard')
})

module.exports = routes
