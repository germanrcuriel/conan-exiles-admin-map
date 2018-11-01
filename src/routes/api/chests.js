const ChestsController = require('../../controllers/api/chests')

module.exports = (app) => {

  const chests = new ChestsController()

  app.get('/api/chests', async function (req, res) {
    return await chests.getAll(req, res)
  })

}
