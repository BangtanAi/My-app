import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message: 'Hi, how are you?', likesCount: 25},
  {id: 2, message: "It's my first message", likesCount: 13},
  {id: 3, message: "Omggg", likesCount: 5},  
  {id: 4, message: "Amazing", likesCount: 0},
]
let dialogs = [
  {id: 1, name: 'Aidana'},
  {id: 2, name: 'Dima'},
  {id: 3, name: 'Andrey'},
  {id: 4, name: 'Sasha'},
  {id: 5, name: 'Victor'},
  {id: 6, name: 'Valery'}

]
let messages = [
  {id: 1, message: 'Hi'},
  {id: 1, message: 'How are you doing?'},
  {id: 1, message: 'Where are you from?'},
  {id: 1, message: 'Yo'},
  {id: 1, message: 'Yo'},   
]

ReactDOM.render(
  <React.StrictMode>
    <App posts = {posts} dialogs ={dialogs} messages ={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
