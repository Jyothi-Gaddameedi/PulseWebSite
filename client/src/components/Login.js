import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='App'>
      <form>
      <h2>Login</h2>
      
        <Link to="/signup">Signup</Link>
        <Link to="/home">Home</Link>
      </form>
        
    </div>
    
    
  
  )
}

export default Login