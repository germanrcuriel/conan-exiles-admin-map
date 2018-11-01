import BaseController from './BaseController'
import queries from '../../config/sql'

class CrabPotsController extends BaseController {

  getSql () {
    return queries.crabPots
  }

}

module.exports = CrabPotsController
