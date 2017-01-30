'use strict'

const app = require('./config/app')
const config = require('./config/config')

const port = config.port

app.listen(port, () => {
  console.log(`servidor escuchando en http://localhost:${port}`)
})
