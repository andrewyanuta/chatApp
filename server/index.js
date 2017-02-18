'use strict'
const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const { generateMessage } = require('./utils/message')

const publicPath = path.join(__dirname, './../public')
const PORT = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

io.on('connection', socket => {
  console.log('New user connected!')

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'))

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'A new user has joined'))

  socket.on('disconnect', () => {
    console.log('User was disconnected!')
  })

  socket.on('createMessage', (message, done) => {
    message.createdAt = new Date().getTime()
    io.emit('newMessage', generateMessage(message.from, message.text))
    return done('This is from the server');
  })
})

app.use(express.static(publicPath))

server.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`)
})
