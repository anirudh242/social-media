const { gql } = require('apollo-server-express');

module.exports = gql`
  type User {
    userId: ID!
    username: String
    password: String!
  }

  type Query {
    getAllUsers: [User!]!
  }

  type Mutation {
    createUser(username: String!, password: String!): Boolean!
  }
`;
