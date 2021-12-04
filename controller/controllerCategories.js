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

module.exports = {
  verifyNameCategoryExists,
  create,
};