const expect = require('expect')
const { isRealString } = require('./validation')

describe('isRealString', () => {
  it('should reject non-string values',  () => {
    expect(isRealString(null)).toBe(false)
    expect(isRealString(4443)).toBe(false)
    expect(isRealString({})).toBe(false)
    expect(isRealString([])).toBe(false)
  })

  it('should reject string with only spaces', () => {
    expect(isRealString('   ')).toBe(false)
  })

  it('should allow string with non-space characters', function () {
    expect(isRealString('  Jhon Doe  ')).toBe(true)
  })

})
