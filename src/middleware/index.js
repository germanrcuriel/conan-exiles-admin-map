module.exports = (app) => {

  require('./app')(app)
  require('./database')(app)
  require('./static')(app)

}
