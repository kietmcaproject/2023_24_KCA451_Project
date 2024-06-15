import { Button } from "../button/Button";
import style from '../../css/feedback.module.css'
import { useState } from "react";
import img from '../../img/chat_g.png'
import {toast} from 'react-toastify'
import { baseUrl } from "../shared/baseUrl";
import Footer from '../footer/footer';
import Nav from '../nav/Nav';
const Feedback = () => {
    const [inputs,setInputs] = useState({name:"",email:"",rating:"",message:""}); 

    const InputEvent = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setInputs((lastValue) => {
            return {
              ...lastValue,
              [name]: value
            }
          });
        console.log("rating",inputs.rating)
    }

    const SubmitForm = async (event) => {
        event.preventDefault();
        console.log(inputs);

        if(inputs.name ==='' || inputs.email === '' || inputs.message === '' || inputs.rating ==='')
            toast.error("All field mindatory!",{theme:'colored'})
        else
        {
            const res = await fetch(baseUrl+'/api/feedback',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(inputs)
            })

            if(res.status === 200)
                toast.success('Feadback send!',{theme:'colored'})
            else
             toast.error('Already given a feadback')
        }

    }
    return (
        <>
        <Nav/>
        <div className={style.container}>
        <div className={style.heading}>
            <h3>Feedback&nbsp;</h3>
            <img src={img} alt="" width="45"/>
        </div>
            <div className="sub-cont">
                <form onSubmit={SubmitForm}>
                    <label htmlFor="name" className={style.name} >Name</label><br/>
                    <input type="text" className={style.input} placeholder="Your name" name="name" value={inputs.name} onChange={InputEvent} /><br/>
                    <label htmlFor="email" className={style.email}>Email</label><br/>
                    <input type="text" name="email" className={style.input} placeholder="Your email" value={inputs.email} onChange={InputEvent} /><br/><br/>
                    <div className={style.rating_heading}>Rate us..</div><br/>
                    <div className={style.rating}>
                            <input type="radio" value="5" name="rating" onChange={InputEvent} id="rate1"/>
                            <label htmlFor="rate1"></label>
                            <input type="radio" value="4" name="rating" onChange={InputEvent} id="rate2"/>
                            <label htmlFor="rate2"></label>
                            <input type="radio" value="3" name="rating" onChange={InputEvent} id="rate3"/>
                            <label htmlFor="rate3"></label>
                            <input type="radio" value="2" name="rating" onChange={InputEvent} id="rate4"/>
                            <label htmlFor="rate4"></label>
                            <input type="radio" value="1" name="rating" onChange={InputEvent} id="rate5"/>
                            <label htmlFor="rate5"></label>
                    </div>
                    <label htmlFor="message" className={style.msg_heading}>Message</label><br/>
                    
                    <textarea name="message" className={style.msg_box} placeholder="Write your feedback here..."
                     value={inputs.message} onChange={InputEvent} ></textarea><br/>
                    <div className={style.submit}>
                        <Button type="submit" buttonSize="btn--large" value="Send">send</Button>
                    </div>
                </form>   
        </div>
    </div>
    <Footer/>
    </>
    )
}

export default Feedback;