'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
   .use(bodyParser.json())
   .use(morgan('dev'))
   .use(express.static('public'))
   .get('/', (req, res) => {
     res.sendFile('/public/child.html', {'root': './'})
   })

module.exports = app;
