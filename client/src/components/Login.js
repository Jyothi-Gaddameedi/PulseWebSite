import React from 'react'

function Login() {
  return (

    <div>
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
         
       </form>
    </div>
  )
}

export default Login;