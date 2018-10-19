const BuildingsController = require('../../controllers/api/buildings')

module.exports = (app) => {

  const buildings = new BuildingsController()

  app.get('/api/buildings', async function (req, res) {
    return await buildings.getAll(req, res)
  })

}
