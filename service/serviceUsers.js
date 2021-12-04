const jwt = require('jsonwebtoken');
const { Users } = require('../models');
const secret = 'turma11';

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const validateDisplayName = (displayName) => {
  if (displayName.length >= 8) return true;
  return false;
};

const emailIsEmpty = (email) => {
  if (email === '') return true;
  return false;
};

const passwordIsEmpty = (password) => {
  if (password === '') return true;
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
  return userCreated;
};

const login = async (user) => {
  const { email, password } = user;
  const userVerified = await Users.findOne({ where: { email, password } });
  try {
    console.log(userVerified);
    const payload = {
      email: userVerified.dataValues.email,
      password: userVerified.dataValues.password,
    };
    const token = jwt.sign(payload, secret, jwtConfig);
    return token;
  } catch (err) {
    return false;
  }
};

const getAll = async () => Users.findAll();

const findByPk = async (id) => {
  const user = await Users.findByPk(id);
  if (user) {
    return {
      id: user.id,
      displayName: user.displayName,
      email: user.email,
      image: user.image,
    };
  }
  return false;
};

module.exports = {
  validateDisplayName,
  validateEmail,
  verifyEmailExists,
  validatePassword,
  create,
  login,
  emailIsEmpty,
  passwordIsEmpty,
  getAll,
  findByPk,
};