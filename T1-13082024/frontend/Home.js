import React from "react";
import Footer from "./footer";
import Header from "./header";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import COEdetails from "./COEdetails";
import MBAprojects from "./MBAprojects";

const Home = () => {
  return (
    <div>
      <div className="App">
        <Header />
        <COEdetails />
        <br></br>

        <Row xs="7">
          <Col>
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://img.freepik.com/premium-photo/human-resources-manager-choosing-professional-profile-hire-virtual-screen-interface-recruitment-concept-businessman-hand-pointing-icon-resource-hr-management-concept_35148-5659.jpg?w=826"
              />
              <Card.Body>
                <Card.Title>CV-WRITING</Card.Title>
                <Card.Text>
                  Boost your career with our CV writing service, which creates
                  clear and customized resumes to highlight your skills .
                </Card.Text>
                <Button variant="primary" href="/cvwriting">
                  Explore more
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://img.freepik.com/premium-photo/mba-master-business-administration-elearning-education-personal-development-concept_161452-11263.jpg?w=826"
              />
              <Card.Body>
                <Card.Title>MBA-PROJECTS</Card.Title>
                <Card.Text>
                  Get top-notch help with your MBA projects, offering expert
                  guidance and support for successful outcomes.
                </Card.Text>
                <Button variant="primary" href="/mbaptojects">
                  Explore more
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://img.freepik.com/premium-photo/business-handshake-finance-prosperity-money-technology-asset-background_31965-72020.jpg?w=740"
              />
              <Card.Body>
                <Card.Title>INTERSHIPS</Card.Title>
                <Card.Text>
                  Explore valuable internship opportunities to gain real-world
                  experience and build your resume quickly.
                </Card.Text>
                <Button variant="primary" href="/interships">
                  Explore more
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card style={{ width: "18rem", marginTop: "2%" }}>
              <Card.Img
                variant="top"
                src="https://img.freepik.com/premium-photo/redhead-businesswoman-using-her-laptop-against-blue-background-with-letters_1134-53024.jpg?w=740"
              />
              <Card.Body>
                <Card.Title>CAREER-CONSULTANT</Card.Title>
                <Card.Text>
                  Our career consultant service helps you find the right path
                  and make smart career choices with the expert personalized
                  advice.
                </Card.Text>
                <Button variant="primary" href="/consulting">
                  Explore more
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <div id="mba">
      <MBAprojects/>
      </div> */}

        <Footer />
      </div>
    </div>
  );
};

export default Home;
