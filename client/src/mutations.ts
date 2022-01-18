import { gql } from '@apollo/client';

export const createUser = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(username: $username, password: $password)
  }
`;

export const login = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`;
