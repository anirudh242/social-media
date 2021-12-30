import React from 'react';
import '../App.css';
import UserForm from '../components/UserForm';

const Register: React.FC = () => {
  return (
    <div className="App">
      <h1>Register</h1>
      <UserForm isLoginForm={false} />
    </div>
  );
};

export default Register;
