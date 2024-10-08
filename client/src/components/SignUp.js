import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const SignUp = () => {
    const [name,setName]=useState('')
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const navigate=useNavigate();

    useEffect(()=>{
      const auth=localStorage.getItem("user");
      if(auth){
        navigate('/')
      }
    })

    const handleLogin= async()=>{
      try {
        const response=await axios.post('http://localhost:4001/api/signup',{name,email,password})
         console.log(response.data.user);
         localStorage.setItem("user",JSON.stringify(response.data.user))
         navigate('/'); 
      } catch (error) {
        console.log('error'+error.message)
      }

    }

  return (
    <div className="register">
        <h1>Register</h1>
        <input className="inputBox" type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="enter name" />
        <input className="inputBox" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="enter email" />
        <input className="inputBox" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="enter password" />
        <button className="appbutton" type="button" onClick={handleLogin}>Sign Up</button>
    </div>
  )
}

export default SignUp