import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBIcon } from 'mdb-react-ui-kit';

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);

  return (
    <Navbar bg="light" expand="lg" expanded={expanded}>
      <Container>
        <Navbar.Brand href="#">
          <img
            src="https://coolgentech.com/wp-content/uploads/2024/04/Coolgen-Logo-2.svg"
            height="50"
            alt="Coolgen Logo"
            loading="lazy"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} style={{ borderColor: 'black' }}>
        <MDBIcon fas icon="angle-down" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" active>
              HOME
            </Nav.Link>
            <Nav.Link href="/mbaprojects" active>MBA-PROJECTS</Nav.Link>
            <Nav.Link href="/interships" active>INTERNSHIPS</Nav.Link>
            <Nav.Link href="/cvwriting" active>CV-WRITING</Nav.Link>
            <Nav.Link href="/consulting" active>CAREER-CONSULTANT</Nav.Link>
            <Nav.Link href="https://coolgentech.com/contact-us/" active>CONTACT-US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
