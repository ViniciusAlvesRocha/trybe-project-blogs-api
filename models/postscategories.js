// models/PostsCategories.js
module.exports = (sequelize, DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    postId: DataTypes.STRING,
    categoryId: DataTypes.STRING,
  },
  { timestamps: false, tableName: 'PostsCategories' });
  
  PostsCategories.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Categories, {
      as: 'post_cats', through: PostsCategories, foreignKey: 'postId', otherKey: 'categoryId',
    });

    models.Categories.belongsToMany(models.BlogPosts, {
      as: 'cat_posts', through: PostsCategories, foreignKey: 'categoryId', otherKey: 'postId',
    });
  };
 /*  PostsCategories.associate = (models) => {
    
  }; */
  return PostsCategories;
};