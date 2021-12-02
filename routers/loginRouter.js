const express = require('express');

const loginRouter = express.Router();
// const controllerLogin = require('../controller/controllerLogin');
const controllerUsers = require('../controller/controllerUsers');

loginRouter.post('/',
controllerUsers.validateEmail,
controllerUsers.validatePassword,
controllerUsers.login);

module.exports = loginRouter;
