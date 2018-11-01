const MapRoomsController = require('../../controllers/api/maprooms')

module.exports = (app) => {

  const maprooms = new MapRoomsController()

  app.get('/api/maprooms', async function (req, res) {
    return await maprooms.getAll(req, res)
  })

}
