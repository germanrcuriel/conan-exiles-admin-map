import { join } from 'path'
import express from 'express'

const staticMiddleware = (app) => {
  app.use('/assets', express.static(join(app.get('rootFolder'), 'public/assets')))
}

export default staticMiddleware
