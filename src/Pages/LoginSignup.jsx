import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import { useAdminContext } from '../Context/AdminContext';
import { useNavigate } from 'react-router-dom';
import { SERVER_URL } from '../serverURL';
function LoginSignup() {
  const navigate = useNavigate()
  const [state,setState] = useState("Login");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const {isAdmin,setIsAdmin} = useAdminContext()
  console.log("Is aDmin",isAdmin);
  
  const login = async ()=>{
    console.log("Login Function executed",formData);
    let responseData;
    await fetch(`${SERVER_URL}/login`,{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData)
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      localStorage.setItem('admin',responseData.user?.admin);
      if(responseData.user?.admin){
        setIsAdmin(true)
        navigate("/admin")
      }else{
        window.location.replace("/");
      }
    }else{
      alert(responseData.errors)
    }

  }
  const signup = async ()=>{
    console.log("Sign Up Function executed",formData);
    let responseData;
    await fetch(`${SERVER_URL}/signup`,{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData)
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }else{
      alert(responseData.errors)
    }
  }

  return (
    <div className='loginsignup'>
      <div style={{marginLeft:'15px',marginBottom:'0px'}}>
        <h3>Admin Panel Login: <br /> u: admin@gmail.com <br /> p: admin</h3>
        <h3>Dummy credentials: <br /> u: rahul@gmail.com <br /> p: 12345 </h3>
      </div>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name'/>:<></>}
          <input name='email' value={formData.email} onChange={changeHandler}  type="email" placeholder='Email Address'/>
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {state==="Sign Up"?<p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login Here</span></p>:<p className="loginsignup-login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Click Here</span></p>}
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup