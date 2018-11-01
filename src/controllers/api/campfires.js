import BaseController from './BaseController'
import queries from '../../config/sql'

class CampfiresController extends BaseController {

  getSql () {
    return queries.campfires
  }

}

module.exports = CampfiresController
