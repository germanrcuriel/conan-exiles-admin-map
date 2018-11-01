const PippiAllController = require('../../../controllers/api/pippi/all')

module.exports = (app) => {

  const pippiAll = new PippiAllController()

  app.get('/api/pippi/all', async function (req, res) {
    return await pippiAll.getAll(req, res)
  })

}
