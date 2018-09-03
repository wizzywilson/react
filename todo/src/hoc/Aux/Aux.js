import React from 'react';
import classes from './Aux.css'

const aux = (props) => {
  return(
    <div className={classes.center}>
      {props.children}
    </div>
  )
}

export default aux;
