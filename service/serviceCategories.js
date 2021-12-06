const { Categories } = require('../models');

const create = async (category) => {
  const categoryCreated = await Categories.create(category);
  return categoryCreated;
};

const findAll = async () => {
  const categories = Categories.findAll();
  return categories;
};

const verifyCategorysExistsInDatabase = async (categoryIds) => {
  let result = await categoryIds.map(async (id) => Categories.findOne({ where: { id } }));
  result = await Promise.all(result).then((values) => values);
  return (result.some((item) => item !== null));
};

module.exports = {
  create,
  findAll,
  verifyCategorysExistsInDatabase,
};