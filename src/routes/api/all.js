const AllController = require('../../controllers/api/all')

module.exports = (app) => {

  const all = new AllController()

  app.get('/api/all', async function (req, res) {
    return await all.getAll(req, res)
  })

}
