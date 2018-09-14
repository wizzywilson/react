import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Calender from '../Calender/Calender';
import Header from '../../components/UI/Header/Header'
import Modal from '../../components/UI/Modal/Modal';
import M1 from '../../components/UI/M1/M1';


import  './Layout.css'

class Layout extends Component{

  render(){
    return(
      <Aux>
        <Header />
        <Modal />
        <Calender/>
        <M1 />
      </Aux>
    );
  }
}

export default Layout;
