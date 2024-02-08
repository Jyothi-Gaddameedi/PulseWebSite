import React from 'react'

import TopNavigation from './TopNavigation';
import { NavLink } from 'react-router-dom';




function Settings() {
  let activeLink=(obj)=>{
    if(obj.isActive===true){
      return ({color:"violet"})
    }
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
      }}  to="/editProfile" className="navLink">EditProfile</NavLink>
    </div>
  )
}

export default Settings