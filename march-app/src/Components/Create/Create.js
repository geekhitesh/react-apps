import React, {Component } from 'react';
import axios from '../../axios-employees';
import CreateEmployee from './CreateEmployee';

class Create extends Component {

    state= {
        form: {
            name:'',
            employeeId:'',
            dob:"1990-04-02T00:00:00.000+0000",
            jobTitle:"S/W Engineering Specialist",
            project:"Tech",
            doj:"2018-10-09T18:30:00.000+0000",
            hobbies:"Chess",
            city:"Noida",
            zip:"201301",
            createdAt:"2019-03-29T06:30:00.000+0000",
            updatedAt:"2019-03-31T07:23:20.000+0000",
          },
    }

    onFormChangeHandler = (event) => {
        // console.log("On Change");
        
        let field = event.target.name;
        let value = event.target.value;
        // console.log(field+":"+value);
        let newState = {...this.state};
  
        newState.form[field] = value;
  
        this.setState({
          newState
        });
      }  
  
      onFormSubmitHandler = (event) => {
        event.preventDefault();
        console.log("On Submit");
        console.log(this.state.form);
  
        axios.post('/employee/create',this.state.form)
        .then((response)=> {
          // console.log(response);
          // let newEmployees = {...this.state.employees};
          this.props.history.push('/emp-list');
        });
      }

    render() {
        return(
            <CreateEmployee
            name={this.state.form.name}
            employeeId={this.state.form.employeeId}
            onChange = {(event) => this.onFormChangeHandler(event)}
            onSubmit = {(event) => this.onFormSubmitHandler(event)}
            />
        );
    }
}

export default Create;