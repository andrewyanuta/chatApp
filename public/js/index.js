var socket = io()

socket.on('connect', function () {
  console.log('Connected to server')

  // socket.emit('createMessage', {
  //   from: 'Andrew',
  //   text: 'Hey there!'
  // })
})

socket.on('disconnect', function () {
  console.log('Disconnected from server!')
})

socket.on('newMessage', function (message) {
  console.log('message', message)
})
