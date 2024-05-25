import React, { useState } from 'react';
import toast from 'react-hot-toast';
function OtpValidation() {
  const [otp, setOtp] = useState('');

  const handleSubmit = () => {
    if (otp.length !== 6 || isNaN(otp)) {
      toast.error('Please enter a valid 6-digit OTP.', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
    } else {
      
      console.log('Valid OTP:', otp);
    }
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 flex flex-col p-10 gap-y-6 border border-blue-300 rounded'>
        <div className='items-center justify-center flex'>
          <h1 className='text-3xl font-extrabold'>OTP</h1>
        </div>
        <div>
          <input
            maxLength={6}
            type='number'
            className='p-3 text-xl rounded-md max-w-96'
            placeholder='Enter OTP'
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        <div className='flex justify-center items-center'>
          <button
            className='btn bg-yellow-600 w-full p-3 rounded mt-4 text-white text-xl'
            onClick={handleSubmit}
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}

export default OtpValidation;
