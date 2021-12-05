const { Categories } = require('../models');

const create = async (category) => {
  const categoryCreated = await Categories.create(category);
  return categoryCreated;
};

const findAll = async () => {
  const categories = Categories.findAll();
  return categories;
};

module.exports = {
  create,
  findAll,
};