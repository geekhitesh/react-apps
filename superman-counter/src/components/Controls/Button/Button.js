import React from 'react';

const button = (props) => (
    <button onClick={props.clicked}>
        {props.label}
    </button>
);

export default button;