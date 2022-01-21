import React from 'react';
import '../App.css';
import UserForm from '../components/UserForm';

const Register: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="pageHeader">Register</h1>
      <UserForm isLoginForm={false} />
    </div>
  );
};

export default Register;
