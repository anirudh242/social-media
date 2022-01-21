import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Index from './routes/Index';
import Login from './routes/Login';
import Register from './routes/Register';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        {' '}
        <Navbar />
        <br />
        <br />
        <br />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
