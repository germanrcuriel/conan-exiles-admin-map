import applicationMiddleware from './app'
import authMiddleware from './auth'
import databaseMiddleware from './database'
import languageMiddleware from './language'
import staticMiddleware from './static'

const middleware = (app) => {

  applicationMiddleware(app)

  authMiddleware(app)
  databaseMiddleware(app)
  languageMiddleware(app)
  staticMiddleware(app)

}

export default middleware
