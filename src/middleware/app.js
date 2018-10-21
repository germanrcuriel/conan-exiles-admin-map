import path from 'path'
import config from '../config'

const applicationMiddleware = (app) => {

  app.set('port', config.SETTINGS.port)

  app.set('rootFolder', path.join(__dirname, '../../'))
  app.set('view engine', 'ejs')
  app.set('views', path.join(__dirname, '../views'))

}

export default applicationMiddleware
