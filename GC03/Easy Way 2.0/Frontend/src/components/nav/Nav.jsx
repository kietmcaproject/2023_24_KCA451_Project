import { useEffect, useLayoutEffect, useState } from "react";
import { MenuItems } from "./MenuItems";
import img from '../../img/way.png'
import { Link } from "react-router-dom";
import style from '../../css/navbar.module.css'
import { Button } from "../button/Button";
import { useUser } from "../shared/userContext";
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
const Nav = () =>{
    const [state , setState] = useState({clicked:false});
    const {user , updateUser,loginStatus,login} = useUser();
    const currentUser = localStorage.getItem('user');
    
    useEffect(() =>{
        if(currentUser)
        {    
            updateUser(JSON.parse(currentUser));
            login()
        }
        
    },[loginStatus])

   
    const handleClick = () =>{
        setState({clicked:!state.clicked})
    }
    
    return(
        <nav className={style.navbar}>
            <h1 className={style.navbar_logo}>Easy<img src={img} className={style.logo}></img>Way</h1>
            <div className={style.menu_icon} onClick={handleClick}>
                 {state.clicked ? <CloseIcon sx={{color:"white"}}/>
                 :<DehazeIcon sx={{color:"white"}}/>}
            </div>
            <ul className={state.clicked?`${style.nav_menu} ${style.active}`:style.nav_menu}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={style.nav_links} to={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
                {
                    loginStatus ? <li><Link className={style.nav_links_mobile} to={`/users/profile/${user.id}`}>{user.name}</Link></li>
                    :<li><Link className={style.nav_links_mobile} to='/login'>login</Link></li>
                }
                {
                    loginStatus ?<li><Link  to={`/users/profile/${user.id}`}><img className={style.nav_profile_pic} src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png" alt="pic"/></Link></li> 
                    :<li><Link className={style.nav_btn} to="/login"><Button>Login</Button></Link></li>
                    
                }
                
                
                </ul>
            
        </nav>
    );
}
export default Nav