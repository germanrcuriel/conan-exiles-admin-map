const sqlite = require('sqlite')
const SmartBuffer = require('smart-buffer').SmartBuffer

const queries = require('../../../config/sql')

class PippiThespiansController {

  async getAll (req, res) {
    try {
      const db = await sqlite.open(res.database.file, { mode: sqlite.OPEN_READONLY })
      const data = await db.all(queries.pippi)

      data.map((pippi) => {
        pippi.name = getPippiMobName(pippi)
        pippi.info = getPippiMobProfession(pippi)
        delete pippi.buffer
      })

      res.send({ data: data, update: res.database.time })
      await db.close()
    } catch (e) {
      res.send({ error: "There was an error while querying the database" })
    }
  }

}

function getPippiMobName (pippi) {
  const pippiName = SmartBuffer.fromBuffer(pippi.buffer).readString('ascii')
  const position = pippiName.indexOf('StrProperty')

  let name = pippiName.substr(position + 25, pippiName.indexOf('profession') - position - 26).trim()
  name = JSON.stringify(name)
    .replace(/\\u[0-9a-f]{4}/gi, '')
    .replace(/\\[bfnrt]/gi, '')
    .replace(/\"/gi, '')
    .slice(0, -1)

  return name
}

function getPippiMobProfession (pippi) {
  let pippiProfession = SmartBuffer.fromBuffer(pippi.buffer).readString('ascii')
  pippiProfession = pippiProfession.substr(pippiProfession.indexOf('profession'))
  const position = pippiProfession.indexOf('StrProperty')

  let name = pippiProfession.substr(position + 25, pippiProfession.indexOf('isInteraction') - position - 25).trim()
  name = JSON.stringify(name)
    .replace(/\\u[0-9a-f]{4}/gi, '')
    .replace(/\\[bfnrt]/gi, '')
    .replace(/\"/gi, '')
    .slice(0, -1)

  return name
}

module.exports = PippiThespiansController
