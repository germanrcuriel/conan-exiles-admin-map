const path = require('path')

module.exports = (app) => {

  app.set('port', 3001)
  app.set('rootFolder', path.join(__dirname, '../../'))
  app.set('views', path.join(__dirname, '../views'))
  app.set('view engine', 'ejs')

}
