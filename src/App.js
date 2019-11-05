import React from 'react';
import Home from '../src/Components/Home/Home';
import Login from '../src/Components/Login/Login';
import Signup from '../src/Components/Signup/Signup';

import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <Login />
      <Signup />
    </div>
  );
}

export default App;
