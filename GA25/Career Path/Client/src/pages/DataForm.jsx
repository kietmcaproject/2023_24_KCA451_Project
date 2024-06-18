import React, { useState } from 'react'

import { post } from '../services/ApiEndpoint'
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export default function DataForm() {
    const [classname,setclassname]=useState('')
    const [subject,setsubject]=useState('')
    const [graduation,setgraduation]=useState('')
    const [interest,setinterest]=useState('')
    const [course,setcourse]=useState('')
    const [entrance,setentrance]=useState('')
    const [college,setcollege]=useState('')
    const navigate = useNavigate();


    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const request= await post('/api/auth/savedata',{
                classname,
                subject,
                graduation,
                interest,
                course,
                entrance,
                college
            })
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
    };
    return (
        <div>
            <div className="container">
                
                <h2 style={{ textAlign: 'center' }}>Add Information</h2>
                <section className="Detail-section">
                    <div className="container flex Detail-container">
                        <div className="Detail-img">
                            <img src="/images/38.png" alt="" />
                        </div>
                        <div className="Detail-desc flex">
                            <h3>Fill up the Form</h3>
                            <form action="" onSubmit={handleSubmit} className="form">
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

                                <div className="input-box">
                                    <label><b>Course</b> *(separate with ','.)</label>
                                    <input type="text"  onChange={(e)=> setcourse(e.target.value)} name="" id="course" placeholder="Courses" required />
                                </div>
                                <div className="input-box">
                                    <label><b>Entrance</b> *(separate with ','.)</label>
                                    <input type="text" onChange={(e)=> setentrance(e.target.value)} name="" id="entrance" placeholder="Entrances" required />
                                </div>
                                <div className="input-box">
                                    <label><b>College</b> *(separate with ','.)</label>
                                    <input type="text" onChange={(e)=> setcollege(e.target.value)} name="" id="college" placeholder="Colleges" required />
                                </div>
                                <button type='submit'>Save</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
