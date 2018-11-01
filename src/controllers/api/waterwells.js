import BaseController from './BaseController'
import queries from '../../config/sql'

class WaterWellsController extends BaseController {

  getSql () {
    return queries.waterWells
  }

}

module.exports = WaterWellsController
