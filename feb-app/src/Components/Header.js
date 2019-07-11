import React from 'react';

const header = (props) => (
    <div>
        <p>Application Name:{props.name}</p>
        <p>Application Title:{props.title}</p>
        <p> </p>
        <hr/>
    </div>
);

export default header;