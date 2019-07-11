import React, { Component } from 'react';

const userDetail = (props) => {

    return (
        <div>
            <p>Hello:{props.name} Your age: {props.age} Your Experience: {props.experience}</p>
        </div>

    );
}


export default userDetail;

