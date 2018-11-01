const TrebuchetsController = require('../../controllers/api/trebuchets')

module.exports = (app) => {

  const trebuchets = new TrebuchetsController()

  app.get('/api/trebuchets', async function (req, res) {
    return await trebuchets.getAll(req, res)
  })

}
