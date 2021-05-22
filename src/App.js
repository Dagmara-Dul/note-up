import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const MyButton = styled.button`
  width: 100px;
  padding: 50px;
  background-color: antiquewhite;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyButton>text</MyButton>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chocolate
        </a>
      </header>
    </div>
  );
}

export default App;
