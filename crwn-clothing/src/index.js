import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';


import './index.css';
import App from './App';

ReactDOM.render(
  //BrowserRouter is a component we're going to wrap around our 
  //application, gives '<App />' all the functionality of routing
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

