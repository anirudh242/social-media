const { users } = require('../FakeData');
const bcrypt = require('bcryptjs');
const models = require('../models');

module.exports = {
  Query: {
    async getAllUsers() {
      let users = await models.User.findAll({});
      console.log(users);
      let returnUsers = [];
      users.forEach((user) => {
        returnUsers.push({
          userId: user.id,
          username: user.username,
          password: user.password,
        });
      });
      return returnUsers;
    },
  },

  Mutation: {
    createUser(root, args) {
      try {
        models.User.create(args);
        return true;
      } catch {
        return false;
      }
    },
  },
};
