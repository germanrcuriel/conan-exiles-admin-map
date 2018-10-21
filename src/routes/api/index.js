const apiRoutes = (app) => {

  require('./all')(app)
  require('./beds')(app)
  require('./buildings')(app)
  require('./campfires')(app)
  require('./crabpots')(app)
  require('./fishnets')(app)
  require('./pets')(app)
  require('./pippi/thespians')(app)
  require('./players')(app)
  require('./wheelsofpain')(app)

}

export default apiRoutes
