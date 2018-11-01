import BaseController from './BaseController'
import queries from '../../config/sql'

class FishnetsController extends BaseController {

  getSql () {
    return queries.fishNets
  }

}

module.exports = FishnetsController
