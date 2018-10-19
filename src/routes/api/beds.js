const BedsController = require('../../controllers/api/beds')

module.exports = (app) => {

  const beds = new BedsController()

  app.get('/api/beds', async function (req, res) {
    return await beds.getAll(req, res)
  })

}
