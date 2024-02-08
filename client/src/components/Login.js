import React, { useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
function Login() {
  let activeLink=(obj)=>{
    if(obj.isActive===true){
      return ({color:"violet"})
    }
  }

  let emailInputRef=useRef();
  let passwordInputRef=useRef();

  let navigate=useNavigate();
  let dispatch=useDispatch();

  let validateLoginFromServer=async()=>{
    let dataToSend=new FormData();
      dataToSend.append("email",emailInputRef.current.value);
      dataToSend.append("password",passwordInputRef.current.value);
    let reqOptions={
      method:"POST",
      body:dataToSend,
    }

    let JSONData=await fetch("http://localhost:1234/validateLogin",reqOptions);
    let JSOData=await JSONData.json();

    if(JSOData.status==="Failure"){
      alert(JSOData.msg);  
   }else{
     dispatch({type:"login",data:JSOData.data[0]});
     navigate("/home");
   }

    console.log(JSOData);
  }
  return (

<div className='App'>
      <form className='signupForm'>
          <div><h2>Login</h2>
          </div>
        <div>
         <input className="login" type="email" ref={emailInputRef} placeholder="Email Address"/>
         </div>
         <div>
         <input className="login" type="password" ref={passwordInputRef} placeholder="Password"/>
         </div>
         <div>
            <NavLink>Forgot Password?</NavLink>
         </div>
          <div>
            <button className="button" type="button"
            onClick={()=>{
              validateLoginFromServer();
            }}
            >Login</button>
        </div>
        <div className='link'>
      <p>Don't have an account?</p>
      <NavLink style={(obj)=>{return activeLink(obj)
      }}
       to="/signup" className="navLink">Create an account</NavLink>
      </div>
      </form>

      
        </div>
        


    
    
  
  )
}

export default Login;