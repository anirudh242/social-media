import React from 'react';
import '../App.css';
import UserForm from '../components/UserForm';

const Login: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="pageHeader">Login</h1>
      <br />
      <UserForm isLoginForm />
    </div>
  );
};

export default Login;
