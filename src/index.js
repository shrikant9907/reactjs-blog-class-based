import React from 'react';
import ReactDOM from 'react-dom';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer/index'

import './index.css';
import App from './App'; 

const store = createStore(reducer) 

ReactDOM.render( 
  <Provider store = { store } >
    <App />
  </Provider>  
, document.getElementById('root'));