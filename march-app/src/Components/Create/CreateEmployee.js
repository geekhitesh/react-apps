import React from 'react';

const createEmployee = (props) => {
        return(
            <div>
                <form onSubmit={props.onSubmit}>
                    Name:<input 
                        type="text" 
                        value={props.name} 
                        onChange={props.onChange}
                        name="name" /> <br/>
                    Employee Id:<input 
                        type="text" 
                        value={props.employeeId}
                        onChange={props.onChange}
                        name="employeeId" /> <br/>
                    <input 
                        type="submit" 
                        value="Create"/>
                </form>
            </div>
        );
}

export default createEmployee;