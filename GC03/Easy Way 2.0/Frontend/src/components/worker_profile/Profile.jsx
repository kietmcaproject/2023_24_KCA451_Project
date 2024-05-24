import { useState, useEffect } from 'react'
import style from '../../css/profile.module.css'
import { Button } from '../button/Button'
import { useUser } from '../shared/userContext'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { baseUrl } from '../shared/baseUrl'
import Footer from '../footer/footer';
import Nav from '../nav/Nav';
import { LinearProgress } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import RatingStar from './RatingStar'


const Profile = () => {
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({rating:""}); 
    const { logout } = useUser()
    const { id } = useParams();
    const [userData, setUserData] = useState();
    const [requestData, setRequestData] = useState();
    const { user } = useUser();
    const [isOpen, setIsOpen] = useState(false);
    const [requestHandleId, setRequestHandleId] = useState();

    const handleAccept = async() => {
        setIsOpen(false);
        const res = await fetch(baseUrl + '/api/workers/requests/'+requestHandleId+'/accept',{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            }
        })
        if(res.status === 200)
        {
            toast.success("Accepted",{theme:'colored'})
            getWorkerRequests();
        } 
      };
    
      const handleReject = async() => {
        setIsOpen(false);
        const res = await fetch(baseUrl + '/api/workers/requests/'+requestHandleId+'/reject',{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            }
        })
        if(res.status === 200)
        {
            toast.error("Rejected",{theme:'colored'})
            getWorkerRequests();
        }    
      };

      const handleClose = () => {
        setIsOpen(false);
      };
      const handlePopup = (_id) =>{
        setIsOpen(true);
        setRequestHandleId(_id)
      }

    const Logout = () => {
        localStorage.clear();
        logout();
        toast.success("Logout!", { theme: 'colored' })
        navigate('/');
    }
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    const getUserProfile = async () => {
        const res = await fetch(baseUrl + '/api/profile/' + id);
        const data = await res.json();
        setUserData(data);
        console.log("result",res)
        console.log("userdata",userData)
        
    }
    const getUserRequests = async () => {
        const res = await fetch(baseUrl + '/api/users/request/' + id);
        const data = await res.json();
        setRequestData(data);
    }
    const getWorkerRequests = async () => {
        const res = await fetch(baseUrl + '/api/workers/request/' + id);
        const data = await res.json();
        setRequestData(data);
    }
    const handleRequest = async() => {
        const toWorkerId = id;
        const fromUserId = user.id;
        const res = await fetch(baseUrl + '/api/workers/request',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({toWorkerId,fromUserId})
        })

        const data = await res.json();
        if(res.status === 200)
        {
            toast.success(data.message,{theme:'colored'})
            getWorkerRequests();
        }else if(res.status === 409){
            toast.error(data.message,{theme:'colored'});
        }else{
            toast.error("Error",{theme:'colored'})
        }
    }

    useEffect(() => {
        if(user.userType === 'admin')
            navigate('/admin')
        getUserProfile();
        if(user.userType === 'user')
            getUserRequests();

        getWorkerRequests();
    }, [id]);


    function InputEvent(e){
        const name = e.target.name;
        const value = e.target.value;

        setInputs((lastValue) => {
            return {
              ...lastValue,
              [name]: value
            }
        });

        console.log("input",inputs)
    }

        return (
            <>
            <Nav/>
            {userData &&
            <div className={style.container}>
                <div className={style.left}>
                    <div className={style.profile_img}>
                        <img src={userData.occupation? "https://www.shareicon.net/data/128x128/2016/09/01/822721_user_512x512.png":"https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"} alt='user pic' />
                    </div>
                    <div className={style.services}>
                        <h3>Services</h3>
                        <hr/>
                        <ul className={style.services_list}>
                        {
                           userData.serviceList && userData.serviceList.map((item, index)=>{
                                return <li className={style.list_item}>{item}</li>
                            })
                        }
                        </ul>
                    </div>
                    {(user && user.id === id) && <div className={style.logout}>
                        <Button buttonSize='btn--large' onClick={Logout}>logout</Button>
                    </div>}
                </div>
                <div className={style.right}>
                    <div className={style.name}>
                        <h3>{userData.name}</h3>
                        <p>{userData.occupation}</p>
                        <h4>Ratings</h4>
                        <div className={style.rating}>
                        <RatingStar count={userData.rating} />
                        </div>
                    </div>
                    {(user && user.id !=id) && <div className={style.contact_btn}>
                        <Button buttonStyle='btn--outline' onClick={() => openInNewTab(`https://wa.me/+91${userData.phone}`)}>Message</Button>
                        <Button buttonStyle='btn--outline' onClick={handleRequest}>Request</Button>
                    </div>}
                    <h4>About</h4>
                    <hr />
                    <div className={style.about}>
                        <div className={style.about_list}>
                            <h3>Phone</h3>
                            <p>{userData.phone}</p>
                        </div>
                        <div className={style.about_list}>
                            <h3>Address</h3>
                            <p>{userData.address}</p>
                        </div>
                        <div className={style.about_list}>
                            <h3>Email</h3>
                            <p>{userData.email}</p>
                        </div>
                        <div className={style.about_list}>
                            <h3>Description</h3>
                            <p>{userData.description}</p>
                        </div>
                    </div>
                </div>
               
                <div className={style.working_list}>
                    <h2>Request List</h2>
                        
                    <table border="0">
                    <thead className={style.tabHead}>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className={style.tabBody}>
                    {requestData ? requestData.map((item, index)=> {
                            return (
                                user && user.id === id && user.userType === 'user' 
                                ?<tr key={index}>
                                    <td>{item.to.name}</td>
                                    <td>{item.to.phone}</td>
                                    <td>{item.to.address}</td>
                                    <td>{new Date(item.createdAt).toISOString().split('T')[0]}</td>
                                    <td><span className={item.status=='Pending'?style.pending:item.status == 'Accepted'?style.accepted:style.rejected}>{item.status}</span></td>
                                </tr>
                                : <tr key={index}>
                                    <td>{item.from.name}</td>
                                    <td>{item.from.phone}</td>
                                    <td>{item.from.address}</td>
                                    <td>{new Date(item.createdAt).toISOString().split('T')[0]}</td>
                                    <td><span onClick={item.status =='Pending'?()=>handlePopup(item._id):handleClose} className={item.status=='Pending'?style.pending:item.status == 'Accepted'?style.accepted:style.rejected}>{item.status}</span></td>
                                </tr>
                            )
                        }):<tr><td colSpan='6'><LinearProgress/></td></tr>
                        }
                    </tbody>
                </table>
                        
                </div>
                
            </div>}
            <Footer/>
            {(isOpen && user.id === id && user &&  user.userType === 'worker') && (
                <div className={style.dialog}>
                <div className={style.closeDialog}  onClick={handleClose}><CloseIcon/></div>
                <div className={style.acceptButton}>
                <h2>Do you want to accept or reject?</h2>
                <button className={style.success} onClick={handleAccept}>Accept</button>
                <button className={style.danger} onClick={handleReject}>Reject</button>
                </div>
                </div>
            )}
            </>
        )
}

export default Profile
