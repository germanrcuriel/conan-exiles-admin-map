import BaseController from './BaseController'
import queries from '../../config/sql'

class MapRoomsController extends BaseController {

  getSql () {
    return queries.mapRooms
  }

}

module.exports = MapRoomsController
