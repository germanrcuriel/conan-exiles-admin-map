import BaseController from './BaseController'
import queries from '../../config/sql'

class BedsController extends BaseController {

  getSql () {
    return queries.beds
  }

}

module.exports = BedsController
