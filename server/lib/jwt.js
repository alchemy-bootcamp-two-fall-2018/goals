const jwt = require('jsonwebtoken');

module.exports = {
  sign(profile) {
    return jwt.sign({ id: profile.id });
  },
  verify(token) {
    return jwt.verify(token);
  }
};