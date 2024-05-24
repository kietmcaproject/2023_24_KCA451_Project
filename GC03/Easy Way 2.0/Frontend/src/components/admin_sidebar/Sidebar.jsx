import React from 'react'
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import { useUser } from '../shared/userContext';
import { Link, useNavigate } from 'react-router-dom';
const Sidebar = () => {
    const navigate = useNavigate();
    const {logout} = useUser();
    const handleLogout = () =>{
        localStorage.clear();
        logout();
        navigate('/');
    }
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to='/admin'><span className="logo">DashBoard</span></Link>
        </div>
        <hr />
        <div className="center">
        <ul>
            <li className="title">MAIN</li>
        </ul>
            <ul>
                <li>
                <Link to='/admin'><DashboardIcon className="icon"/>
                    <span>DashBoard</span></Link>
                </li>
                <ul>
                    <li className="title">LIST</li>
                </ul>
                <Link to='/admin/all-users'><li>
                <PersonOutlineIcon className="icon"/>
                    <span>Users</span>
                </li></Link>
                <Link to='/admin/all-workers'><li>
                <PersonOutlineIcon className="icon"/>
                    <span>Workers</span>
                </li></Link>
                <ul>
                    <li className="title">USEFUL</li>
                </ul>
                <Link to='/admin/all-requests'><li>
                    <QueryStatsRoundedIcon className="icon"/>
                    <span>Requests</span>
                </li></Link>
                {/* <ul>
                    <li className="title">SERVICE</li>
                </ul>
                <li>
                    <NotificationsNoneRoundedIcon className="icon"/>
                    <span>Notifications</span>
                </li>
                <li>
                    <SettingsRoundedIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <ul>
                    <li className="title">USER</li>
                </ul> */}
                <li>
                    <ExitToAppRoundedIcon className="icon"/>
                    <span onClick={handleLogout}>Logout</span>
                </li>
            </ul>
        </div>
    </div>
  )
}


export default Sidebar