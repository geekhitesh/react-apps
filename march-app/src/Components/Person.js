import React,{useState,useEffect} from 'react';
import classes from './Person.css';
import wrappedDiv from './wrappedDiv';

const person = (props) => {

    const [personState,setPersonState] = useState({
        name:"Hitesh"
    });


    // component did mount
    useEffect(() => {
        console.log("Person.js | Use Effect!");

        // If we wish to perform some clean up tasks, 
        // we need to use return from userEffect
        // return () => {
        //     console.log("Clean up started!");
        // }
    },[]);

/*

// component did update
    useEffect(() => {
        console.log("Person.js | Use Effect!");
    },[props.persons]); 


*/

    console.log("Person.js| Render");

    return(
        <React.Fragment className={classes.Person}>
            <p onClick={props.delete}>Name: {props.name} Age: {props.age} </p>
        </React.Fragment>
    );
}



//export default person;
 export default wrappedDiv(person,classes.Person);