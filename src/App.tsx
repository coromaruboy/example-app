import React from 'react';
import logo from './logo.svg';
import './App.css';

import MyComponents from './MyComponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyComponents></MyComponents>
      </header>
    </div>
  );
}

export default App;
