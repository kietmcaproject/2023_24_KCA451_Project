import { useEffect, useState } from "react"
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import "../../css/register.css";
import Select from 'react-select';
import { baseUrl } from "../shared/baseUrl";
import { useNavigate } from "react-router-dom";

export default function Rating() {
    const navigate = useNavigate();
    const [Worker , setWorker] = useState([]);
    const [listWorkerData, setListWorkerData] = useState([]);
    const [workerId , setWorkerId] = useState(null);
    const [rating, setRating] = useState(0);

    async function getAllWorker(){
        const res = await fetch(baseUrl+'/api/workers/getAllWorkers');
  
        if(res.status === 200)
        {
          const data = await res.json();
          setWorker(data);
          const list = data.map(info => ({
            value: info._id,
            label: info.name
          }));
            setListWorkerData(list);
          console.log("data",data);
          console.log("listworker",listWorkerData)
        }
    }
    useEffect(()=>{
        getAllWorker();
    },[])

    async function handleSubmit(e){
        e.preventDefault();
        console.log(workerId)
        console.log(rating)

        try{
            const data = {
                id:workerId,
                rating:rating,
            }
            const res = await fetch(baseUrl + '/api/workers/rating', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              });
            if(res){
                console.log("rating updated");
                navigate('/admin')
            }else{
                console.log("Something went wrong")
            }
        }catch(err){
            console.log("Rating not updated");
        }
    }

  return (
    <div className="register-box">
        <form onSubmit={handleSubmit}>
            <div className={`input-text`}>
              <p>Service Provide <span>*</span></p>
              <Select
                name="worker"
                options={listWorkerData}
                classNamePrefix="select"
                className="basic-select"
                onChange={(selectedOption) => setWorkerId(selectedOption.value)}
              />
            </div>
            <div className={`input-text`}>
                <p>Put <span>Rating</span></p>
                <Input type="text" name="rating" onChange={(e) => setRating(e.target.value)} />
            </div>

            <div className={`register-btn`}>
            <Button type="submit" buttonSize="btn--large">Submit</Button>
          </div>
        </form>
    </div>
  )
}
