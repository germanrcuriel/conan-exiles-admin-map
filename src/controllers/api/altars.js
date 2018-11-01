import BaseController from './BaseController'
import queries from '../../config/sql'

class AltarsController extends BaseController {

  getSql () {
    return queries.altars
  }

}

module.exports = AltarsController
