import reportWebVitals from './reportWebVitals';
import {rerenderEntireTree} from "./render";
import state from "./Redux/state";

rerenderEntireTree(state);

reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import state from './Redux/state';

// rerenderEntireTree(state);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
