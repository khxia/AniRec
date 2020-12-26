import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [ name, updateName ] = useState('blaNk');
  const [ id, updateID ] = useState('blnk');


  fetch('/api/temp').then( (response) => response.json()).then( (resJson) => {
    updateName(resJson.name);
    updateID(resJson.id);
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>
        Hardcoded query, anime name: {name} with id: {id}
      </p>
    </div>
  );
}

export default App;
