const AltarsController = require('../../controllers/api/altars')

module.exports = (app) => {

  const altars = new AltarsController()

  app.get('/api/altars', async function (req, res) {
    return await altars.getAll(req, res)
  })

}
