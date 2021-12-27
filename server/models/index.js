const Sequelize = require('sequelize');
const post = require('./post');
const user = require('./user');
const { pgDbName, pgHost, pgUserName, pgPassword } = require('../config');

const sequelize = new Sequelize(pgDbName, pgUserName, pgPassword, {
  host: pgHost,
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
