const express = require('express')

const app = express()

require('./middleware')(app)
require('./routes')(app)

app.listen(app.get('port'), () => console.log(`App listening on port ${app.get('port')}`))
