import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { post } from '../services/ApiEndpoint'
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const minLength = 6;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (password.length < minLength) {
      return `Password must be at least ${minLength} characters long.`;
    }
    if (!specialCharRegex.test(password)) {
      return 'Password must contain at least one special character.';
    }
    return null;
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();

    const passwordError = validatePassword(password);
    if (passwordError) {
      toast.error(passwordError);
      return;
    }

    try {
     const request= await post('/api/auth/register',{name,email,password})
     const reposne=request.data
     if (request.status==200) {
          toast.success(reposne.message)
          navigate("/login")
     }
     console.log(reposne)
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error('An error occurred. Please try again.');
      }
      console.log(error)
    }
  }
  return (
    <>
          <div className='register-container'>
            <h2>Register</h2>
               <form action="" onSubmit={handleSubmit}>
               <div className='input-group'>
                <label htmlFor="username">Username</label>
                <input type="text"
                onChange={(e)=> setName(e.target.value)} name="" id="username" />
               </div>
               <div className='input-group'>
                <label htmlFor="email">Emaiil</label>
                <input type="email" name="" onChange={(e)=>setEmail(e.target.value)} id="email" />
               </div>
               <div className='input-group'>
                <label htmlFor="password">Password</label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} name="" id="password" />
               </div>
               <button type='submit'>Register</button>
               <p className='register-link'>
               Already have an account? <Link to={'/login'}>Login here</Link>
                </p>
               </form>
          </div>




    </>
  )
}
