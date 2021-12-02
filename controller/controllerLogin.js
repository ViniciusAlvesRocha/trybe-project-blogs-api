const serviceUsers = require('../service/serviceUsers');

const validateEmail = (req, res, next) => {
  console.log('validateEmail');
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: '"email" is required' });
  if (!serviceUsers.validateEmail(email)) {
    return res.status(400).json({ message: 'Invalid fields' });
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
    return res.status(400).json({ message: 'Invalid fields' });
  }
  next();
};

const login = async (req, res) => {
  const user = req.body;
  const token = await serviceUsers.login(user);
  return res.status(200).json({ token });
};

module.exports = {
  validateEmail,
  validatePassword,
  login,
};
