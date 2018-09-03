import React, {Component} from 'react';
import Home from '../../components/Home/Home'
import Aux from '../../hoc/Aux/Aux'
import {Route} from 'react-router-dom';
import User_In from '../../components/User_In/User_In'

class Layout extends Component{
  render(){
    return(
      <Aux>
        <Route path="/" exact component={Home} />
        <Route path="/user_in" exact component={User_In} />
      </Aux>
    );
  }
}

export default Layout;
