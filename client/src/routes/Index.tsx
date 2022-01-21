import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Index: React.FC = () => {
  return (
    <div>
      <h1 className="pageHeader">Index</h1>
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
