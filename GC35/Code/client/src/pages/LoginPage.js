import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import "../App.css";
export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };
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

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  const heading1 = {
    color: "red",
    fontFamily: "times new roman",
    fontSize: "1.5rem",
  };
  const inputStyle = {
    border: "2px solid skyblue",
    borderRadius: "15px",
    marginTop: "8px",
    fontFamily: "times new roman",
    padding:"8px"
  };
  const btnStyle = {
    fontFamily: "verdana",
    fontSize: "13px",
    borderRadius: "15px",
    textTransform: "uppercase",
    backgroundColor: "seagreen",
  };
  const checkbox = {
    // display:"inline",
    backgroundColor: "red",
    border: " 3px solid red",
    fontSize: "50px",
    width: "50px",
    color: "green",
    marginLeft: "-10px",
  };
  // const mydiv={
  //   width:"100vw",
  //   height:"55vh",
  //   backgroundColor:"orange",
  //   display:"flex",
  //   justifyContent:"center",
  //   alignItems:"center"
  // }
  return (
    <div>
      <form className="login" onSubmit={login}>
        <h1 style={heading1}>Login</h1>
        <input
          type="text"
          placeholder="username"
          value={username}
          style={inputStyle}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="password"
          value={password}
          style={inputStyle}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <span style={{ marginLeft: "8px"}}>Show Password</span>
        {/* <input type="checkbox"  style={checkbox}/>  */}
        <input
          type="checkbox"
          checked={showPassword}
          onChange={handleShowPasswordToggle}
          style={checkbox}
        />
        <button style={btnStyle}>Login</button>
      </form>
    </div>
  );
}
