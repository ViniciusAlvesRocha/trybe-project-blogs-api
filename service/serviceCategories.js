const { Categories } = require('../models');

const create = async (category) => {
  const categoryCreated = await Categories.create(category);
  return categoryCreated;
};

module.exports = {
  create,
};