import React, { useState } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MDBIcon, MDBTypography } from "mdb-react-ui-kit";
import Header from "./header";
import Footer from "./footer";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import colleagues from './colleagues.jpg';

const Internships = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const cardStyle = (index) => ({
    transition: 'transform 0.3s, box-shadow 0.3s',
    transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)',
    boxShadow: hoveredCard === index ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 2px 10px rgba(0, 0, 0, 0.1)',
  });

  return (
    <div style={{ backgroundColor: "#e7e6e6" }}>
      {/* <Header /> */}
      <Container className="mt-0">
        <Row className="mb-9 align-items-center" xs={1} md={2}>
          <Col className="text-center mt-5">
            <img
              src={colleagues}
              className="img-fluid rounded"
              alt="Team Collaboration"
              style={{ maxWidth: "100%" }}
            />
          </Col>
          <Col xs={12} lg={6} className="text-center text-lg-start">
            <MDBTypography tag="h1" variant="h1" className="mb-3 mt-3">
              PATHWAY INTERNSHIP
            </MDBTypography>
            <hr />
            <MDBTypography className="lead">
              Gain practical experience and earn a certificate by joining our internship programs.
              <br />
              <br />
              <p class="fw-bold">Why Intern with Us?</p>
              Our internships provide valuable industry experience and networking opportunities. Whether you're interested in tech, marketing, or finance, we have something for everyone.
            </MDBTypography>
          </Col>
        </Row>

        <MDBTypography className="text-center" tag="h1">
          HOW TO APPLY
        </MDBTypography>
        <hr />
        <MDBTypography note noteColor='info' className="text-center mb-8">
          <strong>JUST FILL THE FORM ON THE LET’S TALK OPTION</strong>
        </MDBTypography>

        <Row className="mb-7 g-4" xs={1} sm={2} md={3} lg={4}>
          <Col>
            <Card
              border="dark"
              className="h-100 shadow-lg"
              style={cardStyle(1)}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Body>
                <Card.Title>
                  <MDBIcon fas icon="graduation-cap" /> Certificates
                </Card.Title>
                <Card.Text>
                  Receive a certificate recognizing your successful completion of the internship.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              border="dark"
              className="h-100 shadow-lg"
              style={cardStyle(2)}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Body>
                <Card.Title>
                  <MDBIcon fas icon="handshake" /> Career Counseling
                </Card.Title>
                <Card.Text>
                  Access career counseling services for job placement support and interview preparation.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              border="dark"
              className="h-100 shadow-lg"
              style={cardStyle(3)}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Body>
                <Card.Title>
                  <MDBIcon fab icon="black-tie" /> Potential Job Offer
                </Card.Title>
                <Card.Text>
                  Stand out for potential full-time job offers or extended internship opportunities.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              border="dark"
              className="h-100 shadow-lg"
              style={cardStyle(4)}
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Body>
                <Card.Title>
                  <MDBIcon fas icon="award" /> Recognition and Awards
                </Card.Title>
                <Card.Text>
                  Receive recognition and awards for outstanding performance and achievements.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Internships;
