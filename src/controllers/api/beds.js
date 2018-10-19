const sqlite = require('sqlite')

const queries = require('../../config/sql')

class BedsController {

  async getAll (req, res) {
    try {
      const db = await sqlite.open(res.database.file, { mode: sqlite.OPEN_READONLY })
      const data = await db.all(queries.bedrolls)
      res.send({ data: data, update: res.database.time })
      await db.close()
    } catch (e) {
      res.send({ error: res.__('DATABASE_ERROR') })
    }
  }

}

module.exports = BedsController
