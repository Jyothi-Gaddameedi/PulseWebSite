import React, { useEffect } from 'react'
import Col from 'react-bootstrap/esm/Col';

import Row from 'react-bootstrap/esm/Row';
import Image from 'react-bootstrap/Image';
import { IoSettingsOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

function TopNavigation() {
  let navigate=useNavigate();
  let storeObj=useSelector((store)=>{

    return store;
  });
  let activeLink=(obj)=>{
    if(obj.isActive===true){
      return ({color:"white"})
    }
  }

  useEffect(()=>{
    if(storeObj&&storeObj.loginDetails&&storeObj.loginDetails.firstName){
    }else{
        navigate("/");
    }
},[]);

  return (
    <div>
       <nav style={{display:"flex",justifyContent:"space-between"}}> 
        <div>
        <NavLink style={(obj)=>{return activeLink(obj)
      }} className="navLink" to="/home">Home</NavLink>
    
        <NavLink style={(obj)=>{return activeLink(obj)
      }} to="/settings" className="navLink"><IoSettingsOutline />Settings</NavLink>
      
        <NavLink style={(obj)=>{return activeLink(obj)
      }} to="/" className="navLink">Logout</NavLink>
        </div>
  
       <div style={{display:"flex",justifyContent:"flex-end" ,paddingRight:"25px"}}>
       <h5 style={{color:"rgb(181, 181, 181)"}}>{storeObj.loginDetails.firstName} {storeObj.loginDetails.lastName}</h5>
       
      <Row>
        <Col xs={6} md={4}>
          <Image className='sImg' src={`http://localhost:1234/${storeObj.loginDetails.profilePic}`} roundedCircle />
        </Col>
    </Row>
        </div>
          
   </nav>
    </div>
  )
}

export default TopNavigation