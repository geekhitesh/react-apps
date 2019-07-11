import React from 'react';
import {Navbar,Nav,NavDropdown} from "react-bootstrap";
import classes from './Header.css';
import { LinkContainer } from 'react-router-bootstrap';

const header = () => {

    return ( 
        <div className={classes.Header}>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            
            <LinkContainer to="/">
            <Navbar.Brand>MyApp</Navbar.Brand>
            </LinkContainer>
                
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <LinkContainer to="/about">
                    <Nav.Link>About</Nav.Link>
                </LinkContainer>
    
                <Nav.Link href="#"></Nav.Link>
                <NavDropdown title="User" id="collasible-nav-dropdown">
                    
                    <LinkContainer to ="/add-user">
                        <NavDropdown.Item >Add</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/user-list">
                     <NavDropdown.Item>List</NavDropdown.Item>
                    </LinkContainer>
                    {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                </NavDropdown>
                <NavDropdown title="Cell" id="collasible-nav-dropdown">
                    
                    <LinkContainer to ="/create-Cell">
                        <NavDropdown.Item >Create</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/cells">
                     <NavDropdown.Item>List</NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>                
                </Nav>
                <Nav>
                <Nav.Link href="#auth">Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default header;