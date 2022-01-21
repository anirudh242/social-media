import React from 'react';
import '../App.css';
import UserForm from '../components/UserForm';

const Login: React.FC = () => {
  return (
    <div className="App">
      <h1 className="pageHeader">Login</h1>
      <UserForm isLoginForm />
    </div>
  );
};

export default Login;
