import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Register.css";
const registerHandler = () => {};

const Register2 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  const registerHandler=async (ev)=>{
    try {
      ev.preventDefault();
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });

      alert("Registration success!!");

      // const res=await fetch(`http://localhost:4000/sendmail/${mail}`,{
      //   method:"GET"
      // })
      // console.log("res",res);
      navigate("/login");
    } catch (error) {
      console.log("eerroos" + error);
    }
  }
  
  return (
    <div className="Inclusive-register-page">
      <div className="register-big-wrapper">
        <div className="register-banner-section ">
          <img src="/register.png" alt="banner" width="490px" />
        </div>

        <div className="section-wrapper">
          <div className="top-suggest_login">
            <span> Have an account? </span>
            <a href="/login">Sign In</a>
          </div>

          <div className="top-register-explain">
            <h2>Welcome to MERN Blog</h2>
            <p>
              It's easy and free to post your thinking on any topic and connect
              with thounsands of readers.
            </p>
          </div>
          <form onSubmit={registerHandler}>
            {/* {error && <div className="error_message">{error}</div>} */}
            <div className="input-wrapper">
              <input
                type="text"
                required
                id="name"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="name">Username</label>
            </div>
            
            <div className="input-wrapper">
              <input
                type="password"
                required
                id="password"
                autoComplete="true"
                placeholder="6+ strong character"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                
              />
              <label htmlFor="password">Password</label>
            </div>
            
            <div className="input-wrapper">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register2;
