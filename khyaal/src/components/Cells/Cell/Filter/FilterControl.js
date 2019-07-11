import React from 'react';
import classes from '../Filter/FilterControl.css'
import { Button } from 'react-bootstrap';

const filterControl = (props) => {

    return(
        <div className={classes.FilterControl}>
            <p><b>Filter Field: </b>{props.field}</p>
            <p><b>Filter Type: </b> {props.type}</p>
            {
                props.type==='NUMBER'?
                            <p><b>Filter Relation:</b>  {props.relation} </p>:null
            
            } 
            <p><b>Filter Value: </b> {props.value[0] }, {props.value[1]}</p>
            <Button type="button" onClick={props.deleted}>Delete</Button>
        </div>
    );
};

export default filterControl;