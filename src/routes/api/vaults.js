const VaultsController = require('../../controllers/api/vaults')

module.exports = (app) => {

  const vaults = new VaultsController()

  app.get('/api/vaults', async function (req, res) {
    return await vaults.getAll(req, res)
  })

}
