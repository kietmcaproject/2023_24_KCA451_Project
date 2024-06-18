import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { post } from '../services/ApiEndpoint'
import { Logout } from '../redux/AuthSlice'

export default function Header() {
    const user = useSelector((state) => state.Auth.user)
    const disptach = useDispatch()
    const navigate = useNavigate()
    
    
    const handleLogout = async () => {
        try {
            const request = await post('/api/auth/logout')
            const resspone = request.data
            if (request.status == 200) {
                disptach(Logout())
                navigate('/first')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <nav>
                <div className="container main-nav flex">
                    <Link to="/home" className="CareerPath-logo">
                        <img src="/images/Logo.png" alt="Career Path" />
                    </Link>
                    <div className="nav-links" id="nav-links">
                        <ul className="flex">
                            <li><Link to="/" className="hover-link">Home</Link></li>
                            <li className="dropdown">
                                <Link to="#" className="hover-link">Colleges</Link>
                                <ul className="dropdown-menu">
                                    <li><a href="https://www.nirfindia.org/2023/InnovationRanking.html#top" target="_blank" rel="noreferrer">IIT</a></li>
                                    <li><Link to="#">NIT</Link></li>
                                    <li><Link to="#">IIIT</Link></li>
                                    <li><a href="https://www.kiet.edu" target="_blank" rel="noreferrer">KIET Group of Institution Ghaziabad</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <Link to="#" className="hover-link">Exam</Link>
                                <ul className="dropdown-menu">
                                    <li><a href="https://jeemain.nta.ac.in/" target="_blank" rel="noreferrer">JEE Mains</a></li>
                                    <li><a href="https://gate2024.iisc.ac.in/" target="_blank" rel="noreferrer">Gate</a></li>
                                    <li><a href="https://cuet.nta.nic.in/" target="_blank" rel="noreferrer">CUET</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <Link to="#" className="hover-link">Course</Link>
                                <ul className="dropdown-menu">
                                    <li><Link to="#">B Tech</Link></li>
                                    <li><Link to="#">M Tech</Link></li>
                                    <li><Link to="#">BCA</Link></li>
                                    <li><Link to="#">MCA</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <Link to="#" className="hover-link">Careers</Link>
                                <ul className="dropdown-menu">
                                    <li><Link to="#">Software Engineer</Link></li>
                                    <li><Link to="#">Doctor</Link></li>
                                    <li><Link to="#">Civil Services</Link></li>
                                </ul>
                            </li>
                            <li className="primary-button">
                                {user ? (
                                    <li className="dropdown">
                                        <Link to="" className="hover-link">{user && user.name}</Link>
                                        <ul className="dropdown-menu">
                                            <li><button className='logout-btn' onClick={handleLogout}>Logout</button></li>
                                        </ul>
                                    </li>
                                ) : (
                                    <Link to="/login" >
                                        Log In
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                    <button className="nav-toggle hover-link" id="nav-toggle">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
            </nav>
        </div>
    )
}
