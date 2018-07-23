require('babel-register')
require('babel-polyfill')

const server = require('./server').default

server( process.env.PORT || 3000 )
