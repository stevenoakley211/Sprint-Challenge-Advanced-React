import React from 'react';
import './App.css';
import Players from './components/players';
import Navbar from './components/navBar'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Players />
    </div>
  );
}

export default App;
