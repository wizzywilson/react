import React, {Component} from 'react';
import classes from './Layout.css'
import TextBox from '../../components/textBox/textBox'

import {Route} from 'react-router-dom';

import Aux from '../../hoc/Aux/Aux'
import {connect} from 'react-redux';


class Layout extends Component{


    enterHandler = (e) =>{
        this.props.eHandler(e);
    }

    render(){

      return(
            <Aux>
                <TextBox check={this.enterHandler}/>

                 <ul className={classes.list}>
                  {this.props.names.map((name,index)=>(<li onClick={() => this.props.rHandler(index)} key={index}>{name}</li>))}
                </ul>
            </Aux>
      );
    }
}


const mapStateToProps = (state) =>{
  return({
    names:state.red1.names,
  });
}

const mapDispatchToProps = (dispatch) =>{
  return({
    eHandler:(e)=>dispatch({type:"ENTER",e:e}),
    rHandler:(index)=>dispatch({type:'REMOVE',val:index})
  });
}



export default connect(mapStateToProps,mapDispatchToProps)(Layout);
