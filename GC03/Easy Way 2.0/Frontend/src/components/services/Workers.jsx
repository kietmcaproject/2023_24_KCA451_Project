import { useParams } from "react-router-dom"
import { Divider } from "../divider/Divider";
import { useEffect, useState} from 'react'
import Worker from '../card/Worker'
import style from '../../css/workers.module.css'
import { baseUrl } from "../shared/baseUrl";
import Nav from "../nav/Nav";
import Footer from "../footer/footer";

const Workers = () => {
    const {name} = useParams();
    const [workerType, setworkerType] = useState('');
    const [data, setdata] = useState(null);

    const getWorkersData = async(type) =>{
      const res = await fetch(baseUrl+'/api/workers/getAllWorkers');

      if(res.status === 200)
      {
        const data = await res.json();
          // const temp = [];
          // data.forEach(x =>{
          //   if(x.serviceList[0]==type)
          //     temp.push(x);
          // })
        setdata(data);
        console.log("data after filter",data);
      }
    }

    useEffect(() => {
      const arr = name.split(' ');
      const type = arr[1];
      setworkerType(type.toLowerCase());
      console.log(workerType)
      getWorkersData(workerType);

    }, []);

  return (
    <>
    <Nav/>
    <Divider>{name}</Divider>
    <div className={style.worker_list}>
    {
      data && data.map((item,index) => {
        if(item.serviceList[0] == workerType)
          return <Worker key={index} data={item}/>
        
        if(workerType == 'workers')
        return <Worker key={index} data={item}/>

      })
    }
    </div>
    <Footer/>
    </>
  )
}

export default Workers