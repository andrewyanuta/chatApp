'use strict'
const expect = require('expect')
const { generateMessage } = require('./message')

describe('message utils', () => {
  it('shuold create a message with right propertioes', () => {
      const from = 'Jhon Doe'
      const text = 'testing message cretation'
      const message = generateMessage(from, text)
      console.log(JSON.stringify(message))
      expect(message.createAt).toBeA('number')
      expect(message).toInclude({
        from,
        text
      })
  })
})
