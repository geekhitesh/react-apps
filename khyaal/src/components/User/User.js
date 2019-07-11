import React from 'react';
import { Card, Button } from 'react-bootstrap';

const user = (props) => {


    return(
        <Card bg="light"  style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.jobTitle}</Card.Subtitle>
                <Card.Text>
                  <b>DOJ:     </b> {new Date(Date.parse(props.dateOfJoining)).toLocaleDateString()} <br/>
                  <b>DOB:     </b> {new Date(Date.parse(props.dateOfBirth)).toLocaleDateString()} <br/>
                  <b>Project: </b> {props.project}
                </Card.Text>
                <Button variant="link" onClick={props.performEdit}>Edit</Button>
                <Button variant="link" onClick={props.getDetails}>Details</Button>
            </Card.Body>
        </Card>
    );
}

export default user;