import React, { useEffect, useState } from 'react'
import { get } from '../services/ApiEndpoint'
import  { toast } from 'react-hot-toast';

export default function Alldata() {
  const [datas,setdatas]=useState([])


  useEffect(()=>{
         const Getdatas=async()=>{
          try {
                 const request= await get('/api/admin/getdata')
                 const respnse = request.data
                if (request.status===200) {
                   setdatas(respnse.datas)
                }
                 
          } catch (error) {
              console.log(error)
          }
         }
         Getdatas()
  },[])

  
  return (
    <>
      <div className='admin-container'>
        <h2>This is a Data Set of Career Path</h2>
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Subject</th>
              <th>Graduation</th>
              <th>Intrest</th>
              <th>Courses</th>
              <th>Entrance</th>
              <th>College</th>
            </tr>
          </thead>
            <tbody>
            {datas && datas.map((elem,index)=>{
              return(
                <tr key={index}>
                <td>{elem.classname}</td>
                <td>{elem.subject}</td>
                <td>{elem.graduation}</td>
                <td>{elem.interest}</td>
                <td>{elem.course}</td>
                <td>{elem.entrance}</td>
                <td>{elem.college}</td>
                
              </tr>
              )
            })}
              
            </tbody>
        </table>
      </div>
    </>
  )
}
