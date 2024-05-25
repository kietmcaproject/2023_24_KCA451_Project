import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import '../contactUs/animate.css'
import { loginRoute } from "../utils/APIRoutes";
import ContactUsButton from "../contactUs/ContactUsButton";

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ username: "", password: "" });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { username, password } = values;
    if (username === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );

        navigate("/");
      }
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto h-screen w-1/3">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-blue-400  ">
          <h1 className='text-3xl font-semibold text-center text-gray-600'>
            Login
          </h1>
          <form className=" flex flex-col gap-y-6 " onSubmit={(event) => handleSubmit(event)}>
            <div >
              <label className='label '>
                <span className='text-base label-text '>Username</span>
              </label>
              <input type='text' placeholder='Enter username' name="username" className='w-full input text-lg input-bordered h-10 bg-slate-300  p-4 rounded-md'
                onChange={(e) => handleChange(e)}
                min="3"
              />
            </div>
            <div>
              <label className='label'>
                <span className='text-base label-text'>Password</span>
              </label>
              <input
                type='password'
                name="password"
                placeholder='Enter Password'
                className='w-full input input-bordered h-10 p-4 bg-slate-300 text-lg rounded-md'
                onChange={(e) => handleChange(e)}
              />
            </div>
            <span>
              Don't have an account ? <Link className="text-blue-800 underline" to="/register">Create One.</Link>
            </span>
            <div className="">
              <button type="submit" className='btn  bg-yellow-600 justify-center items-center w-full p-2 rounded-lg'>Login</button>
            </div>
          </form>
        </div>
        <ContactUsButton />
      </div>

    </>
  );
}


