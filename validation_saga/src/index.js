import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducer1 from './store/Action/reducer1';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import saga from './saga/saga'


import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const sagaMiddleware = createSagaMiddleware();





const store = createStore(reducer1,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga)

window.onpopstate = function(event) {
  if(window.location.href==="http://localhost:3002/"){

window.history.pushState("k", "page 2", "http://localhost:3002/user_in");
  }
  else if(window.location.href==="http://localhost:3002/user_in"){

window.history.pushState("k", "page 2", "http://localhost:3002/");
  }
};

ReactDOM.render(<BrowserRouter><Provider store={store} ><App /></Provider></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
