import React from 'react';
import logo from './assets/logo_text.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p>Cheers will help you find the best place to share the Olympic Games’ emotions !</p>
          <p>Go out and celebrate !</p>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start
        </a>
      </header>
    </div>
  );
}

export default App;
