import { login, createUser } from '../mutations';

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import '../App.css';

const UserForm: React.FC<{ isLoginForm: boolean }> = ({ isLoginForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [cookies, setCookies] = useCookies(['token']);

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
      switch (data.data.login) {
        case 'User not found':
          console.log('User not found');
          break;
        case 'Incorrect password':
          console.log('Incorrect password');
          break;
        default:
          const authToken = data.data.login;
          setCookies('token', authToken, { path: '/' });
          console.log('cookie made');
          navigate('/home');
          console.log(authToken);
      }
    });
  };

  return (
    <div className="border-2 rounded-lg w-96 m-auto border-gray-400 p-2 grid h-56 items-center">
      <form
        onSubmit={(event) => {
          if (isLoginForm) {
            handleLoginSubmit(event);
          } else {
            handleRegisterSubmit(event);
          }
        }}
      >
        <label htmlFor="username">
          Username:{' '}
          <input
            type="text"
            name="username"
            className="border-2 rounded-md border-gray-300 p-2 "
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <br />
        <br />
        <label htmlFor="password">
          Password:{' '}
          <input
            type="password"
            name="password"
            className="border-2 rounded-md border-gray-300 p-2 mb-2 "
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>

        <br />
        {isLoginForm ? (
          <input type="submit" value="Login" className="btn" />
        ) : (
          <input type="submit" className="btn" />
        )}
      </form>
    </div>
  );
};

export default UserForm;
