import React from 'react'

import TopNavigation from './TopNavigation';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Settings() {
let storeObj=useSelector((store)=>{
  return store;
});

let navigate=useNavigate();

  let activeLink=(obj)=>{
    if(obj.isActive===true){
      return ({color:"blue"})
    }
  }
  let deleteUserFromServer=async()=>{

    let url=`http://localhost:1234/deleteUser?email=${storeObj.loginDetails.email}`
 
    let reqOptions={
     method:"DELETE",
    };
 
 let JSONData=await fetch(url,reqOptions);
 let JSOData=await JSONData.json();
 
 if(JSOData.status==="Success"){
     navigate("/");
 }
 alert(JSOData.msg);
 }
 
 
  return (
    <div>
      <div className='pulsediv'> 
    <div className='pulsebrn'>
      <h2><strong className='pulse'>Pulse.</strong><strong className='b'>B</strong><strong className='r'>R</strong><strong className='n'>n</strong></h2>
        </div>
  </div>
 <TopNavigation/>
  
  <NavLink style={(obj)=>{return activeLink(obj)
      }}  to="/editProfile" className="setLink">EditProfile  ➡️</NavLink>
      <br></br>

  <NavLink style={(obj)=>{return activeLink(obj)
      }} className="setLink"
            onClick={()=>{
                deleteUserFromServer();
            }}>Delete User</NavLink>
          
    </div>

  )
}

export default Settings