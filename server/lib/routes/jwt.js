const jwt = require('jsonwebtoken');
const APP_SECRET = 'CHANGEME';

module.exports = {
  sign(profile) {
    return jwt.sign({ id: profile.id }, APP_SECRET);
  },
  verify(token) {
    return jwt.verify(token, APP_SECRET);
  }
};