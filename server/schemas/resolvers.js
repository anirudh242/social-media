const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const models = require('../models');
const { JWT_SECRET } = require('../config');

module.exports = {
  Query: {
    async getAllUsers() {
      let users = await models.User.findAll({});
      console.log(users);
      let returnUsers = [];
      // eg: {userId: 1, username: 'test', password: 'test'}
      users.forEach((user) => {
        returnUsers.push({
          userId: user.id,
          username: user.username,
          password: user.password,
          posts: models.Post.findAll({
            where: {
              userId: user.id,
            },
          }),
        });
      });
      return returnUsers;
    },

    async getUserById(parent, args) {
      let user = await models.User.findOne({
        where: {
          id: args.userId,
        },
      });
      return {
        userId: user.id,
        username: user.username,
        password: user.password,
      };
    },

    async userPosts(parent, args) {
      let posts = await models.Post.findAll({
        where: {
          userId: args.userId,
        },
      });
      return posts;
    },
  },

  Mutation: {
    async createUser(root, args) {
      // If username already exists, return false
      // else, create new user and return true
      let user = await models.User.findOne({
        where: {
          username: args.username,
        },
      });
      if (user) {
        return 'Username already exists';
      }
      if (args.password.length == 0) {
        return 'Password must not be empty';
      }
      const salt = bcrypt.genSaltSync(10);
      args.password = bcrypt.hashSync(args.password, salt);
      await models.User.create({ ...args, posts: [] });
      return 'User created successfully';
    },

    async deleteUser(root, args) {
      let user = await models.User.findOne({
        where: {
          id: args.userId,
        },
      });
      if (!user) {
        return 'User not found';
      }
      await models.User.destroy({
        where: {
          id: args.userId,
        },
      });
      return 'User deleted successfully';
    },

    login(root, args) {
      return models.User.findOne({
        where: {
          username: args.username,
        },
      }).then((user) => {
        if (!user) {
          return 'User not found';
        } else {
          console.log(user);
        }
        if (bcrypt.compareSync(args.password, user.password)) {
          return jwt.sign({ userId: user.id }, JWT_SECRET, {
            expiresIn: '1w',
            algorithm: 'HS256',
          });
        } else {
          return 'Incorrect password';
        }
      });
    },

    async createPost(root, args) {
      let user = await models.User.findOne({
        where: {
          id: args.userId,
        },
      });
      if (!user) {
        return 'User not found';
      }
      try {
        await models.Post.create({
          title: args.title,
          content: args.content,
          userId: args.userId,
        });

        return 'Post created successfully';
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
