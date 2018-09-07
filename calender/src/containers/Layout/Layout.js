import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Calender from '../Calender/Calender';
import Header from '../../components/UI/Header/Header'
import Modal from '../../components/UI/Modal/Modal'

import classes from './Layout.css'

class Layout extends Component{

  render(){
    return(
      <Aux>

<Header />
<Modal />
<Calender/>


      </Aux>
    );
  }
}

export default Layout;
