import BaseController from './BaseController'
import queries from '../../config/sql'

class ChestsController extends BaseController {

  getSql () {
    return queries.chests
  }

}

module.exports = ChestsController
