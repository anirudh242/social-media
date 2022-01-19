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

export const getUserById = gql`
  query getUserById($userId: Int!) {
    getUserById(userId: $userId) {
      username
    }
  }
`;
