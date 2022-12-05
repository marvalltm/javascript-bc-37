const users = require('../data/users');

module.exports = function (request, response, next) {
  const token = request.headers.authorization;
  const user = users.find(item => item.token === token);
  if (user) {
    next();
  } else {
    response.status(401).send({ message: 'uncorrect token' });
  }
};
