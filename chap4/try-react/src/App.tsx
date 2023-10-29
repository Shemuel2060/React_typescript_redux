import React from 'react';

import './App.css';
import Home from './Home';
import ContactScreen from './ContactPage';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/contact" element={<ContactScreen/>}></Route>
        </Routes>      
      </header>
    </div>
  );
}

export default App;
