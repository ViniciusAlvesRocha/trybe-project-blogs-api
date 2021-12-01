const express = require('express');

const userRouter = express.Router();

const controllerUsers = require('../controller/controllerUsers');

userRouter.post('/',
controllerUsers.validateDisplayName,
controllerUsers.validateEmail,
controllerUsers.verifyEmailExists,
controllerUsers.validatePassword,
controllerUsers.create);

module.exports = userRouter;