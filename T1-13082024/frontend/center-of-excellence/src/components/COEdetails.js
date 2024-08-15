import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Card from "react-bootstrap/Card";
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { MDBTypography } from 'mdb-react-ui-kit';


const COEdetails = () => {
  return (
    <div style={{marginTop:"2%", marginLeft:"2%"}}  >
     
        <Row>
       
       <Col md="" style={{alignItems:"center"}}> <MDBTypography variant='h1'>Welcome to the Center of Excellence</MDBTypography>
       <hr />
       <MDBTypography className='lead mb-0'>
       Our Center of Excellence is dedicated to empowering individuals and organizations by providing expert guidance, valuable internships, professional CV writing services, career consulting, and MBA projects with competitive pay. Explore our services and start your journey towards excellence today!
       <br></br>
       <br></br>
       Turn your ideas into reality with our entrepreneurship and innovation support services. Whether you're a budding entrepreneur or an established business owner, our Centre of Excellence offers the resources, mentorship, and guidance you need to start, grow, and scale your business. Explore our entrepreneurial programs and take the first step towards building something extraordinary
    </MDBTypography>
</Col>
       <Col xs lg="5">
       {/* <Image src="https://files.oaiusercontent.com/file-gVfhvBal5R6dfOtmbMfqx8TC?se=2024-08-13T15%3A45%3A59Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D31f55c7e-c37f-4060-ba0a-9316158e78ca.webp&sig=SypIlUIeiJ9YDNlVk0lkCKuEjG0/IUa1nrv0AXPj%2Bj4%3D"  className='img-fluid rounded-circle'  /> */}
       <MDBCol lg='10' md='6' className='mb-4'>
        <img
          src='https://files.oaiusercontent.com/file-gVfhvBal5R6dfOtmbMfqx8TC?se=2024-08-13T15%3A45%3A59Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D31f55c7e-c37f-4060-ba0a-9316158e78ca.webp&sig=SypIlUIeiJ9YDNlVk0lkCKuEjG0/IUa1nrv0AXPj%2Bj4%3D'
          className='img-fluid rounded-circle'
          alt=''
          
        />
      </MDBCol>
       </Col>
     </Row>
       

    </div>
  )
}

export default COEdetails