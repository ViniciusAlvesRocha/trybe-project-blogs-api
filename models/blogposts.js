module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.STRING,
    updated: DataTypes.STRING,
  },
  { timestamps: false });

  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.Users, {
      foreignKey: 'userId', as: 'user',
    });
  };
  return BlogPosts;
};