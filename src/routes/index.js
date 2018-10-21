import apiRoutes from './api'

const routes = (app) => {

  apiRoutes(app)

  app.get('/', (req, res) => {
    res.render('index', {
      language: JSON.stringify(res.language),
      lastupdate: res.database.time
    })
  })

  app.use((req, res) => {
    res.status(404).send({
      error: {
        status: 404,
        message: 'Not Found'
      }
    })
  })

}

export default routes
