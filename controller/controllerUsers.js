const serviceUsers = require('../service/serviceUsers');

const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (serviceUsers.validateDisplayName(displayName)) return res.status(200).json();
  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  serviceUsers.validateEmail(email);
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  serviceUsers.validatePassword(password);
};

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
};