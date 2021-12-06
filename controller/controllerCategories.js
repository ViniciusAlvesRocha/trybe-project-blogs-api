const serviceCategory = require('../service/serviceCategories');

const verifyNameCategoryExists = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  next();
};

const create = async (req, res) => {
    const category = req.body;
    const categoryCreated = await serviceCategory.create(category);
    return res.status(201).json(categoryCreated);
};

const findAll = async (_req, res) => {
  const categories = await serviceCategory.findAll();
  return res.status(200).json(categories);
};

const verifyCategorysExistsInDatabase = async (req, res, next) => {
  const { categoryIds } = req.body;
  const categoriesExists = await serviceCategory.verifyCategorysExistsInDatabase(categoryIds);
  console.log('verifyCategorysExistsInDatabase', categoriesExists);
  if (!categoriesExists) return res.status(400).json({ message: '"categoryIds" not found' });
  next();
};

module.exports = {
  verifyNameCategoryExists,
  verifyCategorysExistsInDatabase,
  create,
  findAll,
};