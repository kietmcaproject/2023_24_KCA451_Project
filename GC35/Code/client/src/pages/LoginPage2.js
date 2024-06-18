import React, {useState,useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";


import "../css/Login.css";


const LoginPage2 = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const { setUserInfo } = useContext(UserContext);

  async function login(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("wrong credentials");
    }
  }

  // redirecting to home page when login success 
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  // const [error, setError] = useState("");
  return (
    <div className="Inclusive-login-page">
      <div className="login-big-wrapper">
        <div className="section-wrapper">
          <div
            className="top-suggest
          _register"
          >
            <span>Don't have an account? </span>
            <a href="/register">Sign Up</a>
          </div>

          <div className="top-login-explain">
            <h2>Login to Your Account </h2>
            <p>Please Login Your Account, Thank You!</p>
          </div>

          <form onSubmit={login}>
            {/* {error && <div className="error_message">{error}</div>} */}
            <div className="input-wrapper">
              <input
                type="text"
                required
                id="username"
                name="username"
                placeholder="Enter username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                tabIndex={1}
              />
              <label htmlFor="email">Username</label>
            </div>
            <div className="input-wrapper">
              <input
                type="password"
                required
                id="password"
                name="password"
                placeholder="6+ strong character"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                tabIndex={2}
              />
              <label htmlFor="password">Password</label>
            </div>
            <Link to="/forgotpassword" className="login-screen__forgotpassword">
              {" "}
              Forgot Password ?
            </Link>
            <button type="submit">Login</button>
          </form>
        </div>

        <div className="login-banner-section ">
          <img src="/login.png" alt="banner" width="400px" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage2;
