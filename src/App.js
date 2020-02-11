import React from 'react';
import logo from './logo.svg';
import './App.css';

function Heading(props) {
  return (
    <header className="App-header">
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </header>
  )
}

function App() {
  return (
    <div className="App">
      <Heading title="Hello World" subtitle="Foo Bar" />
      <Heading title="Hello World 2" subtitle="Foo Bar 2" />
    </div>
  );
}

export default App;
