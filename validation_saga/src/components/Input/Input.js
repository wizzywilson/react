import React from 'react';
import Aux from '../../hoc/Aux/Aux'

const input = (props) =>{
var element=null

switch(props.type.elementType){

  case 'input'    : element="input";
                    break;
  case 'textarea' : element="textarea";
                    break;
  default         : element="input";
                    break;
}
  return(
    <Aux>
      <label><b>{props.type.elementLabel}</b></label>
      <input  autoComplete="off" onChange={props.change} className="form-control" type={props.type.elementConfig.type} placeholder={props.type.elementConfig.placeholder}/>
    </Aux>

  );
}

export default input;
