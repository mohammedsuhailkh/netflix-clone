import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/authContext';
import Login from './components/Login';
import SignUP from './components/SignUP';
import Account from './components/Account';
import ProtectedRoute from './components/ProtectedRoute';
import Player from './components/Player';


const App = () => {
  return (
    <div>
      <AuthContextProvider>
      <Navbar />
      <Routes >
        <Route path='/player' element={<Player/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<SignUP/>}/>
        <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>}/>
      </Routes>
        
      </AuthContextProvider>
       
      
    </div>
  );
};

export default App;
