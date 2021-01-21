import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Setting';




const App = () => {
  return (
    <BrowserRouter>
    <div className = 'app-wrapper'>
      <Header/ >
      <Navbar/ >
      <div className = 'app-wrapper-content'>
        <Route path='/Dialogs' component={Dialogs}></Route>
        <Route path='/Profile' component={Profile}></Route>
        <Route path='/News' component={News}></Route>
        <Route path='/Settings' component={Settings}></Route>
      </div>
      {/* <Profile/ > */}
      
    
    </div>
    </BrowserRouter>
    
  );
}






export default App;

