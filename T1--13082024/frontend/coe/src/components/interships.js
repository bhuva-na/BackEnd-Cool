import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MDBIcon, MDBTypography } from "mdb-react-ui-kit";
import Header from "./header";
import Footer from "./footer";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const Interships = () => {
  return (
    <div>
         <Header />
      <Container className="mt-5 ">
        {/* Section 1 */}
        <Row className="mb-9 align-items-center" xs={1} md={2}>
         
          <Col className="text-center">
            <img
              src="https://img.freepik.com/free-photo/employee-showing-appreciation-each-other_23-2149357549.jpg?t=st=1723616123~exp=1723619723~hmac=8b4a855fc538772da601f55b13d93af4de9baa47a2071332d72f66ae9cf74374&w=740"
              className="img-fluid rounded"
              alt="Team Collaboration"
              style={{ maxWidth: "100%" }}
            />
          </Col>
          <Col xs={12} lg={6} className="text-center text-lg-start">
          <MDBTypography tag="h1" variant="h1" className="mb-3">
          Internship Opportunities
          </MDBTypography>
          <hr />
          <MDBTypography className="lead">
          Gain practical experience and earn a certificate by joining our internship programs.
            <br />
            <br />
            <p className="fw-bolder">Why Intern with Us?</p>
            Our internships provide valuable industry experience and networking opportunities. Whether you're interested in tech, marketing, or finance, we have something for everyone.
          </MDBTypography>
        </Col>
        </Row>

        
        <MDBTypography style={{alignItems:"center"}} ><h1 >
            How To Apply
            </h1></MDBTypography>
            <hr />
        <MDBTypography note noteColor='info' style={{alignItems:"center"}} className='mb-8'>
        
        <strong> Submit your application through our official application page to be considered for an internship</strong>
        
      </MDBTypography>

      <Row className="mb-7 g-4" xs={1} sm={2} md={3} lg={4}>
          <Col>
            <Card border="dark" className="h-100">
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
            <Card border="dark" className="h-100">
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
            <Card border="dark" className="h-100">
              <Card.Body>
                <Card.Title>
                <MDBIcon fab icon="black-tie" /> Potential Job Offer
                </Card.Title>
                <Card.Text>
                Stand out for potential full-time job offers or extended internship opportunities
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="dark" className="h-100">
              <Card.Body>
                <Card.Title>
                <MDBIcon fas icon="award" /> Recognition and Awards:
                </Card.Title>
                <Card.Text>
                Receive recognition and awards for outstanding performance and achievements
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          </Row>
      </Container>

      <Footer />
    </div>
  )
}

export default Interships