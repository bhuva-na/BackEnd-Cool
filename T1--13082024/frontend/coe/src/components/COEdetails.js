import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBTypography } from 'mdb-react-ui-kit';
import { MDBCol } from 'mdb-react-ui-kit';
import BlueLogo from './BlueLogo.jpg';
const COEdetails = () => {
  return (
    <Container fluid style={{ marginTop: "2%", marginLeft: "2%" }}>
      <Row className="align-items-center">
        <Col xs={12} md={7} className="text-center text-md-start mb-4 mb-md-0">
          
            <MDBTypography tag="h1" variant="h1" className="mb-3">
            Welcome to the Center of Excellence
            </MDBTypography>
          <hr className="my-4" />
          <MDBTypography className="lead mb-0">
            Our Center of Excellence is dedicated to empowering individuals and organizations by providing expert guidance, valuable internships, professional CV writing services, career consulting, and MBA projects with competitive pay. Explore our services and start your journey towards excellence today!
            <br />
            <br />
            Turn your ideas into reality with our entrepreneurship and innovation support services. Whether you're a budding entrepreneur or an established business owner, our Centre of Excellence offers the resources, mentorship, and guidance you need to start, grow, and scale your business. Explore our entrepreneurial programs and take the first step towards building something extraordinary.
          </MDBTypography>
        </Col>
        <Col xs={12} md={5} className="text-center">
          <MDBCol lg="10" md="8" className="mx-auto">
            <img
              src={BlueLogo}
              className="img-fluid rounded-circle"
              alt="Center of Excellence"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </MDBCol>
        </Col>
      </Row>
    </Container>
  );
};

export default COEdetails;
