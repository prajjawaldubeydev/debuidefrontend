import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
