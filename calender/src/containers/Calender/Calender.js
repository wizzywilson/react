import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import {connect} from 'react-redux';


class Calender extends Component{
  render(){
    return(
      <Aux>
{this.props.date}
      </Aux>
    );
  }
}



const mapStateToProps = (state) =>{
  return({
    date:state.date,
  });
}

const mapDispatchToProps = (dispatch) =>{
  return({

  });
}

export default connect(mapStateToProps,mapDispatchToProps)(Calender);
