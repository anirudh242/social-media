import jwtDecode from 'jwt-decode';
import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';

import '../App.css';
import userInterface from '../interface';

const Home: React.FC = () => {
  const [user, setUser] = React.useState<userInterface>({
    userId: null,
    iat: null,
    exp: null,
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookies, removeCookies] = useCookies(['token']);
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.token) {
      setUser(jwtDecode(cookies.token));
    }

    if (user.exp && user.exp < Date.now() / 1000) {
      removeCookies('token');
      setUser({
        userId: null,
        iat: null,
        exp: null,
      });
    }

    if (user.userId !== null) {
      console.log('you are logged in user ' + user.userId);
    }
  }, [cookies, removeCookies, user.exp, user.userId]);

  const logout = () => {
    console.log('logout');
    removeCookies('token');
    // navigate to login
    navigate('/login');
  };

  return (
    <div className="App">
      <h1>Home</h1>
      {user.userId !== null ? (
        <>
          <p>You are logged in {user.userId}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>You are not logged in</p>
          <br />
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
};

export default Home;
