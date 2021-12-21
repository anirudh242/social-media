const { gql } = require('apollo-server-express');

module.exports = gql`
  type User {
    userId: ID!
    username: String
    password: String!
  }

  type Query {
    getAllUsers: [User!]!
    getUserById(userId: ID!): User!
  }

  type Mutation {
    createUser(username: String!, password: String!): String!
    deleteUser(userId: ID!): String!
    login(username: String!, password: String!): String
  }
`;
