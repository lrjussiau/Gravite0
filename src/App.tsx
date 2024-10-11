import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import NavBar from './components/NavBar/NavBar';
import Logo from './components/Logo/Logo';  
import MainPage from './pages/MainPage/MainPage';

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
