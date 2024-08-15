import React from "react";
import Header from "./header";
import Footer from "./footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import COEdetails from "./COEdetails"; // Ensure correct casing and path

const Home = () => {
  return (
    <div>
      <Header />
      <COEdetails />

      <Container className="mt-5">
        <Row className="mb-4 g-4" xs={1} sm={2} md={3} lg={4}>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://img.freepik.com/premium-photo/human-resources-manager-choosing-professional-profile-hire-virtual-screen-interface-recruitment-concept-businessman-hand-pointing-icon-resource-hr-management-concept_35148-5659.jpg?w=826"
                alt="CV Writing Service"
                className="card-img"
              />
              <Card.Body>
                <Card.Title>CV-WRITING</Card.Title>
                <Card.Text>
                Enhance your job prospects with a professionally crafted CV that highlights your skills, achievements, and experience.
                </Card.Text>
                <Button variant="primary" href="/cvwriting">
                  Explore more
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://img.freepik.com/premium-photo/mba-master-business-administration-elearning-education-personal-development-concept_161452-11263.jpg?w=826"
                alt="MBA Projects"
                className="card-img"
              />
              <Card.Body>
                <Card.Title>MBA-PROJECTS</Card.Title>
                <Card.Text>
                Participate in real world MBA projects that enhance your skills and provide valuable practical experience.                </Card.Text>
                <Button variant="primary" href="/mbaprojects">
                  Explore more
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://img.freepik.com/premium-photo/business-handshake-finance-prosperity-money-technology-asset-background_31965-72020.jpg?w=740"
                alt="Internships"
                className="card-img"
              />
              <Card.Body>
                <Card.Title>INTERNSHIPS</Card.Title>
                <Card.Text>
                Gain hands-on experience and a certificate through our diverse internship opportunities designed to boost your career
                </Card.Text>
                <Button variant="primary" href="/interships">
                  Explore more
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://img.freepik.com/premium-photo/redhead-businesswoman-using-her-laptop-against-blue-background-with-letters_1134-53024.jpg?w=740"
                alt="Career Consultant"
                className="card-img"
              />
              <Card.Body>
                <Card.Title>CAREER-CONSULTANT</Card.Title>
                <Card.Text>
                Get expert advice and guidance to advance your career and achieve your goals with personalized support
                </Card.Text>
                <Button variant="primary" href="/consulting">
                  Explore more
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Home;
