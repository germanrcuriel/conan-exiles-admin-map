import express from 'express'

import middleware from './middleware'
import routes from './routes'

const app = express()

middleware(app)
routes(app)

app.listen(app.get('port'), () => console.log(`App listening on port ${app.get('port')}`))
