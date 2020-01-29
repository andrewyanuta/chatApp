
const expect = require('expect')

const { Users } = require('./users')

describe('Users', () => {
  const controller = new Users()
  controller.users = [{
    id: '1',
    name: 'Mike',
    room: 'Launge',
  }, {
    id: '2',
    name: 'Jen',
    room: 'Bar',
  }, {
    id: '3',
    name: 'Julie',
    room: 'Bar',
  }]


  it('should add a new user', () => {
    const user = {
      id: '123',
      name: 'Andrew',
      room: 'Launge',
    }
    const resUser = controller.addUser(user)

    expect(resUser).toEqual(user)
    expect(controller.users.length).toEqual(4)
  })

  it('should remove a user', () => {
    const userId = '1'
    controller.removeUser(userId)

    expect(controller.getUser(userId)).toNotExist()
    expect(controller.users.length).toBe(3)
  })

  it('should not remove user', () => {

  })

  it('shoud find user', () => {
    const userId = '2'
    const user = controller.getUser(userId)

    expect(user.id).toBe(userId)
  })

  it('shoud not find user', () => {
    const userId = '22'

    expect(controller.getUser(userId)).toNotExist()
  })

  it('should return users from room "Bar"', () => {
    const list = controller.getUserList('Bar')
    expect(list.length).toBe(2)
  })
})
