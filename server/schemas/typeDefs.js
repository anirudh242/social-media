const { gql } = require('apollo-server-express');

module.exports = gql`
  type User {
    userId: ID!
    username: String
    password: String!
    posts: [Post]
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    description: String
    userId: Int!
  }

  type Query {
    getAllUsers: [User!]!
    getUserById(userId: ID!): User!
    userPosts(userId: ID!): [Post!]!
    getAllPosts: [Post!]!
    getPostById(postId: ID!): Post!
  }

  type Mutation {
    createUser(username: String!, password: String!): String!
    deleteUser(userId: ID!): String!
    login(username: String!, password: String!): String
    createPost(
      title: String!
      content: String!
      userId: Int!
      description: String
    ): String!
  }
`;
