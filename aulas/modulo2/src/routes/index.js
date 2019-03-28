const express = require('express')
const multerConfig = require('../config/multer')
const upload = require('multer')(multerConfig)

const routes = express.Router()

const Controllers = require('../app/controllers')

routes.get('/app/dashboard', (req, res) => {
  console.log(req.session.user)

  return res.render('dashboard')
})

routes.get('/', Controllers.SessionController.create)
routes.post('/signin', Controllers.SessionController.store)

routes.get('/signup', Controllers.UserController.create)
routes.post(
  '/signup',
  upload.single('avatar'),
  Controllers.UserController.store
)

module.exports = routes
