import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import './index.css';
import App from './App';

import store from './redux/store';

ReactDOM.render(
  //BrowserRouter is a component we're going to wrap around our 
  //application, gives '<App />' all the functionality of routing
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

