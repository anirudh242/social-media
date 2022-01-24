import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Index from './routes/Index';
import Login from './routes/Login';
import Register from './routes/Register';

const App: React.FC = () => {
  const [cookies] = useCookies(['token']);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();

  useEffect(() => {
    if (cookies.token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [cookies.token]);

  return (
    <>
      <BrowserRouter>
        {' '}
        <Navbar isLoggedIn={isLoggedIn} />
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
