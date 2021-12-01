const { Users } = require('../models');

const validateDisplayName = (displayName) => {
  if (displayName.length >= 8) return true;
  return false;
};

const validateEmail = (email) => {
  const regExpression = /[\w]+@[\w]+/;
  if (regExpression.test(email)) return true;
  return false;
};

const verifyEmailExists = async (email) => {
  const user = await Users.findOne({ where: { email } });
  console.log('xxxxx:::', user);
  if (user) return true;
  return false;
};

const validatePassword = (password) => {
  if (password.length === 6) return true;
  return false;
};

const create = async (user) => {
  const userCreated = await Users.create(user);
  console.log('service create', userCreated);
  return userCreated;
};

module.exports = {
  validateDisplayName,
  validateEmail,
  verifyEmailExists,
  validatePassword,
  create,
};