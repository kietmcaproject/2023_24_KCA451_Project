import React, { useState, useEffect } from "react";
import axios from "axios";
import { sendOtpRoute, registerRoute, verifyOTP } from '../utils/APIRoutes';
import { useNavigate, Link } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import toast from "react-hot-toast";

import { TryOtp } from "../utils/APIRoutes";
import ContactUsButton from "../contactUs/ContactUsButton";

export default function Register() {
  const [otp, setOtp] = useState("");
  const [showOtpVerification, setShowOtpVerification] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const toastOptions = {
    style: {
      border: '1px solid #713200',
      padding: '16px',
      color: '#713200',
    },
    iconTheme: {
      primary: '#713200',
      secondary: '#FFFAEE',
    },
  };
  const handleSendOtp = async () => {
    if(values.email===null)
      {
        toast.error("Email Not be Null",toastOptions)
      }
    try {

      
      await axios.post(sendOtpRoute, { email: values.email });
      setShowOtpVerification(true);
      console.log(values.email)
      toast.success("OTP sent to your email", toastOptions);
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error("Please Use Valid Email", toastOptions);
    }
  };

  const handleOtpVerification = async () => {
    try {
      console.log(values.email)
      const response = await axios.post(verifyOTP, {
        email: values.email,
        otp,
      });

      if (response.data.success) {
        setIsOtpVerified(true);
        toast.success("OTP verified successfully", toastOptions);
      } else {
        setIsOtpVerified(false);
        toast.error(response.data.message, toastOptions);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("Failed to verify OTP", toastOptions);
    }
  };
  

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password should be same.",
        toastOptions
      );
      return false;
    } else if (username.length < 3) {
      toast.error(
        "Username should be greater than 3 characters.",
        toastOptions
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { email, username, password } = values;
      const { data } = await axios.post(registerRoute, {
        username,
        email,
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
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 p-10 border border-blue-300 rounded-lg  ">
          <form action="" onSubmit={(event) => handleSubmit(event)}>
            <div className=" flex text-center justify-center p-3 m-2">
              <h1 className=" text-2xl font-bold underline">SignUp</h1>
            </div>
            <div className=" flex flex-col mb-3">
              <label>Username</label>
              <input type="text" placeholder="Username" className="  text-lg p-3 mx-2 rounded-lg bg-slate-300" name="username" onChange={(e) => handleChange(e)} />
            </div>
            <div className="flex flex-col mb-3">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                className="p-3 text-lg mx-2 rounded-lg bg-slate-300"
                name="email"
                onChange={(e) => handleChange(e)}
              />
              <div
                
                className="  text-sm cursor-pointer flex justify-end items-end p-1"
                onClick={handleSendOtp}
              >
                Send OTP
              </div>
            </div>

            {showOtpVerification && (
              <div className="flex flex-col mb-3 ">
                <label>Enter OTP</label>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="p-3 mx-2 text-lg rounded-lg bg-slate-300"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <div className="flex items-center justify-center">
                <button
                  type="button"
                  className="btn bg-yellow-500 text-white p-1 mt-2  w-52 rounded-md cursor-default flex justify-center items-center"
                  onClick={handleOtpVerification}
                >
                  Verify OTP
                </button>
                </div>
              </div>
            )}
            <div className="flex flex-col mb-3">
              <label>Password</label>
              <div className="flex flex-row">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="p-3 ml-3 text-lg rounded-l-lg  bg-slate-300"
                  name="password"
                  onChange={(e) => handleChange(e)}
                />
                <button
                  type="button"
                  className="btn text-2xl justify-center items-center  bg-slate-300 mr-2 px-2 rounded-r-lg"

                  onClick={handleTogglePassword}
                >
                  {showPassword ? <IoMdEyeOff /> : <IoEye />}
                </button>
              </div>
            </div>

            <div className="flex flex-col mb-3">
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm Password" className="p-3 mx-2 text-lg rounded-lg bg-slate-300 " name="confirmPassword" onChange={(e) => handleChange(e)} />
            </div>
            <span>
              Already have an account ? <Link to="/login" className=" text-blue-800 underline">Login.</Link>
            </span>
            <div className="flex items-center justify-center">
              
              {!isOtpVerified?<button
                type="submit"
                className="btn bg-slate-600 p-2 m-4 rounded-xl text-white w-full text-xl"
                disabled={!isOtpVerified}
              >
                Register
              </button>:<button
                type="submit"
                className="btn bg-orange-600 p-2 m-4 rounded-xl text-white w-full text-xl"
                disabled={!isOtpVerified}
              >
                Register
              </button>}
            </div>
          </form>
        </div>
        <ContactUsButton />
      </div>

    </>
  );
}



