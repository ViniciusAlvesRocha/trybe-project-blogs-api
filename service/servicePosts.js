const { BlogPosts, Users, Categories, PostsCategories } = require('../models');
const serviceUsers = require('./serviceUsers');

const create = async (post, token) => {
  const userId = await serviceUsers.getUserIdByToken(token);
  console.log('userId:::', userId);

  const postCreated = await BlogPosts.create({
    title: post.title,
    content: post.content,
    userId,
    published: new Date().toISOString(),
  });

  console.log(postCreated);

  // bulkCreate
  const { categoryIds } = post;
  const { id, title, content } = postCreated.dataValues;
  const categorieIdWithIdPost = categoryIds.map((number) => ({ postId: id, categoryId: number }));
  const PostsCategoriesCreated = await PostsCategories.bulkCreate(categorieIdWithIdPost);
  console.log('PostsCategories created', PostsCategoriesCreated);
  return { id, userId, title, content };
};

const getAll = async () => {
  const result = await PostsCategories.findAll({
    include: [
      { model: Users, as: 'user', attributes: { exclude: 'password' } },
      { model: Categories, as: 'categories' },
    ],
  });
  return result;
};

module.exports = {
  create,
  getAll,
};
