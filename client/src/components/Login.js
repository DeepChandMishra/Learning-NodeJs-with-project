import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const navigate=useNavigate();
const handleLogin = async () => {
    try {
        let result = await fetch("http://localhost:4001/api/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });
        debugger
        result = await result.json();
        console.log('Login successful', result);
        if(result.message === 'Login successful'){
            localStorage.setItem("user",JSON.stringify(result));
            navigate('/')
        }else{
            alert('provide correct details')
        }
    } catch (error) {
        console.error('error', error);
    }
}

  return (
    <div className='login'>
        <input type="text" className='inputBox' placeholder='enter email' value={email} onChange={(e)=> setEmail(e.target.value)} />
        <input type='password' className='inputBox' placeholder='enter password' value={password} onChange={(e)=> setPassword(e.target.value)} />
        <button onClick={handleLogin} className='appbutton' type='button'>Login</button>
    </div>
  )
}

export default Login