const PippiThespiansController = require('../../../controllers/api/pippi/thespians')

module.exports = (app) => {

  const pippiThespians = new PippiThespiansController()

  app.get('/api/pippi/thespians', async function (req, res) {
    return await pippiThespians.getAll(req, res)
  })

}
