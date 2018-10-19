module.exports = (app) => {

  require('./app')(app)
  require('./database')(app)
  require('./i18n')(app)
  require('./static')(app)

}
