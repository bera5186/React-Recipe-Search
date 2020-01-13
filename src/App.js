import React from 'react';
import './App.css';

function App() {
  const apiKey = process.env.RECIPE_APP_APP_KEY
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h3>{apiKey}</h3>
    </div>
  );
}

export default App;
