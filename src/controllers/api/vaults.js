import BaseController from './BaseController'
import queries from '../../config/sql'

class VaultsController extends BaseController {

  getSql () {
    return queries.vaults
  }

}

module.exports = VaultsController
