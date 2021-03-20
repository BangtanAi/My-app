import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Route, withRouter} from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import {initializeApp} from '..//src/redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
    componentDidMount(){
       this.props.initializeApp();
       }
    render(){
       if(!this.props.initialized){
              return <Preloader />
       }
       return (
              <div className='app-wrapper'>
                  <HeaderContainer />
                  <Navbar />
                  <div className='app-wrapper-content'>
                      <Route path='/dialogs'
                             render={ () => {
                                    return <Suspense fallback={<Preloader />}>
                                    <DialogsContainer />
                                  </Suspense>
                             } } />
  
                      <Route path='/profile/:userId?'
                             render={ () => {
                                   return <Suspense fallback={<Preloader />}>
                                   <ProfileContainer />
                                 </Suspense>
                            } } />
  
                      <Route path='/users'
                             render={ () => <UsersContainer /> }/>
  
                      <Route path='/login'
                             render={ () => <Login /> }/>
          
                  </div>
              </div>
          )
    }   
    
}

const mapStateToProps = (state) => ({
       initialized: state.app.initialized
})
let AppContainer = compose(
       withRouter,
       connect(mapStateToProps, {initializeApp}))(App) ;

const SamuraiJSApp = (props) => {
       return <HashRouter>
       <Provider store={store} >
           <AppContainer />
       </Provider>
   </HashRouter>
}
export default SamuraiJSApp;


