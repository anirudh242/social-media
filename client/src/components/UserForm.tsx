import React from 'react';

import { gql, useMutation } from '@apollo/client';

import '../App.css';

const createUser = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(username: $username, password: $password)
  }
`;

const UserForm: React.FC<{ isLoginForm: boolean }> = ({ isLoginForm }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [addUser] = useMutation(createUser);

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    console.log('username: ', username);
    console.log('password: ', password);

    addUser({ variables: { username, password } });

    console.log('user created');
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Username:{' '}
          <input
            type="text"
            className="formInput"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Password:{' '}
          <input
            type="text"
            className="formInput"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <br />
        {isLoginForm ? (
          <input type="submit" value="Login" />
        ) : (
          <input type="submit" />
        )}
      </form>
    </div>
  );
};

export default UserForm;
