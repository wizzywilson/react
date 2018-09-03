import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import reducer from './store/reducer'
import reducer2 from './store/reducer2'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

const rootReducer =combineReducers({
  red1:reducer,
  red2:reducer2
});

const store = createStore(rootReducer,applyMiddleware(thunk));
ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
