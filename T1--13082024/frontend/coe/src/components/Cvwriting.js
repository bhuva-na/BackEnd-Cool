import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MDBTypography } from "mdb-react-ui-kit";
import Header from "./header";
import Footer from "./footer";
import Card from "react-bootstrap/Card";



const Cvwriting = () => {
  return (
    <div>
    <Header />
    <div className="how-it-works" style={{ marginTop: "2rem", padding: "2rem 1rem" }}>
      {/* Responsive Image and Text Section */}
      <Row className="align-items-center mb-5">
        <Col xs={12} lg={6} className="mb-4 mb-lg-0">
          <img
            src="https://img.freepik.com/free-photo/resumes-desk_144627-43369.jpg?t=st=1723632869~exp=1723636469~hmac=c750bd5f4cd3cb43ac7596619c97fdc2854e3dbbcec9d74473e1263efcb3cc95&w=740"
            className="img-fluid rounded"
            alt="CV Writing Service"
            style={{ width: "100%", height: "auto" }}
          />
        </Col>
        <Col xs={12} lg={6} className="text-center text-lg-start">
          <MDBTypography tag="h1" className="display-4 font-weight-bold">
            Professional CV Writing Services
          </MDBTypography>
          <hr />
          <MDBTypography className="lead">
            Enhance your career prospects with a professionally crafted CV.
            <br />
            <br />
            <p className="fw-bolder">Why Choose Our CV Writing Service?</p>
            Our expert writers know what employers are looking for. We ensure
            your CV is tailored to highlight your skills, experience, and
            achievements in a way that sets you apart from the competition.
          </MDBTypography>
        </Col>
      </Row>

      {/* Responsive Card Section */}
      <div className="benefits">
        <Row className="g-4 justify-content-center">
          <Col xs={12} sm={6} md={4}>
            <Card border="dark" className="h-100 shadow-lg">
              <Card.Body>
                <Card.Title>
                  <i className="fas fa-dollar-sign"></i> Basic Package
                </Card.Title>
                <Card.Text>
                  Get a professional CV that highlights your strengths and
                  experiences. Ideal for entry-level professionals.
                </Card.Text>
                <p className="fw-bolder">Price: $100</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card border="dark" className="h-100 shadow-lg">
              <Card.Body>
                <Card.Title>
                  <i className="fas fa-dollar-sign"></i> Premium Package
                </Card.Title>
                <Card.Text>
                  Includes a detailed CV along with a cover letter tailored to
                  the job you're applying for.
                </Card.Text>
                <p className="fw-bolder">Price: $150</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card border="dark" className="h-100 shadow-lg">
              <Card.Body>
                <Card.Title>
                  <i className="fas fa-dollar-sign"></i> Executive Package
                </Card.Title>
                <Card.Text>
                  A comprehensive CV, cover letter, and LinkedIn profile
                  optimization to maximize your job prospects.
                </Card.Text>
                <p className="fw-bolder">Price: $200</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default Cvwriting;
