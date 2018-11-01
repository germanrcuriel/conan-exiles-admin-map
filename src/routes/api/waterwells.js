const WaterWellsController = require('../../controllers/api/waterwells')

module.exports = (app) => {

  const waterwells = new WaterWellsController()

  app.get('/api/waterwells', async function (req, res) {
    return await waterwells.getAll(req, res)
  })

}
