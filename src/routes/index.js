module.exports = (app) => {

  require('./api')(app)

  app.get('/', (req, res) => {
    res.render('index', {
      lastupdate: res.database.time
    })
  })

  app.use((req, res) => {
    res.status(404)
      .send({
        error: {
          status: 404,
          message: 'Not Found'
        }
      })
  })

}
