const WheelsOfPainController = require('../../controllers/api/wheelsofpain')

module.exports = (app) => {

  const wheelsOfPain = new WheelsOfPainController()

  app.get('/api/wheelsofpain', async function (req, res) {
    return await wheelsOfPain.getAll(req, res)
  })

}
