import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export default function FormPage() {
    const navigate = useNavigate();
    const [selectedClass, setSelectedClass] = useState("");

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setSelectedClass(newValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/result");
    };
  return (
    <div>
      <>
            <Header />
            <div className="container">
                <h1 style={{ textAlign: 'center' }}>Dashboard</h1>
                <br />
                <h2 style={{ textAlign: 'center' }}>Hello and welcome to the CareerPath</h2>
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
                                        placeholder="Enter full Name"
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <label><b>Email</b></label>
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Enter Email"
                                        required
                                    />
                                </div>
                                <div className="input-box education">
                                    <label><b>Class</b></label>
                                    <div className="select-box">
                                        <select name="class" onChange={handleInputChange} value={selectedClass}>
                                            <option value="">Select Class</option>
                                            <option value="High School">High School</option>
                                            <option value="Intermediate">Intermediate</option>
                                        </select>
                                    </div>
                                </div>
                                {selectedClass === 'Intermediate' && (
                                    <>
                                        <div className="input-box education">
                                            <label><b>Subject</b>*(Only for Intermediate)</label>
                                            <div className="select-box">
                                                <select name="subject">
                                                    <option value="">Select Subject</option>
                                                    <option value="Mathematics">Mathematics</option>
                                                    <option value="Biology">Biology</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="input-box education">
                                            <label><b>Graduation</b></label>
                                            <div className="select-box">
                                                <select name="graduation">
                                                    <option value="">Select Graduation</option>
                                                    <option value="Not Applicable">Not Applicable</option>
                                                    <option value="BCA">BCA</option>
                                                    <option value="Bsc">Bsc</option>
                                                    <option value="BA">BA</option>
                                                    <option value="B Pharma">B Pharma</option>
                                                </select>
                                            </div>
                                        </div>
                                    </>
                                )}
                                {selectedClass === 'High School' && (
                                    <div className="input-box education">
                                        <label><b>Interest</b></label>
                                        <div className="select-box">
                                            <select name="interest">
                                                <option value="">Select your interest</option>
                                                <option value="IT Sector">IT Sector</option>
                                                <option value="Medical">Medical</option>
                                            </select>
                                        </div>
                                    </div>
                                )}
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <br />
            <Footer />
        </>
    </div>
  )
}
