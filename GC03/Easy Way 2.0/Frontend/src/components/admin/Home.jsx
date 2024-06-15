import {useEffect, useState} from 'react'
import "./home.scss"
import Sidebar from '../admin_sidebar/Sidebar';
import Navbar from '../admin_navbar/Navbar';
import Widget from '../admin_widget/Widget';
import {baseUrl} from '../shared/baseUrl'

const Home = () => {
  const [count, setCount] = useState();
  const getNumbeOfUsers  = async() =>{
    const res = await fetch(baseUrl + '/api/admin/userCount');

    if(res.status === 200)
    {
      const data = await res.json();
      console.log(data)
      setCount(data);
    }
  }

  useEffect(() => {
    getNumbeOfUsers();
  }, []);

  return (
    <div className="home">
        <Sidebar />
        <div className="homeContainer">
            <Navbar/>
            <div className="widgets">
            <Widget type="user" url='/admin/all-users' count={count && count.user} className="usr"/>
            <Widget type="worker" url='/admin/all-workers' count={count && count.worker} className="wrk"/>
            </div>
        </div>
    </div>
  )
}

export default Home