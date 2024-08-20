import React from "react";
import Header from "./header";
import Footer from "./footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import COEdetails from "./COEdetails"; // Ensure correct casing and path
import { MDBTypography } from "mdb-react-ui-kit";
import twogirls from './twogirls.jpg'

const Home = () => {
  return (
    <div style={{backgroundColor:"#e7e6e6"}}>
      {/* <Header /> */}
      <COEdetails />

      <Container className="mt-5">
      <Row className="mb-6 align-items-center" xs={1} md={2}>
          <Col className=" mb-3">
            <img
              src={twogirls}
              className="img-fluid rounded"
              alt="Technology"
              style={{ maxWidth: "100%" }}
            />
          </Col>
          <Col className="d-flex flex-column ">
            <MDBTypography  className="mb-0" tag="h5" variant="h5" class="fw-bold">
              Who We Are
              
              </MDBTypography>
              <hr/>
             
              <MDBTypography tag="h5" variant="h5">
              Empowering businesses of all sizes to thrive in the digital age
            </MDBTypography>
        <hr/>
            <MDBTypography className="lead mb-0" tag="h5" variant="h5" class="fw-bold">
              Mission
              </MDBTypography>
            
              <MDBTypography className="fs-5 lh-base">
              We deliver cutting-edge solutions across cloud, AI, digital, branding, consulting, and sustainability to transform businesses and fuel their success.
              <br></br>
              Our commitment to budget-conscious innovation, exceptional quality, on-time delivery, and industry-leading standards ensures future-proof solutions for our clients
              </MDBTypography>
              <MDBTypography className="lead mb-0" tag="h5" variant="h5" class="fw-bold">
              Vision
              </MDBTypography>
            
              <MDBTypography className="fs-5 lh-sm">
              Empowering businesses of all sizes to thrive in the digital age
              </MDBTypography>
              
           
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Home;
