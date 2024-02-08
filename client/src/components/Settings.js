import React from 'react'

import TopNavigation from './TopNavigation';

import NavLink from 'react-bootstrap/esm/NavLink';


function Settings() {
  return (
    <div>
      <div className='pulsediv'> 
    <div className='pulsebrn'>
      <h2><strong className='pulse'>Pulse.</strong><strong className='b'>B</strong><strong className='r'>R</strong><strong className='n'>n</strong></h2>
        </div>
  </div>
 <TopNavigation/>
  
  <NavLink to="/editProfile"></NavLink>
    </div>
  )
}

export default Settings