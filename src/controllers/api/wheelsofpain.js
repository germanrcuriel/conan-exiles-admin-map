const sqlite = require('sqlite')

const queries = require('../../config/sql')

class WheelsOfPainController {

  async getAll (req, res) {
    try {
      const db = await sqlite.open(res.database.file, { mode: sqlite.OPEN_READONLY })
      const data = await db.all(queries.wheelsOfPain)
      res.send({ data: data, update: res.database.time })
      await db.close()
    } catch (e) {
      res.send({ error: "There was an error while querying the database" })
    }
  }

}

module.exports = WheelsOfPainController
