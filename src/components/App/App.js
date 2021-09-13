import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <switch>
        <Route exact path='/'/>
      </switch>
    </div>
    )
}

export default App;
