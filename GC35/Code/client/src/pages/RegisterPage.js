import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  async function register(ev) {
    try {
      ev.preventDefault();
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });

      alert("Registration success!!");
      navigate("/login");
    } catch (error) {
      console.log("eerroos" + error);
    }
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
    padding: "8px",
  };
  const btnStyle = {
    fontFamily: "verdana",
    fontSize: "13px",
    borderRadius: "15px",
    textTransform: "uppercase",
    backgroundColor: "skyblue",
    marginTop: "10px",
  };
  return (
    <form className="register" onSubmit={register}>
      <h1 style={heading1}>Register</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        style={inputStyle}
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        style={inputStyle}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button style={btnStyle}>Register</button>
    </form>
  );
}
