import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { MDBTypography } from "mdb-react-ui-kit";
import Header from "./header";
import Footer from "./footer";
import Card from "react-bootstrap/Card";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";

const projectData = [
  {
    id: 1,
    title: "Market Analysis for New Product Launch",
    company: "Tech Innovators Inc.",
    duration: "3 months",
    compensation: "$1,500",
    description:
      "Conduct a comprehensive market analysis to support the launch of a new tech product.",
  },
  {
    id: 2,
    title: "Digital Marketing Strategy Development",
    company: "Marketing Gurus LLC",
    duration: "4 months",
    compensation: "$2,000",
    description:
      "Develop a digital marketing strategy for a rapidly growing online business.",
  },
  {
    id: 3,
    title: "Financial Risk Assessment for Investments",
    company: "Finance Experts Group",
    duration: "2 months",
    compensation: "$1,200",
    description:
      "Perform a risk assessment for potential investment opportunities.",
  },
];
const MBAprojects = () => {
  return (
    <div>
      <Header />
      <Row style={{ padding: "2rem" }}>
        <Col md="" lg="6" style={{ alignItems: "center" }}>
          {" "}
          <MDBTypography variant="h1">MBA Projects</MDBTypography>
          <hr />
          <MDBTypography className="lead mb-0">
            Engage in real-world projects, gain valuable experience, and earn
            competitive pay.
            <br></br>
            <br></br>
            Invest in experiential learning that translates directly into
            professional success, giving you a clear advantage in the job market
            <br></br>
            <br></br>
            Contribute to meaningful projects that equip you with practical
            insights and expertise, making your investment in your education
            truly worthwhile
          </MDBTypography>
        </Col>
        <Col xs lg="6">
          {/* <Image src="https://files.oaiusercontent.com/file-gVfhvBal5R6dfOtmbMfqx8TC?se=2024-08-13T15%3A45%3A59Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D31f55c7e-c37f-4060-ba0a-9316158e78ca.webp&sig=SypIlUIeiJ9YDNlVk0lkCKuEjG0/IUa1nrv0AXPj%2Bj4%3D"  className='img-fluid rounded-circle'  /> */}
          <MDBCol lg="10" md="4" className="mb-4">
            <img
              src="https://img.freepik.com/free-photo/employee-showing-appreciation-each-other_23-2149357549.jpg?t=st=1723616123~exp=1723619723~hmac=8b4a855fc538772da601f55b13d93af4de9baa47a2071332d72f66ae9cf74374&w=740"
              className="img-fluid rounded"
              alt=""
            />
          </MDBCol>
        </Col>
      </Row>

      <div className="how-it-works" style={{ marginTop: "5rem" }}>
        <Row style={{ padding: "2rem" }}>
          <Col xs lg="6">
            {/* <Image src="https://files.oaiusercontent.com/file-gVfhvBal5R6dfOtmbMfqx8TC?se=2024-08-13T15%3A45%3A59Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D31f55c7e-c37f-4060-ba0a-9316158e78ca.webp&sig=SypIlUIeiJ9YDNlVk0lkCKuEjG0/IUa1nrv0AXPj%2Bj4%3D"  className='img-fluid rounded-circle'  /> */}
            <MDBCol lg="10" md="4" className="mb-4">
              <img
                src="https://img.freepik.com/premium-photo/technology-theme-drawing-table-with-computer-double-exposure-concept-information_700248-90700.jpg?w=740"
                className="img-fluid rounded"
                alt=""
              />
            </MDBCol>
          </Col>
          <Col md="" lg="6" style={{ alignItems: "center" }}>
            {" "}
            <MDBTypography variant="h1">How It Works</MDBTypography>
            <hr />
            <MDBTypography className="lead mb-0">
              Our MBA projects offer students the opportunity to work on
              real-world business challenges.
              <br></br>
              <br></br>
              To participate, simply browse the available projects, apply
              directly through our portal, and gain hands-on experience while
              contributing to impactful projects.
              <br></br>
            </MDBTypography>
          </Col>
        </Row>
      </div>

      <div className="benefits">
        <Row style={{ padding: "2rem" }}>
          <Col>
            <Card border="dark" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  <i class="fas fa-code-branch"></i>
                </Card.Title>
                <Card.Text>
                  Real-world experience working with industry leaders.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="primary" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  <i class="far fa-address-card"></i>
                </Card.Title>
                <Card.Text>
                  Opportunity to apply academic knowledge to practical
                  scenarios.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="primary" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  <i class="fas fa-dollar-sign"></i>
                </Card.Title>
                <Card.Text>
                  Receive competitive pay for your contributions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="primary" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  <i class="fas fa-laptop-code"></i>
                </Card.Title>
                <Card.Text>
                  Enhance your CV with substantial project work.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      <Footer />
    </div>
  );
};

export default MBAprojects;
