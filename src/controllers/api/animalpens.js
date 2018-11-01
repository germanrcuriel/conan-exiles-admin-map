import BaseController from './BaseController'
import queries from '../../config/sql'

class AnimalPensController extends BaseController {

  getSql () {
    return queries.animalpens
  }

}

module.exports = AnimalPensController
