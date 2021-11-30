const { Users } = require('../models');

const test = async () => {
  // console.log(require('../models'));
  // console.log(await Users.findOne({ where: { email: 'vinialvesrocha@gmail.com' } }));
};
test();

const validateDisplayName = (displayName) => {
  if (displayName.length >= 8) return true;
  return false;
};

const validateEmail = (email) => {
  const regExpression = /[\w]+@[\w]+/;
  if (regExpression.test(email)) return true;
};

const validatePassword = (password) => {
  if (password.length === 6) return true;
};

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
};