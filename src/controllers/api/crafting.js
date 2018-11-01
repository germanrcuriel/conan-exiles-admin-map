import BaseController from './BaseController'
import queries from '../../config/sql'

class CraftingController extends BaseController {

  getSql () {
    return queries.crafting
  }

}

module.exports = CraftingController
