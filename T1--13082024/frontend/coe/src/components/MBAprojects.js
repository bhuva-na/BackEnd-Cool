import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MDBTypography } from "mdb-react-ui-kit";
import Header from "./header";
import Footer from "./footer";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const MBAprojects = () => {
  return (
    <div>
      <Header />
      <Container className="mt-5">
        {/* Section 1 */}
        <Row className="mb-8 align-items-center" xs={1} md={2}>
          <Col className="d-flex flex-column justify-content-center">
            <MDBTypography tag="h1" variant="h1" className="mb-3">
              MBA Projects
            </MDBTypography>
            <hr />
            <MDBTypography className="lead mb-0">
              Engage in real-world projects, gain valuable experience, and earn
              competitive pay.
              <br />
              <br />
              Invest in experiential learning that translates directly into
              professional success, giving you a clear advantage in the job market.
              <br />
              <br />
              Contribute to meaningful projects that equip you with practical
              insights and expertise, making your investment in your education
              truly worthwhile.
            </MDBTypography>
          </Col>
          <Col className="text-center">
            <img
              src="https://img.freepik.com/premium-photo/high-angle-view-business-people-using-laptop-desk-office_1048944-17252369.jpg?w=740"
              className="img-fluid rounded"
              alt="Team Collaboration"
              style={{ maxWidth: "100%" }}
            />
          </Col>
        </Row>

        {/* Section 2 */}
        <Row className="mb-7 align-items-center" xs={1} md={2}>
          <Col className="text-center mb-4">
            <img
              src="https://img.freepik.com/premium-photo/technology-theme-drawing-table-with-computer-double-exposure-concept-information_700248-90700.jpg?w=740"
              className="img-fluid rounded"
              alt="Technology"
              style={{ maxWidth: "100%" }}
            />
          </Col>
          <Col className="d-flex flex-column justify-content-center">
            <MDBTypography tag="h1" variant="h1" className="mb-4">
              How It Works
            </MDBTypography>
            <hr />
            <MDBTypography className="lead mb-0">
              Our MBA projects offer students the opportunity to work on real-world
              business challenges.
              <br />
              <br />
              To participate, simply browse the available projects, apply
              directly through our portal, and gain hands-on experience while
              contributing to impactful projects.
              <br />
            </MDBTypography>
          </Col>
        </Row>

        {/* Benefits Section */}
        <Row className="mb-6 g-4" xs={1} sm={2} md={3} lg={4}>
          <Col>
            <Card border="dark" className="h-100 shadow-lg ">
              <Card.Body>
                <Card.Title>
                  <i className="fas fa-code-branch"></i> Real-World Experience
                </Card.Title>
                <Card.Text>
                  Real-world experience working with industry leaders.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="primary" className="h-100 shadow-lg">
              <Card.Body>
                <Card.Title>
                  <i className="far fa-address-card"></i> Practical Application
                </Card.Title>
                <Card.Text>
                  Opportunity to apply academic knowledge to practical scenarios.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="primary" className="h-100 shadow-lg">
              <Card.Body>
                <Card.Title>
                  <i className="fas fa-dollar-sign"></i> Competitive Pay
                </Card.Title>
                <Card.Text>
                  Receive competitive pay for your contributions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="primary" className="h-100 shadow-lg">
              <Card.Body>
                <Card.Title>
                  <i className="fas fa-laptop-code"></i> Enhance Your CV
                </Card.Title>
                <Card.Text>
                  Enhance your CV with substantial project work.
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

export default MBAprojects;
