const CrabpotsController = require('../../controllers/api/crabpots')

module.exports = (app) => {

  const crabpots = new CrabpotsController()

  app.get('/api/crabpots', async function (req, res) {
    return await crabpots.getAll(req, res)
  })

}
