import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';

function Signup() {
   // let navigate=useNavigate();
    //let dispatch=useDispatch();

  let firstNameInputRef=useRef();
  let lastNameInputRef=useRef();
  let mobileNumberInputRef=useRef();
  let cityInputRef=useRef();
  let profilePicInputRef=useRef();
  let emailInputRef=useRef();
  let passwordInputRef=useRef();
  let [profilePicURL,setProfilePicURL]=useState("./images/Profile-pic.jpg");

  let sendSignupDataToServerFormData=async()=>{
    let dataToSend=new FormData();
        dataToSend.append("firstName",firstNameInputRef.current.value);
        dataToSend.append("lastName",lastNameInputRef.current.value);
        dataToSend.append("mobileNumber",mobileNumberInputRef.current.value);
        dataToSend.append("city",cityInputRef.current.value);

        for(let i=0;i<profilePicInputRef.current.files.length;i++){
        dataToSend.append("profilePic",profilePicInputRef.current.files[i]);
        }
        dataToSend.append("email",emailInputRef.current.value);
        dataToSend.append("password",passwordInputRef.current.value);
      
    let reqOptions={
      method:"POST",
      body:dataToSend,
    };
    
    let JSONData=await fetch("http://localhost:5555/signup",reqOptions);
    let JSOData=await JSONData.json();
  if(JSOData.status==="Failure"){
    alert(JSOData.msg);
  }else{
    //dispatch({type:"signup",data:JSOData.data})
    //navigate("/");
  }
    
     console.log(JSOData);
  }
 
  return (
    <div className='App'>
        <form>
      <div>
           <h2>Signup</h2>
      </div>
      <div>
        <input ref={firstNameInputRef} className="login" placeholder="First Name"/>
      </div>
      <div>
        <input ref={lastNameInputRef} className="login" placeholder="Last Name"/>
      </div>
      <div>
        <input ref={mobileNumberInputRef} className="login" type="number" placeholder="Mobile No"/>
      </div>
      <div>
        <input ref={cityInputRef} className="login" placeholder="City/Town"/>
      </div>
      <div>
            <select className='login'>
                <option value="choose your state">choose your state</option>
                <option value="AP">Andhra pradesh</option>
                <option>Telangana</option>
                <option value="MP">Madhya pradesh</option>
                <option value="UP">Uttar pradesh</option>
            </select>
        </div>
        <div>
            <select className='login'>
                <option>choose Gender</option>
                <option>Male</option>
                <option>Female</option>
            </select>
        </div>
        <div>
          <label>profilePic</label>
          <br></br>
          <br></br>
          <input ref={profilePicInputRef} className='login' type="file" 
          onChange={()=>{
            let selectedImageURL=URL.createObjectURL(profilePicInputRef.current.files[0])

            setProfilePicURL(selectedImageURL)
          }}
          />
          <br></br>
          <img className='profilepic' src={profilePicURL} alt=''></img>
          <br></br>
          <br></br>
          
        </div>
        <div>
          <h4>Enter your account details:</h4>
        </div>
        <div>
          <input ref={emailInputRef} className="login" type="email" placeholder="email Address"/> 
        </div>
        <div>
           <input ref={passwordInputRef} className="login" type="password" placeholder="password"/>
        </div>
        <div>
           <button 
           onClick={()=>{
              sendSignupDataToServerFormData();

           }}
           className='button' type='button'>Submit</button>
        </div>
      </form>
      <br/>
      <Link to="/">Login</Link>
  </div>
    
  )
}

export default Signup