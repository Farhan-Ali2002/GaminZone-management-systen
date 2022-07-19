import React from 'react'
import { Navbar, Nav, NavDropdown, Button, Form, FormControl, Container } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

function Enavbar() {
  return (
    <Navbar bg="transparent" variant = "dark" expand="lg">
  <Container fluid>
    <Navbar.Brand >Employee Menu</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
         <LinkContainer to={"/eHome"}>
        <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to={"/Activeuser"}>
        <Nav.Link >Activeuser</Nav.Link>
        </LinkContainer>
        <LinkContainer to={"/Pcs"}>
        <Nav.Link >Pcs</Nav.Link>
        </LinkContainer>
        <LinkContainer to={"/EGames"}>
        <Nav.Link >Games</Nav.Link>
        </LinkContainer>
        <LinkContainer to={"/Allcustomers"}>
        <Nav.Link >Customers</Nav.Link>
        </LinkContainer>
        <LinkContainer to={"/Info"}>
        <Nav.Link >Persnol Information</Nav.Link>
        </LinkContainer>
        <NavDropdown title="Options" id="navbarScrollingDropdown">
          <NavDropdown.Item >Logout</NavDropdown.Item>
        </NavDropdown>

      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Enavbar