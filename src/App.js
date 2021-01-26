import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <Dialogs
                               dialogsPage={props.state.dialogsPage} /> }/>

                    <Route path='/profile'
                           render={ () => <Profile
                              profilePage={props.state.profilePage}
                              addPost={props.addPost}
                              updateNewPostText={props.updateNewPostText} /> }/>
                </div>
            </div>
        )
}

export default App;


// import React, { Component } from 'react';
// import './App.css';
// import Dialogs from './components/Dialogs/Dialogs';
// import Header from './components/Header/Header';
// import Navbar from './components/Navbar/Navbar';
// import News from './components/News/News';
// import Profile from './components/Profile/Profile';
// import Settings from './components/Settings/Setting';
// import { BrowserRouter, Route } from 'react-router-dom';



// const App = (props) => {

//   return (
//     <BrowserRouter>
//     <div className = 'app-wrapper'>
//       <Header/ >
//       <Navbar/ >
//       <div className = 'app-wrapper-content'>
//         <Route path='/Dialogs' 
//           render={() => <Dialogs state={props.state.dialogsPage} /> }/>
//         <Route path='/Profile'
//           render ={()=> <Profile state={props.state.profilePage}
//                                  addPost={props.addPost}/> } />
//         <Route path='/News' render={()=> <News />}/>
//         <Route path='/Settings' render={()=> <Settings />}/>
//       </div>
//     </div>
    
//     </BrowserRouter>
//   );
// }
// export default App;


