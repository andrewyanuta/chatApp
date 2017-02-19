'use strict'
const expect = require('expect')

const { Users } = require('./users')

describe('Users', () => {
  let users

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }]
  })

  it('should add a new user', () => {
    const users = new Users()
    const user = {
      id: '123',
      name: 'Andrew',
      room: 'Node Fan'
    }
    const resUser = users.addUser(user.id, user.name, user.room)
    expect(users.users).toEqual([user])
  })

  it('should remove a user', () => {
    const userId = '1'
    const user = users.removeUser(userId)
    expect(users.users.length).toBe(3)
  })

  it('should not remove user', () => {

  })

  it('shoud find user', () => {
    const userId = '2'
    const user = users.getUser(userId)

    expect(user.id).toBe(userId)
  })

  it('shoud not find user', () => {
    const userId = '22'
    const user = users.getUser(userId)

    expect(user).toNotExist()
  })

  it('should return names for node course', () => {

  })

})
