const jwt = require('jsonwebtoken');
const serviceUsers = require('../service/serviceUsers');
const { Users } = require('../models');

const secret = 'turma11';

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const userAlreadyExistsMessage = {
  message: 'User already registered',
};

const displayNameError = '"displayName" length must be at least 8 characters long';

const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  console.log('validateDisplayName');
  if (!serviceUsers.validateDisplayName(displayName)) {
    return res.status(400).json({ message: displayNameError });
  }
  next();
};

const validateEmail = (req, res, next) => {
  console.log('validateEmail');
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: '"email" is required' });
  if (!serviceUsers.validateEmail(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
};

const verifyEmailExists = async (req, res, next) => {
  const { email } = req.body;
  console.log('verifyEmailExists');
  if (await serviceUsers.verifyEmailExists(email)) {
    return res.status(409).json(userAlreadyExistsMessage);
  }
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({
      message: '"password" is required',
    });
  }
  console.log('validatePassword');
  if (!serviceUsers.validatePassword(password)) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  next();
};

const create = async (req, res) => {
  const user = req.body;
  const userCreated = await serviceUsers.create(user);
  if (!userCreated.dataValues) return res.status(404).json({ message: 'error create user' });
  
  const payload = {
    email: userCreated.dataValues.email,
    password: userCreated.dataValues.password,
  };

  const token = jwt.sign(payload, secret, jwtConfig);
  return res.status(201).json({ token });
};

module.exports = {
  validateDisplayName,
  validateEmail,
  verifyEmailExists,
  validatePassword,
  create,
};