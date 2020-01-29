
const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const chatSocket = require('./chatSocket')

const publicPath = path.join(__dirname, './../public')
const PORT = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

io.on('connection', chatSocket(io))

app.use(express.static(publicPath))

server.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`)
})
