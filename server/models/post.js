module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'posts',
      timestamps: false,
    }
  );

  Post.associate = (models) => {
    Post.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'users',
    });
  };
  Post.sync();
  return Post;
};
