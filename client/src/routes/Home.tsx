import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';

import '../App.css';

const Home: React.FC = () => {
  const [cookies] = useCookies(['token']);
  useEffect(() => {
    console.log('cookie: ', cookies.token);
  }, []);

  return (
    <div className="App">
      <h1>Home</h1>
    </div>
  );
};

export default Home;
