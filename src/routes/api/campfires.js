const CampfiresController = require('../../controllers/api/campfires')

module.exports = (app) => {

  const campfires = new CampfiresController()

  app.get('/api/campfires', async function (req, res) {
    return await campfires.getAll(req, res)
  })

}
