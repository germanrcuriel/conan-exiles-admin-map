const PetsController = require('../../controllers/api/pets')

module.exports = (app) => {

  const pets = new PetsController()

  app.get('/api/pets', async function (req, res) {
    return await pets.getAll(req, res)
  })

}
