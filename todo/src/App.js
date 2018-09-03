import React, { Component } from 'react';

import classes from './App.css'

import Api from './containers/API/Api';
import Layout from './containers/Layout/Layout';
import {Route,NavLink} from 'react-router-dom';
class App extends Component {

  render() {
    return (

          <div className="App">
            <header>
              <nav>
                <ul>
                  <li><b><NavLink to="/">Home</NavLink></b></li>

                    <li><b><NavLink to="/Todo">ToDo_List</NavLink></b></li>
                    <li><b><NavLink to="/api">API</NavLink></b></li>

                </ul>
              </nav>

            </header>
                <Route path="/" exact />

                <Route path="/todo" exact component={Layout}/>
                <Route path="/api" exact component={Api}/>




          </div>


    );
  }
}

export default App;
