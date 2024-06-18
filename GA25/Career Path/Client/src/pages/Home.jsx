

import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import { post } from '../services/ApiEndpoint'
import  { toast } from 'react-hot-toast';
import {useDispatch,useSelector } from 'react-redux'
import { SetData } from '../redux/DataSlice';


export default function Home() {
    const user = useSelector((state) => state.Auth.user)
    console.log(user)
    const navigate = useNavigate()


    const data=useSelector((state)=>state.Data)
    console.log(data)
    const dispatch=useDispatch()
    const [classname,setclassname]=useState('')
    const [subject,setsubject]=useState('')
    const [graduation,setgraduation]=useState('')
    const [interest,setinterest]=useState('')


    const gotoAdmin = () => {
        navigate('/admin')
    }
    const gotoData = () => {
        navigate('/dataform')
    }
    const gotoAlldata = () => {
        navigate('/alldata')
    }
    

    const handleSubmit= async(e)=>{
        e.preventDefault();
        console.log(classname,subject,graduation,interest)
        try {
            const request= await post('/api/auth/showresult',{classname,subject,graduation,interest})
            const reponse= request.data 

            if (request.status==200) {
              toast.success(reponse.message)
              dispatch(SetData(reponse.data))
              navigate("/result");
            }
            console.log(reponse)
        } catch (error) {
          if (error.response) {
            toast.error(error.response.data.message);
          } else {
            toast.error('An error occurred. Please try again.');
          }
          console.log(error)
        }





        
    };
    return (
        <div>
            <Header />
            {user && user.role == 'admin' ? (
                <div>
                    <h1 style={{ textAlign: 'center' }}>Admin Dashboard</h1>
                    <h2 style={{ textAlign: 'center' }}>Welcome Back Admin</h2>
                    <div className='home-container'>
                        <div className='user-card'>
                            <button className='admin-btn' onClick={gotoAdmin}>See all User</button>
                            <button className='admin-btn' onClick={gotoData}>Add Data</button>
                            <button className='admin-btn' onClick={gotoAlldata}>See all Data</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="container">
                        <h1 style={{ textAlign: 'center' }}>User Dashboard</h1>
                        <br />
                        <h2 style={{ textAlign: 'center' }}>Hello {user && user.name} and welcome to the CareerPath</h2>
                        <section className="Detail-section">
                            <div className="container flex Detail-container">
                                <div className="Detail-img">
                                    <img src="/images/38.png" alt="" />
                                </div>
                                <div className="Detail-desc flex">
                                    <h2>Fill up the Form</h2>
                                    <form onSubmit={handleSubmit} className="form">
                                        <div className="input-box">
                                            <label><b>Full Name</b></label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                value={user && user.name}
                                                placeholder="Enter full Name"
                                                required
                                                readOnly
                                            />
                                        </div>
                                        <div className="input-box">
                                            <label><b>Email</b></label>
                                            <input
                                                type="text"
                                                name="email"
                                                value={user && user.email}
                                                placeholder="Enter Email"
                                                required
                                                readOnly
                                            />
                                        </div>
                                        <div className="input-box education">
                                        <label><b>Class</b></label>
                                    <div className="select-box">
                                        <select onChange={(e)=> setclassname(e.target.value)} name="" id="class" >
                                            <option value="">Select Class</option>
                                            <option value="High School">High School</option>
                                            <option value="Intermediate">Intermediate</option>
                                        </select>
                                    </div>
                                        </div>
                                            
                                                <div className="input-box education">
                                                <label><b>Subject</b></label>
                                    <div className="select-box">
                                        <select onChange={(e)=> setsubject(e.target.value)} name="" id="subject">
                                            <option value="">Select Subject</option>
                                            <option value="Not Applicable">Not Applicable</option>
                                            <option value="Mathematics">Mathematics</option>
                                            <option value="Biology">Biology</option>
                                        </select>
                                    </div>
                                                </div>
                                                <div className="input-box education">
                                                <label><b>Graduation</b></label>
                                    <div className="select-box">
                                        <select onChange={(e)=> setgraduation(e.target.value)} name="" id="graduation">
                                            <option value="">Select Graduation</option>
                                            <option value="Not Applicable">Not Applicable</option>
                                            <option value="BCA">BCA</option>
                                            <option value="Bsc">Bsc</option>
                                            <option value="BA">BA</option>
                                            <option value="B Pharma">B Pharma</option>
                                        </select>
                                    </div>
                                                </div>
                                                <div className="input-box education">
                                                <label><b>Interest</b></label>
                                    <div className="select-box">
                                        <select onChange={(e)=> setinterest(e.target.value)} name="" id="interest">
                                            <option value="">Select your interest</option>
                                            <option value="IT Sector">IT Sector</option>
                                            <option value="Medical">Medical</option>
                                        </select>
                                    </div>
                                            </div>
                                            
                                    
                                        
                                            
                                        <button type="submit">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            )

            }

            <Footer />

        </div>
    )
}

