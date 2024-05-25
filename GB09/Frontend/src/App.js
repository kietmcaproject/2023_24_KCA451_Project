import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetAvatar from "./components/SetAvatar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OtpGenerator from "./pages/OtpGenerator";
import OtpValidation from "./pages/OtpValidation";
import { Toaster } from "react-hot-toast";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/verify" element={<OtpGenerator/>}/>
        <Route path="auth/validate" element={<OtpValidation/>}/>
        <Route path="/" element={<Chat />} />
      </Routes>
      <Toaster/>
    </BrowserRouter>
  );
}
