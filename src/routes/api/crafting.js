const CraftingController = require('../../controllers/api/crafting')

module.exports = (app) => {

  const crafting = new CraftingController()

  app.get('/api/crafting', async function (req, res) {
    return await crafting.getAll(req, res)
  })

}
