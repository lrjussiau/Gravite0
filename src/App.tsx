import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Logo from './components/Logo/Logo';  
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <div>
      <Logo />
      <NavBar />
      <MainPage />
    </div>
  );
}

export default App;
