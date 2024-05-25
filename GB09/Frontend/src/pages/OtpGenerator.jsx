import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import { sendOtpRoute } from '../utils/APIRoutes';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
function OtpGenerator() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
const navigate=useNavigate();
  const handleSendOtp = async () => {
    try {
      const response = await axios.post(sendOtpRoute, { email });
      if(response.status===200)
        {
          navigate("/auth/validate",{state:email})
        }
      setSuccessMessage(response.data.message);
      setError(null);
    } catch (error) {
      setError(error.response.data.error);
      toast.error('Failed', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      })
      setSuccessMessage(null);
    }
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 flex flex-col p-10 gap-y-6 border border-blue-300 rounded'>
        <div className='items-center justify-center flex'>
          <h1 className='text-3xl font-extrabold'>EMAIL</h1>
        </div>
        <div>
          <input
            type='email'
            className='p-3 text-xl rounded-md'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {error && <div className='text-red-500'>{error}</div>}
        {successMessage && <div className='text-green-500'>{successMessage}</div>}
        <div className='flex justify-center items-center'>
          <button
            className='btn bg-yellow-600 w-full p-3 rounded mt-4 text-white text-xl'
            onClick={handleSendOtp}
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}

export default OtpGenerator;
