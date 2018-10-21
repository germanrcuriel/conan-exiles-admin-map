import auth from 'basic-auth'
import config from '../config'

const authMiddleware = (app) => {

  const users = config.USERS

  app.use((req, res, next) => {
    const user = auth(req)

    if (!users) {
      return next()
    }

    if (!user || !users[user.name] || users[user.name] !== user.pass) {
      res.setHeader('WWW-Authenticate', 'Basic realm="ConanExilesAdminMap"')
      return res.status(401).send('Unauthorized')
    }

    return next()
  })

}

export default authMiddleware
