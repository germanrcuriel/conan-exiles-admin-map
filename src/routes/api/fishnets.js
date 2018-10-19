const FishnetsController = require('../../controllers/api/fishnets')

module.exports = (app) => {

  const fishnets = new FishnetsController()

  app.get('/api/fishnets', async function (req, res) {
    return await fishnets.getAll(req, res)
  })

}
