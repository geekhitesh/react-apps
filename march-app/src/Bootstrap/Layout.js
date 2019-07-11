import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Container, Row, Col} from 'react-bootstrap';

const layout = (props) => {

    return(
        // <Dropdown>
        //     <Dropdown.Toggle variant="success" id="dropdown-basic">
        //         Dropdown Button
        //     </Dropdown.Toggle>

        //     <Dropdown.Menu>
        //         <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        //         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        //         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        //     </Dropdown.Menu>
        //     </Dropdown>
    <Container>
    <Row>
        <Col xs={12} md={8}>
        xs=12 md=8
        </Col>
        <Col xs={6} md={4}>
        xs=6 md=4
        </Col>
    </Row>

    <Row>
        <Col xs={6} md={4}>
        xs=6 md=4
        </Col>
        <Col xs={6} md={4}>
        xs=6 md=4
        </Col>
        <Col xs={6} md={4}>
        xs=6 md=4
        </Col>
    </Row>

    <Row>
        <Col xs={6}>xs=6</Col>
        <Col xs={6}>xs=6</Col>
    </Row>
        </Container>
    );
}


export default layout;