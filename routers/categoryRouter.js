const express = require('express');

const categoryRouters = express.Router();

const controllerCategories = require('../controller/controllerCategories');
const controllerUsers = require('../controller/controllerUsers');

categoryRouters.post('/',
controllerUsers.tokenExists,
controllerUsers.tokenIsValid,
controllerCategories.verifyNameCategoryExists,
controllerCategories.create);

categoryRouters.get('/',
controllerUsers.tokenExists,
controllerUsers.tokenIsValid,
controllerCategories.findAll,
);
module.exports = categoryRouters;