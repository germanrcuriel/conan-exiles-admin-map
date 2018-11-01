const AnimalPensController = require('../../controllers/api/animalpens')

module.exports = (app) => {

  const animalpens = new AnimalPensController()

  app.get('/api/animalpens', async function (req, res) {
    return await animalpens.getAll(req, res)
  })

}
