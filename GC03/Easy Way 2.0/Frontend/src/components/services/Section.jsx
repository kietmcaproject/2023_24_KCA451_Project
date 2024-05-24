import style from '../../css/section.module.css'
import { Button } from '../button/Button'
import Worker from '../card/Worker'
import {useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
import {baseUrl} from '../shared/baseUrl'
const Section = ({name,data,type}) => {
    const navigate = useNavigate();
    const [filterData,setFilterData] = useState(null);

      const getFilterData = async(name) =>{
        console.log("data",data)
          console.log("section type",type)
          const temp = [];
          data.forEach(x =>{
            if(x.serviceList[0]==type)
              temp.push(x);
          })
        //   console.log(temp)
          setFilterData(temp)
          console.log("filterdata",filterData)
      }

      useEffect(() => {
        getFilterData(name);

      }, []);

    const handleClick = () =>{
        navigate(`${name}`)
    }


    return (
        <div className={style.section}>
            <div className={style.section_heading}>
                <h3>{name}</h3>
                <Button onClick={handleClick}>more</Button>
            </div>
            <div className={style.worker_list}>
                {
                    filterData && filterData.map((item,index) =>{
                        return <Worker key={index} data={item}/>
                    })
                }
                

            </div>
        </div>
    )
}

export default Section