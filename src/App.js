import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './Heading'

function App() {
  return (
    <div className="App">
      <Heading title="Hello World" subtitle="Foo Bar" />
      <Heading title="Hello World 2" subtitle="Foo Bar 2" />
    </div>
  );
}

export default App;
