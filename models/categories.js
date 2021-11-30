// models/categories.js
module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Categories',
  });

  console.log('oi', Categories);

  Categories.associate((models) => {
    models.Categories.hasMany(models.BlogPosts, {
      foreignKey: 'postId', as: 'posts',
    });
  });

  return Categories;
};