import { useState, useEffect } from 'react';
import style from '../../css/services.module.css'
import ReactSearchBox from "react-search-box";
import { FaSearch } from "react-icons/fa";
import Worker from '../card/Worker';
import { Button } from '../button/Button';
import { Divider } from '../divider/Divider'
import Section from './Section';
import Footer from '../footer/footer';
import Nav from '../nav/Nav';
import { Navigate } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import AllWorkerShow from './AllWorkershow';
const Services = () => {
    const [text, setText] = useState();
    const [data, setData] = useState();

    const submit = (e) => {
        e.preventDefault();

        // console.log('hello')
    }
    const searchdata = [
        {
            key: "electrician",
            value: "Electrician",
        },
        {
            key: "carpenter",
            value: "Carpenter",
        },
        {
            key: "cleaner",
            value: "Cleaner",
        },
        {
            key: "plumber",
            value: "Plumber",
        },
        {
            key: "macheninc",
            value: "Machenic",
        },
        {
            key: "maid",
            value: "Maid",
        }

    ];
    const searchHandle = () =>{
       console.log(text)
    }

    const getWorkersData = async() =>{
        const res = await fetch(baseUrl+'/api/workers/getAllWorkers');
        
        if(res.status === 200)
        {
          const data = await res.json();
        //   console.log(data)
          setData(data);
        }
      }
    useEffect(() => {
        getWorkersData();
    }, []);

    return (
        <>
        <Nav/>
        <div className={style.container}>
            {/* <div className={style.search}>
                <form  className={style.search_box}>
                    <ReactSearchBox data={searchdata} onSubmit={searchHandle} placeholder="Search..."  onChange={(record) => setText(record)} leftIcon={<FaSearch />} iconBoxSize="40px" />
                </form>
            </div> */}
            {data && 
            <>
                <AllWorkerShow name="All Workers" data={data} />
                <hr />
                <Divider>workers</Divider>
                <Section name="All Electrician" data={data} type="electrician"/>
                <Section name="All Plumber" data={data} type="plumber"/>
                <Section name="All Cleaner" data={data} type="cleaner"/>
                <Section name="All Carpenter" data={data} type="carpenter"/>
                <Section name="All Mechanic" data={data} type="mechanic"/>
                <Section name="All Maid" data={data} type="maid"/>
            </>
            }
        </div>
        <Footer/>
        </>
    )
}

export default Services