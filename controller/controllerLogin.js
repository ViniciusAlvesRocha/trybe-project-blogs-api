/* const messageErrorFields = { message: 'All fields must be filled' };
const jwt = require('jsonwebtoken');
const serviceLogin = require('../service/serviceLogin');

const secret = 'turma11';

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const login = async (req, res, _next) => {
  const { email, password } = req.body;
  const isValid = await serviceLogin.login(email, password);
  console.log('usuário dentro da variável isValid::', isValid);
  if (!isValid) {
    return res.status(401).json({ message: 'Incorrect username or password' });
  } 

  const payload = {
    user: isValid,
  };

  const token = jwt.sign(payload, secret, jwtConfig);
  return res.status(200).json({ token });
};

module.exports = {
  varifyEmailExistsInRequest,
  validatePassword,
  login,
}; */