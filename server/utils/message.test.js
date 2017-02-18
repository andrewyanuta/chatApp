'use strict'
const expect = require('expect')
const {
  generateMessage,
  generateLocationMessage
} = require('./message')

describe('generateMessage', () => {
  it('shuold generate correct message object', () => {
    const from = 'Jhon Doe'
    const text = 'testing message cretation'
    const message = generateMessage(from, text)
    expect(message.createAt).toBeA('number')
    expect(message).toInclude({
      from,
      text
    })
  })
})


describe('generateLocationMessage', () => {
  it('shuold generate correct locationMessage object', () => {
    const from = 'Jhon Doe'
    const longitude = 10
    const latitude = 17
    const url = `https://www.google.com/maps/?q=${latitude},${longitude}`
    const message = generateLocationMessage(from, latitude, longitude)
    expect(message.createAt).toBeA('number')
    expect(message).toInclude({ from, url })
  })
})
