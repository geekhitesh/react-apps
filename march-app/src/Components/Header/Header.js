import React from 'react';
import {Link} from 'react-router-dom';

const header = () => {

    return(
        <div>
        <Link to="/emp-list">
          Show Employees
        </Link>
        <Link to="/emp-create">
          Create Employees
        </Link>   
        </div>

    );


};


export default header;