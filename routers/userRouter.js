const express = require('express');

const userRouter = express.Router();

const controllerUsers = require('../controller/controllerUsers');

userRouter.post('/', controllerUsers.validateDisplayName);

module.exports = userRouter;