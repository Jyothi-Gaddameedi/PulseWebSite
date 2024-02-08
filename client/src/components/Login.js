import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (

<div className='App'>
      <form>
          
         <h1 class="v">Login</h1>
      
         <div>
         <input class="login" type="email" placeholder="email Address"/>
         </div>
  <br/>

         <div>
         <input class="login" type="password" placeholder="password"/>
         </div>
         
         <div>
            <a class="form" href="#">Forgot Password?</a>
         </div>
  <br/>
          <div>
            <input class="b" type="submit" value="Login"/>
        </div>
         <Link to="/signup">Signup</Link>
       </form>

      
        </div>
        


    
    
  
  )
}

export default Login;