const fs = require('fs')
const path = require('path')

module.exports = (app) => {

  const databaseFile = path.join(app.get('rootFolder'), 'game.db')

  app.use((req, res, next) => {
    res.database = {
      file: databaseFile,
      time: (() => {
        var update = fs.statSync(databaseFile)
        update = new Date(update.mtime).toLocaleString()
        return update
      })()
    }
    next()
  })

}
