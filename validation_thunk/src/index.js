import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,applyMiddleware} from 'redux';
import reducer1 from './store/Action/reducer1';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import thunk from 'redux-thunk';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


window.onpopstate = function(event) {
  if(window.location.href==="http://localhost:3002/"){

window.history.pushState("k", "page 2", "http://localhost:3002/user_in");
  }
  else if(window.location.href==="http://localhost:3002/user_in"){

window.history.pushState("k", "page 2", "http://localhost:3002/");
  }
};


const store = createStore(reducer1,applyMiddleware(thunk));
ReactDOM.render(<BrowserRouter><Provider store={store} ><App /></Provider></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
