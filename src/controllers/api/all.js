import BaseController from './BaseController'
import queries from '../../config/sql'

class AllController extends BaseController {

  getSql () {
    return queries.all
  }

}

module.exports = AllController
