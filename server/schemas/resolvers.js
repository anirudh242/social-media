const { users } = require('../FakeData');
const bcrypt = require('bcryptjs');
const models = require('../models');

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
  },

  Mutation: {
    async createUser(root, args) {
      try {
        // Generate salt
        const salt = bcrypt.genSaltSync(10);
        args.password = bcrypt.hashSync(args.password, salt);
        await models.User.create(args);
        return true;
      } catch {
        return false;
      }
    },
  },
};
