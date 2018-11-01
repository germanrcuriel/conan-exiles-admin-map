import BaseController from './BaseController'
import queries from '../../config/sql'

class WheelsOfPainController extends BaseController {

  getSql () {
    return queries.wheelsOfPain
  }

}

module.exports = WheelsOfPainController
