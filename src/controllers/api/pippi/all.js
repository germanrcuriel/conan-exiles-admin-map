import BaseController from '../BaseController'
import queries from '../../../config/sql'

class PippiAllController extends BaseController {

  getSql () {
    return queries.pippiAll
  }

}

module.exports = PippiAllController
