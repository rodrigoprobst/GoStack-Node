const { User } = require('../models')

class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }

  async store (req, res) {
    if (!req.file) {
      req.flash('error', 'Profile image required!')
      return res.redirect('/signup')
    }

    const { filename: avatar } = req.file
    const { name, email, password } = req.body

    if (!name) {
      req.flash('error', 'Name required!')
      return res.redirect('/signup')
    }

    if (!email) {
      req.flash('error', 'Mail required!')
      return res.redirect('/signup')
    }

    const user = await User.findOne({
      where: { email }
    })

    if (user) {
      req.flash('error', 'Mail has already been registered!')
      return res.redirect('/signup')
    }

    if (!password) {
      req.flash('error', 'Pass required!')
      return res.redirect('/signup')
    }

    await User.create({ ...req.body, avatar })

    return res.redirect('/')
  }
}

module.exports = new UserController()
