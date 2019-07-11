import React from 'react';

const person = (props) => {



    return (   
        <div>
            <p>Name: {props.name},Age: {props.age}
            </p>
            <input 
                    type="text" 
                    name="person" 
                    id="person" 
                    onChange={props.change}
                    value={props.name}
            />
        </div>
    );

}


export default person;