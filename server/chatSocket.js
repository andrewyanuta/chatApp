const {
  generateMessage,
  generateLocationMessage,
} = require('./utils/message')
const {
  isRealString,
} = require('./utils/validation')
const {
  Users,
} = require('./utils/users')

const CHAT_BOT_NAME = 'Chat Bot'

const users = new Users()

const chatSocket = (io) => (socket) => {
  console.log('New user connected!')

  socket.on('disconnect', () => {
    console.log('User was disconnected!')
  })

  socket.on('join', (params, done) => {
    if (!isRealString(params.name) || !isRealString(params.room)) {
      return done('Name and Room are required')
    }

    socket.join(params.room)
    users.removeUser(socket.id)
    users.addUser(socket.id, params.name, params.room)

    io.to(params.room).emit('updateUserList', users.getUserList(params.room))
    socket.emit('newMessage', generateMessage(CHAT_BOT_NAME, 'Welcome to the chat app'))
    socket.broadcast.to(params.room).emit('newMessage',
      generateMessage(CHAT_BOT_NAME, `${params.name} has joined`))

    return done()
  })

  socket.on('createMessage', (message, done) => {
    const user = users.getUser(socket.id)

    if (user && isRealString(message.text)) {
      io.to(user.room).emit('newMessage', generateMessage(user.name, message.text))
    }
    return done()
  })

  socket.on('createLocationMessage', (coords) => {
    const user = users.getUser(socket.id)
    if (user) {
      io.to(user.room).emit('newLocationMessage',
        generateLocationMessage(user.name, coords.latitude, coords.longitude))
    }
  })

  socket.on('disconnect', () => {
    const user = users.removeUser(socket.id)

    if (user) {
      io.to(user.room).emit('updateUserList', users.getUserList(user.room))
      io.to(user.room).emit('newMessage', generateMessage(CHAT_BOT_NAME, `${user.name} has left.`))
    }
  })
}

module.exports = chatSocket
