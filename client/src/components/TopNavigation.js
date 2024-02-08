import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Image from 'react-bootstrap/Image';
import { IoSettingsOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';

function TopNavigation() {
  let storeObj=useSelector((store)=>{
    return store;
  })
  return (
    <div>
        
  
 <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          {/* <Navbar.Brand href="/home">Home</Navbar.Brand> */}
          <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/Settings"><IoSettingsOutline />Settings</Nav.Link>
          <Nav.Link href="/">Logout</Nav.Link>
          </Nav>
          <Nav>

       <div>     
      <Row>
        <Col xs={6} md={4}>
          <Image className='sImg' src={`http://localhost:1234/${storeObj.loginDetails.profilePic}`} roundedCircle />
        </Col>
    </Row>
              <h5 style={{color:"gray"}}>{storeObj.loginDetails.firstName} {storeObj.loginDetails.lastName}</h5></div>
          
          </Nav>
        </Container>
      </Navbar>
      <br />
   </>

    </div>
  )
}

export default TopNavigation