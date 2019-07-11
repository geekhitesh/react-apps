import React,{Component} from 'react';
import classes from './Employee.css';
import Button from './Button';

class Employee extends Component {

    state = {
        salary:0
    }


    shouldComponentUpdate(nextProps,nextState) {

        console.log("Employee.js | Component Shoud Mount");
        if(this.props.name !== nextProps.name || this.props.age !== nextProps.age)
            return true;
         else
            return false;
      }
    
      componentWillMount() {
        localStorage.setItem('employee_mount',Date.now());
        console.log("Employee.js | Component Will Mount");
      }  
    
      componentDidMount() {
        console.log("Employee.js | Component Did Mount");
      }  
     
      componentWillUnmount() {
    
        console.log("Employee.js | Component will UnMount");
        localStorage.setItem('employee_unmount',Date.now());
      }  

    render() {

        console.log("Employee.js | Render");

        return(
            <div className={classes.Employee}>
                <p>
                    <b>Name:</b>{this.props.name}<br/>
                    <b>Employee ID:</b>{this.props.employeeId}<br/>
                </p>
                <Button value={"Delete"} onClick={this.props.hide}/>
            </div>
        );
    }
}

export default Employee;