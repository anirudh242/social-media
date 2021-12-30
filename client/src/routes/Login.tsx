import React from 'react';
import '../App.css';

const Login: React.FC = () => {
  return (
    <div className="App">
      <h1>Login</h1>
      <br />
      <br />
      Username: <input type="text" />
      <br />
      <br />
      Password: <input type="text" />
    </div>
  );
};

export default Login;
