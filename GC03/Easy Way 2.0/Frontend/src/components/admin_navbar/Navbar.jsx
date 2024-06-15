import React from 'react'
import "./navbar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="admin_name">
                <h2>Anshuman Patek </h2>
            </div>
            <div className="items">
                {/* <div className="item">
                    <DarkModeOutlinedIcon className="icon"/>
                </div> */}
                {/* <div className="item">
                    <FullscreenExitOutlinedIcon className="icon"/>
                </div>
                <div className="item">
                    <NotificationsNoneOutlinedIcon className="icon"/>
                    <div className="counter">1</div>
                </div>
                <div className="item">
                    <ChatBubbleOutlineOutlinedIcon className="icon"/>
                    <div className="counter">2</div>
                </div>
                <div className="item">
                    <ListOutlinedIcon className="icon"/>
                </div> */}
                <div className="item">
                    <a href='admin/rating'>Rating</a>
                </div>
                <div className="item">
                    {/* <AccountCircleOutlinedIcon className="avatar"/> */}
                    {/* <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000" alt="" className="avatar"/> */}
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default Navbar