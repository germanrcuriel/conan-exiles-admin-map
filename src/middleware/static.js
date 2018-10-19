const path = require('path')
const express = require('express')

module.exports = (app) => {
  app.use('/assets', express.static(path.join(app.get('rootFolder'), 'public/assets')))
}
