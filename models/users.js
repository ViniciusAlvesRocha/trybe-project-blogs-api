// models/users.js
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    // A declaração da Foreign Key é opcional no model
  },
  {
    timestamps: false,
    tableName: 'Users',
  });

  Users.associate((models) => {
    models.Users.hasMany(models.BlogPosts, {
      foreignKey: 'postId', as: 'user_posts',
    });
  });
  
  return Users;
};