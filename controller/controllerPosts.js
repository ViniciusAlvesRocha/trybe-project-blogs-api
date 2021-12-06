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

const getAll = async (_req, res) => {
  console.log('servicePost.getAll');
  return res.status(200).json([
    { id: 1,
      title: 'Post do Ano',
      content: 'Melhor post do ano',
      userId: 1,
      published: '2011-08-01T19:58:00.000Z',
      updated: '2011-08-01T19:58:51.000Z',
      user: {
        id: 1,
        displayName: 'Lewis Hamilton',
        email: 'lewishamilton@gmail.com',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg',
      },
      categories: [{
          id: 1,
          name: 'Inovação',
        }] }]);
};

module.exports = {
  create,
  titleExists,
  contentExists,
  categoryIdExists,
  getAll,
};