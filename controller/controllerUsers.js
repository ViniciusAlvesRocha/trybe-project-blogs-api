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
  console.log('EMAIL:', email);
  if (serviceUsers.emailIsEmpty(email)) {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }
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
  if (serviceUsers.passwordIsEmpty(password)) {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
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

const login = async (req, res) => {
  const { email, password } = req.body;
  const token = await serviceUsers.login({ email, password }); 
  if (!token) return res.status(400).json({ message: 'Invalid fields' });
  
  return res.status(200).json({ token });
};

const tokenExists = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  next();
};

const tokenIsValid = (req, res, next) => {
  const { authorization } = req.headers;
  const isVerified = jwt.verify(authorization, secret, (error, decoded) => {
    if (error) return false;
    return decoded;
  });
  console.log('Token verificado');
  console.log(isVerified);
  if (!isVerified) return res.status(401).json({ message: 'Expired or invalid token' });
  next();
};

const getAll = async (_req, res) => {
  const users = await serviceUsers.getAll();
  return res.status(200).json(users);
};

module.exports = {
  validateDisplayName,
  validateEmail,
  verifyEmailExists,
  validatePassword,
  create,
  login,
  getAll,
  tokenExists,
  tokenIsValid,
};