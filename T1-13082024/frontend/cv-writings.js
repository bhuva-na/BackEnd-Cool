import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { MDBTypography } from "mdb-react-ui-kit";
import Header from "./header";
import Footer from "./footer";
import Card from "react-bootstrap/Card";

const Cvwriting = () => {
  return (
    <div>
      <Header />
      <div className="how-it-works" style={{ marginTop: "5rem" }}>
        <Row style={{ padding: "2rem" }}>
          <Col xs lg="6">
            {/* <Image src="https://files.oaiusercontent.com/file-gVfhvBal5R6dfOtmbMfqx8TC?se=2024-08-13T15%3A45%3A59Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D31f55c7e-c37f-4060-ba0a-9316158e78ca.webp&sig=SypIlUIeiJ9YDNlVk0lkCKuEjG0/IUa1nrv0AXPj%2Bj4%3D"  className='img-fluid rounded-circle'  /> */}
            <MDBCol lg="10" md="4" className="mb-4">
              <img
                src="https://img.freepik.com/free-photo/resumes-desk_144627-43369.jpg?t=st=1723632869~exp=1723636469~hmac=c750bd5f4cd3cb43ac7596619c97fdc2854e3dbbcec9d74473e1263efcb3cc95&w=740"
                className="img-fluid rounded"
                alt=""
              />
            </MDBCol>
          </Col>
          <Col md="" lg="6" style={{ alignItems: "center" }}>
            {" "}
            <MDBTypography variant="h1">
              Professional CV Writing Services
            </MDBTypography>
            <hr />
            <MDBTypography className="lead mb-0">
              Enhance your career prospects with a professionally crafted CV.
              <br></br>
              <br></br>
              <p class="fw-bolder">Why Choose Our CV Writing Service?</p>
              Our expert writers know what employers are looking for. We ensure
              your CV is tailored to highlight your skills, experience, and
              achievements in a way that sets you apart from the competition.
            </MDBTypography>
          </Col>
        </Row>
        <div className="benefits">
          <Row style={{ padding: "2rem" }}>
            <Col>
              <Card border="dark" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>
                    <i class="fas fa-dollar-sign"></i> Basic Package
                  </Card.Title>
                  <Card.Text>
                    Get a professional CV that highlights your strengths and
                    experiences. Ideal for entry-level professionals
                  </Card.Text>
                  <p class="fw-bolder">Price: $100</p>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="dark" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>
                    <i class="fas fa-dollar-sign"></i> Premium Package
                  </Card.Title>
                  <Card.Text>
                    Includes a detailed CV along with a cover letter tailored to
                    the job you're applying for.
                  </Card.Text>
                  <p class="fw-bolder">Price: $150</p>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="dark" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>
                    <i class="fas fa-dollar-sign"></i> Executive Package
                  </Card.Title>
                  <Card.Text>
                    A comprehensive CV, cover letter, and LinkedIn profile
                    optimization to maximize your job prospects.
                  </Card.Text>
                  <p class="fw-bolder">Price: $200</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Cvwriting;
