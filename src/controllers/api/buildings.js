import BaseController from './BaseController'
import queries from '../../config/sql'

class BuildingsController extends BaseController {

  getSql () {
    return queries.buildings
  }

}

module.exports = BuildingsController
