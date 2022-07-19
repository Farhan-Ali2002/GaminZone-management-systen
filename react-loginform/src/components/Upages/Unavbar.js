import React from 'react'
import { Navbar, Nav, NavDropdown, Button, Form, FormControl, Container } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

function Unavbar() {
  return (
    <Navbar bg="transparent" variant = "dark" expand="lg">
  <Container fluid>
    <Navbar.Brand >Customer Menu</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
         <LinkContainer to={"/UHome"}>
        <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to={"/Games"}>
        <Nav.Link >Games</Nav.Link>
        </LinkContainer>
        {/* <LinkContainer to={"/Allcustomers"}>
        <Nav.Link >Employees support</Nav.Link>
        </LinkContainer> */}
        <NavDropdown title="Options" id="navbarScrollingDropdown">
          <NavDropdown.Item >Logout</NavDropdown.Item>
        </NavDropdown>

      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default  Unavbar