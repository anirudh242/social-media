const Sequelize = require('sequelize');
const post = require('./post');
const user = require('./user');

const sequelize = new Sequelize('blog', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
});

const models = {
  User: user(sequelize, Sequelize),
  Post: post(sequelize, Sequelize),
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
