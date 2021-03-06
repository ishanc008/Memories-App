import React from 'react';
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import App from './App';
import {Provider} from "react-redux"
import {applyMiddleware, createStore, compose} from "redux"
import allReducers from "./reducers"

const store = createStore(allReducers,compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

