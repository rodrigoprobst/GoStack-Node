const { User } = require('../models')

class DashboardController {
  async index (req, res) {
    if (req.session.user && req.session.user.provider) {
      const appointments = await User.findAll({
        where: { provider: true }
      })
      return res.render('dashboard-provider')
    }
    const providers = await User.findAll({
      where: { provider: true }
    })
    return res.render('dashboard', { providers })
  }
}

module.exports = new DashboardController()
