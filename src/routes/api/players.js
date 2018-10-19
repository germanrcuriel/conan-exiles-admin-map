const PlayersController = require('../../controllers/api/players')

module.exports = (app) => {

  const players = new PlayersController()

  app.get('/api/players', async function (req, res) {
    return await players.getAll(req, res)
  })

}
