import React from 'react';
import './App.css';
import Heading from './Heading'
import Content from './Content'
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Heading />
        <Content />
      </div>
    </Router>
  );
}

export default App;
