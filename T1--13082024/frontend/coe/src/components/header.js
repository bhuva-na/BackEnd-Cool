import React, { useState } from 'react';
import '../App.css'; // Import your CSS file
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { MDBIcon } from 'mdb-react-ui-kit';
import EnquiryForm from './enquiry'; // Adjust the path as needed

export default function Header() {
  const [expanded, setExpanded] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleShowEnquiryForm = () => setShowForm(true);
  const handleCloseEnquiryForm = () => setShowForm(false);

  const dropdownItemStyle = {
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  const dropdownItemHoverStyle = {
    backgroundColor: '#f8f9fa',
    color: '#007bff',
  };

  return (
    <>
      <Navbar expand="lg" expanded={expanded} sticky="top" className="custom-navbar">
        <Container style={{backgroundColor:"#aaaaaa"}}>
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
              <NavDropdown title="SERVICES" id="services-dropdown" active >
                <NavDropdown.Item
                  href="/mbaprojects"
                  style={dropdownItemStyle}
                  onMouseEnter={(e) => (e.target.style = { ...dropdownItemStyle, ...dropdownItemHoverStyle })}
                  onMouseLeave={(e) => (e.target.style = dropdownItemStyle)}
                >
                  RESEARCH PROJECTS
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/interships"
                  style={dropdownItemStyle}
                  onMouseEnter={(e) => (e.target.style = { ...dropdownItemStyle, ...dropdownItemHoverStyle })}
                  onMouseLeave={(e) => (e.target.style = dropdownItemStyle)}
                >
                  PATHWAY INTERNSHIP
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/cvwriting"
                  style={dropdownItemStyle}
                  onMouseEnter={(e) => (e.target.style = { ...dropdownItemStyle, ...dropdownItemHoverStyle })}
                  onMouseLeave={(e) => (e.target.style = dropdownItemStyle)}
                >
                  PRORESUME CRAFTING
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/consulting"
                  style={dropdownItemStyle}
                  onMouseEnter={(e) => (e.target.style = { ...dropdownItemStyle, ...dropdownItemHoverStyle })}
                  onMouseLeave={(e) => (e.target.style = dropdownItemStyle)}
                >
                  CAREERGUIDE CONSULTING
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" onClick={handleShowEnquiryForm} active>
                LET’S TALK
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/company/coolgen-solutions/" target="_blank">
                <MDBIcon fab icon="linkedin" style={{ color: '#0e76a8', fontSize: '1.5rem', marginLeft: '10px' }} />
              </Nav.Link>
              <Nav.Link href="https://www.instagram.com" target="_blank">
                <MDBIcon fab icon="instagram" style={{ color: '#E4405F', fontSize: '1.5rem', marginLeft: '10px' }} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <EnquiryForm showForm={showForm} handleClose={handleCloseEnquiryForm} />
    </>
  );
}
