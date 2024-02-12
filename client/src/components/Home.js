import React from 'react'
import { Link} from 'react-router-dom'

import { IoHome } from "react-icons/io5";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import TopNavigation from './TopNavigation';
import { useSelector } from 'react-redux';

function Home() {

  let storeObj=useSelector((store)=>{
    return store;
  });
  return (
    <div>
      <div className='pulsediv'> 
    <div className='pulsebrn'>
      <h2><strong className='pulse'>Pulse.</strong><strong className='b'>B</strong><strong className='r'>R</strong><strong className='n'>n</strong></h2>
    </div>
      
  </div>
    <TopNavigation/>

  <h3 style={{padding:"25px"}}><IoHome/> Home</h3>
      <div>
        <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image className='img1' src={`http://localhost:1234/${storeObj.loginDetails.profilePic}`} roundedCircle />
        </Col>
    </Row>
    <br/>
    <h4>Welocome to {storeObj.loginDetails.firstName} {storeObj.loginDetails.lastName}</h4>
    </Container>
    
  </div>
    <Link to="/">Back</Link>
    </div>
  )
}

export default Home