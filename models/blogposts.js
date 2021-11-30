// models/users.js
module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.STRING,
    updated: DataTypes.STRING,
  },
  { timestamps: false });
  BlogPosts.associate((models) => {
    models.BlogPosts.hasMany(models.Categories, {
      foreignKey: 'categoryId', as: 'categories',
    });
    models.BlogPosts.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user',
    });
  });
  return BlogPosts;
};