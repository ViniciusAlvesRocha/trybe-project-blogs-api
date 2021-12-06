const User = (sequelize, DataTypes) => {
  const UserIn = sequelize.define('Users', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
},
{ timestamps: false, tableName: 'Users' });

User.associate = (models) => {
  User.hasMany(models.BlogPost, { 
    foreignKey: 'userId', as: 'blogPosts',
  });
};

  return UserIn;
};

module.exports = User; 