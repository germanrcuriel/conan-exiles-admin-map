const sqlite = require('sqlite')

const queries = require('../../config/sql')

const nullValue = 'NULL'

class PlayersController {

  async getAll (req, res) {
    try {
      const db = await sqlite.open(res.database.file, { mode: sqlite.OPEN_READONLY })
      const data = await db.all(queries.players)

      data.map((player) => {
        if (player.char_name) player.char_name = player.char_name.slice(1, -1)
        if (player.guild_name) {
          if (player.guild_name === nullValue || !player.guild_name) {
            player.guild_name = ''
          } else {
            player.guild_name = player.guild_name.slice(1, -1)
          }
        }
        if (player.rank === nullValue || !player.rank) player.rank = ''
      })

      res.send({ data: data, update: res.database.time })
      await db.close()
    } catch (e) {
      res.send({ error: "There was an error while querying the database" })
    }
  }

}

module.exports = PlayersController
