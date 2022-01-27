import { gql } from '@apollo/client';

export const getAllPosts = gql`
  query getAllPosts {
    getAllPosts {
      id
      title
      content
      userId
    }
  }
`;

export const getUsernameById = gql`
  query getUsernameById($userId: Int!) {
    getUserById(userId: $userId) {
      username
    }
  }
`;

export const getUserById = gql`
  query getUserById($userId: Int!) {
    getUserById(userId: $userId) {
      userId
      username
      posts {
        id
        title
        content
        userId
      }
    }
  }
`;
