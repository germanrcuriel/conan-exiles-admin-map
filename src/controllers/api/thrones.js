import BaseController from './BaseController'
import queries from '../../config/sql'

class ThronesController extends BaseController {

    getSql() {
        return queries.thrones
    }

}

module.exports = ThronesController