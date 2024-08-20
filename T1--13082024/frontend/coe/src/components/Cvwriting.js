import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MDBTypography } from "mdb-react-ui-kit";
import Header from "./header";
import Footer from "./footer";
import Card from "react-bootstrap/Card";
import rearveiw from "./rearveiw.jpg";

const Cvwriting = () => {
  const [hovered, setHovered] = useState(false);

  const cardStyle = {
    transition: "transform 0.3s, box-shadow 0.3s",
    transform: hovered ? "scale(1.05)" : "scale(1)",
    boxShadow: hovered
      ? "0 4px 20px rgba(0, 0, 0, 0.2)"
      : "0 2px 10px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={{ backgroundColor: "#e7e6e6" }}>
      {/* <Header /> */}
      <div className="how-it-works" style={{ padding: "2rem 1rem" }}>
        <Row className="align-items-center mb-5">
          <Col xs={12} lg={6} className="mb-4 mb-lg-0">
            <img
              src={rearveiw}
              className="img-fluid rounded"
              alt="CV Writing Service"
              style={{ width: "100%", height: "auto" }}
            />
          </Col>
          <Col xs={12} lg={6} className="text-center text-lg-start">
            <MDBTypography tag="h1" variant="h1">
              PRORESUME CRAFTING
            </MDBTypography>
            <hr />
            <MDBTypography className="fs-5 lh-base">
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

        {/* Centered Price Card with Hover Effect */}
        <Row className="justify-content-center">
          <Col xs={12} sm={8} md={6} lg={4}>
            <Card
              border="dark"
              className="h-100 shadow-lg text-center"
              style={cardStyle}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Card.Body>
                <Card.Title>
                  <i className="fas fa-dollar-sign"></i> CV Writing Service
                </Card.Title>
                <Card.Text>
                  Get a professional CV that highlights your strengths and
                  experiences. Ideal for professionals at all levels.
                </Card.Text>
                <p className="fw-bolder" style={{ fontSize: "1.5rem" }}>Price: Rs.750</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Cvwriting;
