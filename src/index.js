import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from "redux-thunk"
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import  * as reducers from "./Redux/reducers.js";

let logger = createLogger()
let combine = combineReducers(reducers)
let store = createStore(combine,applyMiddleware(logger,thunkMiddleware))

ReactDOM.render(
<Provider store={store}> 
  <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
