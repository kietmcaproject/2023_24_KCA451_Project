import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/nav/Nav"
import Footer from "./components/footer/footer"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Feedback from "./components/feedback/Feedback"
import Services from "./components/services/Services"
import ContactUs from "./components/contact/ContactUs"
import Workers from "./components/services/Workers"
import Profile from "./components/worker_profile/Profile"
import {RequiredAuth} from './components/Auth/AuthRequire'
import { AlreadyLoged } from "./components/Auth/AlreadyLoged"
import { AuthAdmin } from "./components/Auth/AuthAdmin"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./components/admin/Home";
import AdminUsers from "./components/admin/Users";
import AdminWorkers from "./components/admin/Workers";
import AdminRequests from "./components/admin/Requests";
import { useEffect } from "react"
import { baseUrl } from "./components/shared/baseUrl"
import Rating from "./components/admin_navbar/Rating"


const App = () =>{

  useEffect(() => {
    const fetchData = async () => {
      await adminCreate();
    };
  
    fetchData();
  },[])
  async function adminCreate() {
    const data = {
      email: "admin@easyway.com",
      password: "admin@123",
      userType: "admin"
    }

    const res = await fetch(baseUrl + '/api/admin/addAdmin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (res === 201) {
      console.log("Admin Created")
    }
  }

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="login" element={<AlreadyLoged><Login/></AlreadyLoged>}/>
          <Route path="register" element={<AlreadyLoged><Register/></AlreadyLoged>}/>
          <Route path="feedback" element={<Feedback/>}/>
          <Route path="workers" element={<RequiredAuth><Services/></RequiredAuth>}/>
          <Route path="contact" element={<ContactUs/>}/>
          <Route path="workers/:name" element={<RequiredAuth><Workers/></RequiredAuth>}/>
          <Route path="users/profile/:id" element={<RequiredAuth><Profile/></RequiredAuth>}/>
        </Route>
        
        <Route path="/admin">
          <Route index element={<AuthAdmin><Dashboard/></AuthAdmin>} />
          <Route path="all-users" element={<AuthAdmin><AdminUsers/></AuthAdmin>}/>
          <Route path="all-workers" element={<AuthAdmin><AdminWorkers/></AuthAdmin>}/>
          <Route path="all-requests" element={<AuthAdmin><AdminRequests/></AuthAdmin>}/>
          <Route path="rating" element={<Rating/>}/>
        </Route>
        <Route path="*" element={<p>404 page not found!</p>}/>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}


export default App