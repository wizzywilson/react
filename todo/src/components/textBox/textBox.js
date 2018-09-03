
import React from 'react';
import classes from './textBox.css'


const textBox = (props) =>{




  return(

        <input className={classes.input} type="text" name="name" onChange={props.look} onKeyDown={props.check} />

     )
}



export default textBox;
