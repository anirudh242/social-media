import { useQuery } from '@apollo/client';
import jwtDecode from 'jwt-decode';
import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

import '../App.css';
import Post from '../components/Post';
import { userInterface, postInterface } from '../interface';
import { getAllPosts } from '../querys';

const Home: React.FC = () => {
  const [user, setUser] = React.useState<userInterface>({
    userId: null,
    iat: null,
    exp: null,
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookies, removeCookies] = useCookies(['token']);
  const { data, loading, error } = useQuery(getAllPosts);

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

  return (
    <div className="text-center">
      <h1 className="pageHeader">Home</h1>
      {user.userId !== null ? (
        <>
          <p>You are logged in {user.userId}</p>
          <br />
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error</p>
          ) : (
            data.getAllPosts.map((post: postInterface) => (
              <Post
                id={post.id}
                title={post.title}
                userId={post.userId}
                content={post.content}
              />
            ))
          )}
        </>
      ) : (
        <>
          <p>You are not logged in</p>
          <br />
          <Link to="/login" className="btn">
            Login
          </Link>
        </>
      )}
    </div>
  );
};

export default Home;
