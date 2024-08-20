import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MDBTypography } from "mdb-react-ui-kit";
import Header from "./header";
import Footer from "./footer";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";

const Cvwriting = () => {
  return (
    <div  style={{backgroundColor:"#e7e6e6"}}>
      {/* <Header /> */}
      <Container className="mt-0">
      
        <Row className="mb-7 align-items-center" xs={1} md={2}>
          <Col className="d-flex flex-column justify-content-center mt-5">
            <MDBTypography tag="h1" variant="h1" className="mb-3">
            CAREERGUIDE CONSULTING
            </MDBTypography>
            <hr />
                        <MDBTypography className="lead mb-0">
            Get expert advice and guidance to advance your career and achieve your goals.
              <br />
          <br></br>
              <MDBTypography class="fw-bold"> WHAT WE OFFER?</MDBTypography>
        Our career consulting services are designed to help you navigate the complexities of your career path. Whether you're looking to switch industries, climb the corporate ladder, or find work-life balance, our experienced consultants are here to guide you.
            </MDBTypography>
          </Col>
          <Col className="text-center">
            <img
              src="https://img.freepik.com/free-photo/front-view-young-attractive-businesswoman-black-shirt-black-jacket-along-with-young-man-discussing-work-issues-inside-her-office-work-job-building_140725-16134.jpg?t=st=1723712457~exp=1723716057~hmac=4564bbe28d6df355bf1b7149f3b85375a05ee755c7a94d27f7ec0f21565ade70&w=740"
              className="img-fluid rounded"
              alt="Team Collaboration"
              style={{ maxWidth: "100%" }}
            />
          </Col>
        </Row>

        {/* Section 2 */}
       
         
           <MDBTypography style={{alignItems:"center"}}><h1 >
            HOW ITS WORKS
            </h1></MDBTypography>
            <hr />
        <MDBTypography note noteColor='info' style={{alignItems:"center"}} className="mb-5">
        
        <strong>step 1:</strong><p>Book a consultation online</p>
        <strong>step 2:</strong><p> Meet with one of our consultants to discuss your career goals.</p>
        <strong>step 3:</strong><p> Receive a personalized career strategy plan.</p>
        <strong>step 4:</strong><p> Implement the plan with ongoing support from our team.</p>
      </MDBTypography>
          
            
           
           
         

       
      </Container>

      <Footer />
    </div>
  );
};

export default Cvwriting;
