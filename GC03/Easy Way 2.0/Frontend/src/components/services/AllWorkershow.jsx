import { useNavigate } from 'react-router-dom';
import style from '../../css/section.module.css'
import { Button } from '../button/Button'
import Worker from '../card/Worker'

const AllWorkerShow = ({name,data}) => {
    const navigate = useNavigate();

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
                    data && data.slice(0,4).map((item,index) =>{
                        return <Worker key={index} data={item}/>
                    })
                    
                }
                

            </div>
        </div>
    )
}

export default AllWorkerShow