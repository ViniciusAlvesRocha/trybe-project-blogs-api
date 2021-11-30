// models/PostsCategories.js
module.exports = (sequelize, DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    postId: DataTypes.STRING,
    categoryId: DataTypes.STRING,
  },
  { timestamps: false, tableName: 'PostsCategories' });
  
  PostsCategories.associate((models) => {
    models.BlogPosts.belongsToMany(models.Categories, {
      as: 'categories', through: PostsCategories, foreignKey: 'postId', otherKey: 'categoryId',
    });
  });
  PostsCategories.associate((models) => {
    models.Categories.belongsToMany(models.BlogPosts, {
      as: 'posts', through: PostsCategories, foreignKey: 'categoryId', otherKey: 'postId',
    });
  });
  return PostsCategories;
};