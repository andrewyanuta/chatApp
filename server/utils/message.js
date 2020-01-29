'us strict'

const moment = require('moment')

/**
 *
 * @param {String} owner - name
 * @param {*} message
 *
 * @returns {Obeject} message
 */
const createMessage = (owner, message) => ({
  owner,
  message,
  createAt: moment().valueOf(),
})

/**
 *
 * @param {String} owner
 * @param {Number} latitude
 * @param {Number} longitude
 *
 * @returns {Object} location message
 */
const createLocationMessage = (owner, latitude, longitude) => ({
  owner,
  url: `https://www.google.com/maps/?q=${latitude},${longitude}`,
  createAt: moment().valueOf(),
})

module.exports = {
  createMessage,
  createLocationMessage,
}
