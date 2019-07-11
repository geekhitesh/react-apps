import React from 'react';
import classes from './Button.css';

const button = (props) => {

    return(
        
        <input 
            className={classes.Button} 
            type="button" 
            {...props}/>
    );
}

export default button;