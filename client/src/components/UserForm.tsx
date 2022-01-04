import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import '../App.css';

const createUser = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(username: $username, password: $password)
  }
`;

const login = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`;

const UserForm: React.FC<{ isLoginForm: boolean }> = ({ isLoginForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [cookies, setCookies, removeCookies] = useCookies(['token']);

  const navigate = useNavigate();

  const [addUser] = useMutation(createUser);
  const [loginUser, { data }] = useMutation(login);

  const handleRegisterSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    console.log('username: ', username);
    console.log('password: ', password);

    addUser({ variables: { username, password } });

    console.log('user created');
    navigate('../login');
  };

  const handleLoginSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    loginUser({ variables: { username, password } }).then((data) => {
      const authToken = data.data.login;
      setCookies('token', authToken, { path: '/' });
      console.log('cookie made');
      navigate('/');
      console.log(authToken);
    });
  };

  return (
    <div className="App">
      <form
        onSubmit={(event) => {
          if (isLoginForm) {
            handleLoginSubmit(event);
          } else {
            handleRegisterSubmit(event);
          }
        }}
      >
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
