import BaseController from './BaseController'
import queries from '../../config/sql'

class TrebuchetsController extends BaseController {

  getSql () {
    return queries.trebuchets
  }

}

module.exports = TrebuchetsController
