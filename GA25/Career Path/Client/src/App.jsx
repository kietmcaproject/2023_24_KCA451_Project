import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import FirstPage from './pages/FirstPage';
import ResultPage from './pages/ResultPage';
import { Toaster } from 'react-hot-toast';
import AdminLaouts from './Layouts/AdminLaouts';
import UserLayout from './Layouts/UserLayout';
import PublicLayouts from './Layouts/PublicLayouts';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from './redux/AuthSlice';
import DataForm from './pages/DataForm';
import Alldata from './pages/Alldata';

export default function App() {
  const user = useSelector((state) => state.Auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateUser());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path='/' element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path='/first' element={<FirstPage />} />
          <Route path='/dataform' element={<DataForm />} />
          <Route path='alldata' element={<Alldata />} />
          
          </Route>
          <Route path='/admin' element={<AdminLaouts />}>
          <Route index element={<Admin />} />
          
          </Route>
          <Route path='/' element={<PublicLayouts />}>
          
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            
          </Route>
          <Route path='/first' element={<FirstPage />} />
          <Route path='/result' element={<ResultPage />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}
