import style from "./workers.module.scss";
import Sidebar from '../admin_sidebar/Sidebar';
import Navbar from '../admin_navbar/Navbar';
import { baseUrl } from "../shared/baseUrl";
import { useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";
import {Divider} from '../divider/Divider'
const Workers = () => {
    const [data, setdata] = useState();

    const getWorkersData = async() =>{
        const res = await fetch(baseUrl+'/api/workers/getAllWorkers');
  
        if(res.status === 200)
        {
          const data = await res.json();
          setTimeout(()=>setdata(data),1000);
        }
      }
    useEffect(() => {
        getWorkersData();
    }, []);
    
  return (
    <div className="home">
    <Sidebar />
    <div className="homeContainer">
        <Navbar/>
        <Divider>WORKERS</Divider>
        <div className={style.table_cont}>
        <table >
            <thead className={style.tabHead}>
                <tr>
                    <th>SN.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Occupation</th>
                </tr>
            </thead>
            <tbody className={style.tabBody}>
                {data ? data.map((item, index)=> {
                    return (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.address}, Uttar Pradesh</td>
                            <td>{item.occupation}</td>
                        </tr>
                    )
                }):<tr><td colSpan='6'><LinearProgress/></td></tr>
                }
            </tbody>
        </table>
        </div>
    </div>
</div>
  )
}

export default Workers