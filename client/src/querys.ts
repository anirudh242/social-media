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
