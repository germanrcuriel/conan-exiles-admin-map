const ThronesController = require('../../controllers/api/thrones')

module.exports = (app) => {

    const thrones = new ThronesController()

    app.get('/api/thrones', async function (req, res) {
        return await thrones.getAll(req, res)
    })

}