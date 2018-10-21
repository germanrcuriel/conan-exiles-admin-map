var playersData
var markerLayers = {}
var map
var mapMinZoom = 2
var mapMaxZoom = 6
var rangeX = [ -296000, 412000 ]
var rangeY = [ -292000, 353500 ]
var boundsX = [ 14.4, 230.7 ]
var boundsY = [ -47.7, -245.3 ]
var disabledFilters = {}
var circleMarkerOptions = {
  color: 'black',
  weight: 1,
  fillColor: 'rgb(0, 187, 204)',
  fillOpacity: 1,
  radius: 5
}

var tooltipOptions = {
  direction: 'top'
}

var colorhash = new ColorHash({
  lightness: [ 0.4, 0.5, 0.6 ],
  saturation: [ 0.6, 0.8, 1 ]
})

function convertRange( value, r1, r2 ) {
  return (value - r1[0]) * (r2[1] - r2[0]) / (r1[1] - r1[0]) + r2[0]
}

function toLatLng(x, y) {
  return [ convertRange(y, rangeY, boundsY), convertRange(x, rangeX, boundsX) ]
}

function init() {
  map = L.map('map', {
    maxZoom: mapMaxZoom,
    minZoom: mapMinZoom,
    crs: L.CRS.Simple,
    attributionControl: false,
    zoomControl: false,
    maxBoundsViscosity: 1
  })

  var mapBounds = new L.LatLngBounds(
    map.unproject([0, 16128], mapMaxZoom),
    map.unproject([16128, 0], mapMaxZoom)
  )

  map.setMaxBounds(mapBounds)
  map.fitBounds(mapBounds)

  layer = L.tileLayer('assets/tiles/{z}/{x}/{y}.png', {
    minZoom: mapMinZoom,
    maxZoom: mapMaxZoom,
    bounds: mapBounds,
    tms: false
  }).addTo(map)

  getPlayers()
  showAll()
}

function getTooltipContent (marker) {
  var content = ''

  if (marker.kind) {
    marker.kind = language.phrases['items.' + marker.kind] || marker.kind
    content += marker.kind + '<br/>'
  }
  if (marker.name) content += marker.name + '<br/>'
  if (marker.info) content += marker.info + '<br/>'
  if (marker.char_name) content += marker.char_name + '<br/>'
  if (marker.guild_name) content += marker.guild_name + '<br/>'
  return content
}

function drawData (kind) {
  disabledFilters = {}
  var kindUrl = kind.replace('_', '/')

  $.getJSON('api/' + kindUrl, function (data) {
    $('.lastupdate').html(data.update)

    Object.keys(markerLayers).forEach(function (layer) {
      markerLayers[layer].clearLayers()
    })

    data.data.forEach(function (marker, index) {
      group = 'default'
      marker.stroke = 'black'

      if (marker.guild_name) {
        group = marker.guild_id
        marker.color = colorhash.hex(marker.guild_id + marker.guild_name)
      } else if (marker.char_name) {
        group = marker.char_id
        marker.color = colorhash.hex(marker.char_id + marker.char_name)
      } else if (marker.owner) {
        var owner = getOwnerById(marker.owner)
        group = marker.owner
        marker.guild_name = owner
        marker.color = colorhash.hex(marker.owner + owner) || 'pink'
      } else if (marker.info) {
        marker.color = 'yellow'
      }

      marker.tooltip = getTooltipContent(marker)

      createMarker(marker, group)
    })

    Object.keys(markerLayers).forEach(function (layer, a) {
      markerLayers[layer].addTo(map)
    })
  })
}

function getOwnerById (ownerId) {
  var owner

  playersData.find(function (player) {
    if (player.char_id === ownerId) {
      owner = player.char_name
      return
    }
    if (player.guild_id === ownerId) {
      owner = player.guild_name
      return
    }
  })

  if (owner) {
    return owner
  }

  return false
}

function toggleFilter (kind) {
  kind = kind.replace('/', '_')
  $('.' + kind + '-filter').removeClass('active')
  $('.show-all, .dropdown-item, .filters').removeClass('active')
  $('.filters, .' + kind + '-filter').addClass('active')

  drawData(kind)
}

function showAll () {
  dataset = {}
  $('.dropdown-item, .filters').removeClass('active')
  $('.show-all').addClass('active')
  drawData('all')
}

function onClick (point) {
  var input = document.createElement('textarea')
  document.body.appendChild(input)
  input.value = point.target.options.teleport
  input.select()
  document.execCommand('copy')
  input.remove()
  toastr.success('¡TeleportPlayer command copied!')
}

function createMarker(marker, group) {
  var opt = Object.assign({}, circleMarkerOptions)
  opt.fillColor = marker.color || opt.color
  opt.color = marker.stroke || opt.stroke
  opt.teleport = 'TeleportPlayer ' + marker.x + ' ' + marker.y + ' ' + marker.z

  if (group && !markerLayers[group]) markerLayers[group] = L.layerGroup()
  markerLayers['a'] = L.layerGroup()

  var point = L.circleMarker(toLatLng(marker.x, marker.y), opt)
    .bindTooltip(marker.tooltip, tooltipOptions)
    .on('click', onClick)

  if (group) {
    point.addTo(markerLayers[group])
    return
  }
  point.addTo(map)
}

function showLegendList () {
  $.getJSON('api/players', function (data) {
    $('.legend-list-table').html(generateLegendTable(data.data))
    $('#legendList').modal()
  })
}

function generateLegendTable (players) {
  var guilds = {}
  var solos = {}
  var tableContent = ''

  players.forEach(function (player) {
    if (player.guild_name) {
      if (guilds[player.guild_name]) return
      guilds[player.guild_name] = {
        id: player.guild_id,
        color: colorhash.hex(player.guild_id + player.guild_name)
      }
    } else {
      if (solos[player.char_name]) return
      solos[player.char_name] = {
        id: player.char_id,
        color: colorhash.hex(player.char_id + player.char_name)
      }
    }
  })

  tableContent += '<tr class="guild-list">'
  tableContent += '<th colspan="3" class="text-center">Guilds</th>'
  tableContent += '</tr>'

  Object.keys(guilds).forEach(function (name) {
    var disabled = ''
    if (disabledFilters[guilds[name].id]) {
      disabled = 'disabled'
    }

    tableContent += '<tr class="legend-list-item ' + disabled + '" data-legend="' + guilds[name].id + '" onClick="toggleLegend(\'' + guilds[name].id + '\')">'
    tableContent += '<td style="background-color: ' + guilds[name].color + '"></td>'
    tableContent += '<td>' + guilds[name].id + '</td>'
    tableContent += '<td>' + name + '</td>'
    tableContent += '</tr>'
  })

  tableContent += '<tr class="solo-list">'
  tableContent += '<th colspan="3" class="text-center">Players without guild</th>'
  tableContent += '</tr>'

  Object.keys(solos).forEach(function (name) {
    var disabled = ''
    if (disabledFilters[solos[name].id]) {
      disabled = 'disabled'
    }
    tableContent += '<tr class="legend-list-item ' + disabled + '" data-legend="' + solos[name].id + '" onClick="toggleLegend(\'' + solos[name].id + '\')">'
    tableContent += '<td style="background-color: ' + solos[name].color + '"></td>'
    tableContent += '<td>' + solos[name].id + '</td>'
    tableContent += '<td>' + name + '</td>'
    tableContent += '</tr>'
  })

  return tableContent
}

function toggleLegend (id) {
  if (disabledFilters[id]) {
    delete disabledFilters[id]
  } else {
    disabledFilters[id] = true
  }
  $('[data-legend="' + id + '"]').toggleClass('disabled')
  if (map.hasLayer(markerLayers[id])) {
    map.removeLayer(markerLayers[id])
  } else {
    map.addLayer(markerLayers[id])
  }
}

function showPlayerList () {
  $.getJSON('api/players', function (data) {
    $('.players-list-table').html(generatePlayerTable(data.data))
    $('#playersList').modal()
  })
}

function generatePlayerTable (players) {
  var tableContent = ''

  players.forEach(function (player) {
    tableContent += '<tr class="player-list-item">'
    tableContent += '<td>' + player.char_name + '</td>'
    tableContent += '<td>' + player.guild_name + '</td>'
    tableContent += '<td>' + player.rank + '</td>'
    tableContent += '<td>' + player.level + '</td>'
    tableContent += '<td>' + player.last_online + '</td>'
    tableContent += '</tr>'
  })

  return tableContent
}

function getPlayers () {
  $.getJSON('api/players', function (data) {
    playersData = data.data
  })
}
