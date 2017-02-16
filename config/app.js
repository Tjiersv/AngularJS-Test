'use strict'

//  LIBs
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

//  SERVER
const app = express()

//  MIDDLEWAREs
app.use(bodyParser.urlencoded({extended: false}))
   .use(bodyParser.json())
   .use(morgan('dev'))
   .use(express.static('public'))

app.get('/', function (req, res) {
  res.send(index.html)
})

//  MODULE EXPORTS
module.exports = app
