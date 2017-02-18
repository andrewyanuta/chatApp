var socket = io()

socket.on('connect', function () {
  console.log('Connected to server')
})

socket.on('disconnect', function () {
  console.log('Disconnected from server!')
})

socket.on('newMessage', function (message) {
  console.log('message', message)
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`)
  jQuery('#messages').append(li)
})

jQuery('#message-form').on('submit', function (event) {
  event.preventDefault();
  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function (data) {
    console.log('Got it', data)
  })
})

var locationButton = jQuery('#send-location')

locationButton.on('click', function () {
  if (!navigator.geolocation) return alert('Geolocation not supported by your browser')
  navigator.geolocation.getCurrentPosition(function (position) {
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
  }, function () {
    return alert('Unable to fetch location.')
  })
})
