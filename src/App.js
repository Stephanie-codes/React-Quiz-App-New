import './App.css';
import React, { useEffect, useState } from 'react';
import Quiz from './components/Quiz'

function App() {
  return (
    <div className="App">
      <h1>React Quiz</h1>
      <Quiz />
    </div>
  );
}

export default App;
