import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Index: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold underline">Index</h1>
      <Link to="/home">Home</Link>
      <br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Register</Link>
      <br />
    </div>
  );
};

export default Index;
