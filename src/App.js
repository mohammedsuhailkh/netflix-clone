import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home/>}/>
      </Routes>
       
      
    </div>
  );
};

export default App;
