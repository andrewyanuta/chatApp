const expect = require('expect')
const {
  createMessage,
  createLocationMessage,
} = require('./message')

describe('generateMessage', () => {
  it('shuold generate correct message object', () => {
    const owner = 'Jhon Doe'
    const message = 'testing message cretation'

    const msg = createMessage(owner, message)
    expect(msg.createAt).toBeA('number')
    expect(msg).toInclude({ owner, message })
  })
})

describe('generateLocationMessage', () => {
  it('should generate correct locationMessage object', () => {
    const owner = 'Jhon Doe'
    const longitude = 10
    const latitude = 17
    const url = `https://www.google.com/maps/?q=${latitude},${longitude}`

    const msg = createLocationMessage(owner, latitude, longitude)

    expect(msg.createAt).toBeA('number')
    expect(msg).toInclude({ owner, url })
  })
})
