import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EngineeringIcon from '@mui/icons-material/Engineering';
import {Link} from 'react-router-dom'
const Widget = ({ type, url ,count }) => {
    let data;

    const amount  = 100;
    const diff = 100;
    switch(type){
        case "user":
            data={
                title: "USERS",
                link: "See all users",
                url:url,
                icon: (
                    <PersonOutlineIcon className="icon" 
                        style={{
                            color: "crimson", 
                            backgroundColor: "rgba(255, 0, 0, 0.2)"
                        }}
                    />
                )
            };
            break;
        case "worker":
        data={
            title: "WORKERS",
            link: "See all workers",
            url:url,
            icon: (
                <EngineeringIcon className="icon"
                    style={{
                            color: "purple", 
                            backgroundColor: "rgba(128, 0, 128, 0.2)"
                    }}
                />
            )
        };
        break;
        default:
            break;
    }
  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{ count }</span>
            <Link to={data.url}><span className="link">{data.link}</span></Link>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon/>
                {diff}
            </div>
            {data.icon}
        </div>
    </div>
  )
}


export default Widget