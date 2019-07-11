import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Col } from 'react-bootstrap';
import * as actions from '../../store/actions/index';

const userForm = (props) => {

    return (
        <Form onSubmit={props.action}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                                type="text" 
                                value={props.data.name}
                                onChange = {(event) => props.changed(event,"name")}
                                placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDOB">
                        <Form.Label>DOB</Form.Label>
                        <Form.Control 
                                type="text" 
                                value={ props.data.dob} 
                                onChange = {(event) => props.changed(event,"dob")}
                                placeholder="YYYY-MM-DD" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>

                    <Form.Group as={Col}  controlId="formGridTitle">
                        <Form.Label>Employee ID</Form.Label>
                        <Form.Control 
                                type="text" 
                                value={props.data.employeeId} 
                                onChange = {(event) => props.changed(event,"employeeId")}
                                placeholder="96048" />
                    </Form.Group>                    
                    <Form.Group as={Col}  controlId="formGridTitle">
                        <Form.Label>JOB Title</Form.Label>
                        <Form.Control 
                                type="text"
                                value={props.data.jobTitle} 
                                onChange = {(event) => props.changed(event,"jobTitle")}
                                placeholder="S/W Developer Experienced" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDOJ">
                        <Form.Label>Date of Joining</Form.Label>
                        <Form.Control 
                                type="text" 
                                value={props.data.doj} 
                                onChange = {(event) => props.changed(event,"doj")}
                                placeholder="YYYY-MM-DD" />
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="formGridHobbies">
                    <Form.Label>Hobbies</Form.Label>
                    <Form.Control 
                            placeholder="Swimming, Chess, Sleep" 
                            value={props.data.hobbies} 
                            onChange = {(event) => props.changed(event,"hobbies")} />
                           
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridProject">
                            <Form.Label>Project</Form.Label>
                            <Form.Control 
                                    value={props.data.project}
                                    onChange = {(event) => props.changed(event,"project")} />
                                    
                    </Form.Group>                    
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control 
                                value={props.data.city}
                                onChange = {(event) => props.changed(event,"city")} />
                                
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control 
                                value={props.data.state} 
                                onChange = {(event) => props.changed(event,"state")} />
                               
                    </Form.Group>
                </Form.Row>

                <Button variant="danger" type="submit">
                    Submit
                </Button>
        </Form>
        

    );

}


const mapStateToProps = state => {
    return ({
        selectedUserId: state.selectedUserId,
        users: state.users.list
    });
}

const mapDispatchToProps = dispatch => {
    return {
        onSetAllUsers : (users) => dispatch(actions.setAllUsers(users)),
    };
};

export default connect(mapStateToProps,mapDispatchToProps) (userForm);

