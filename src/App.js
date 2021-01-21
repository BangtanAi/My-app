import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Setting';




const App = (props) => {

  return (
    <BrowserRouter>
    <div className = 'app-wrapper'>
      <Header/ >
      <Navbar/ >
      <div className = 'app-wrapper-content'>
        <Route path='/Dialogs' render={() => <Dialogs messages ={props.messages} dialogs ={props.dialogs} /> }/>
        <Route path='/Profile' render ={()=> <Profile posts ={props.posts} />}/>
        <Route path='/News' render={()=> <News />}/>
        <Route path='/Settings' render={()=> <Settings />}/>
      </div>
      {/* <Profile/ > */}
      
    
    </div>
    </BrowserRouter>
    
  );
}






export default App;

