const servicePost = require('../service/servicePosts');

const create = async (req, res) => {
  const post = req.body;
  const { authorization } = req.headers;
  const postCreated = await servicePost.create(post, authorization);
  console.log('POST:::::', postCreated);
  return res.status(201).json(postCreated);
};

const titleExists = (req, res, next) => {
  console.log(titleExists);
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: '"title" is required' });
  next();
};

const contentExists = (req, res, next) => {
  console.log('contentExists');
  const { content } = req.body;
  if (!content) return res.status(400).json({ message: '"content" is required' });
  next();
};

const categoryIdExists = (req, res, next) => {
  console.log('categoryIdExists');
  const { categoryIds } = req.body;
  if (!categoryIds) return res.status(400).json({ message: '"categoryIds" is required' });
  next();
};

module.exports = {
  create,
  titleExists,
  contentExists,
  categoryIdExists,
};