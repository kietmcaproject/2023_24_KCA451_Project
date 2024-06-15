import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { Divider } from "../divider/Divider";
import "../../css/register.css";
import Select from 'react-select';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storage } from "../../firebase/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { useUser } from "../shared/userContext";
import { baseUrl } from "../shared/baseUrl";
import Footer from '../footer/footer';
import Nav from '../nav/Nav';

const Register = () => {
  const navigate = useNavigate();
  const [Inputs, setInputs] = useState({ name: "", email: "", password: "", address: "", phone: "", occupation: "", about: "", imageUrl: 'https://static.vecteezy.com/system/resources/previews/002/002/257/original/beautiful-woman-avatar-character-icon-free-vector.jpg' });
  const [userType, setUserType] = useState({ value: 'user' });
  const [worker, setWorker] = useState(false);
  const [image, setImage] = useState(null);
  const [otpsent, setOtpSend] = useState(false);
  const [serviceList, setServiceList] = useState([]);
  const [verify, setVerify] = useState(false);
  const [otp, setOtp] = useState('');
  const [buttonLoading, setbuttonLoading] = useState(false);

  const { login, updateUser } = useUser();

  const userTypes = [{ value: 'user', label: 'User' }, { value: 'worker', label: 'Worker' }];
  const serviceTypes = [{ value: 'electrician', label: 'Electrician' }, { value: 'carpenter', label: 'Carpenter' },
  { value: 'cleaner', label: 'Cleaner' }, { value: 'plumber', label: 'Plumber' }, { value: 'mechanic', label: 'Mechanic' },
  { value: 'maid', label: 'Maid' }]

  useEffect(() => {

    if (userType.value === 'worker')
      setWorker(true);
    else
      setWorker(false);
  }, [userType]);

  const inputImage = (event) => {

    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }


  }

  const inputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((lastValue) => {
      return {
        ...lastValue,
        [name]: value
      }

    });
  }

  const formValidation = () => {
    // Regular expressions for validation
    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^\S+@\S+\.\S+$/;

    // Validate name field
    if (!Inputs.name.match(nameRegex)) {
      toast.error("Please enter a valid name.", { theme: "colored" });
      return false;
    }

    // Validate phone number field
    if (!Inputs.phone.match(phoneRegex)) {
      toast.error("Please enter a 10-digit phone number.", { theme: "colored" });
      return false;
    }

    // Validate email field
    if (!Inputs.email.match(emailRegex)) {
      toast.error("Please enter a valid email address.", { theme: "colored" });
      return false;
    }

    // Validate password field
    if (Inputs.password.length < 6) {
      toast.error("Password should be at least 6 characters long.", { theme: "colored" });
      return false;
    }

    // All fields are valid
    return true;

  }

  const sendOtp = async (event) => {
    event.preventDefault();


    if (Inputs.email === "" || Inputs.password === "" || Inputs.phone === "" || image === null)
      toast.warn("All field mandatory!", { theme: "colored" });
    else if(formValidation()) {
      setbuttonLoading(true)
      const email = Inputs.email;
      const res = await fetch(baseUrl + "/api/verification/sendMail", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      if (res.status === 200) {
        setOtpSend(true);
        toast.success("OTP send!");
        setbuttonLoading(false)
        await uploadImage();
      }
      else
        toast.error("Server Error!");

        setbuttonLoading(false)
    }

  }

  const uploadImage = async () => {
    const d = new Date();
    let key = d.getMilliseconds();
    const imageRef = ref(storage, `images/${image.name}${key}`);
    await uploadBytes(imageRef, image);

    const url = await getDownloadURL(imageRef);
    setInputs((lastValue) => {
      return {
        ...lastValue,
        imageUrl: url
      }

    });
    // toast.success("Image uploaded");
    setbuttonLoading(false)
  }

  const verifyOtp = async () => {
    setbuttonLoading(false)
    if (otp === '')
      toast("Enter Otp")
    else {
      const email = Inputs.email;
      console.log(otp)
      const res = await fetch(baseUrl + "/api/verification/verifyOtp", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ otp, email })
      });

      if (res.status === 200) {
        toast.success("Verify!")
        setVerify(true);
      }
      else
        toast("wrong otp")
    }
  }



  const UserRegister = async (event) => {
    event.preventDefault();

    console.log(Inputs);
    console.log(typeof serviceList);
    console.log(serviceList.value)
    if (!worker) {
      const res = await fetch(baseUrl + '/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Inputs)
      });
      if (res.status === 201) {
        const data = await res.json();
        toast.success('Register Successfully!', { theme: 'colored' })
        localStorage.clear();
        login()
        const currentUser = { id: data._id, name: data.name, email: data.email, imageUrl: data.imageUrl, userType: data.userType }
        localStorage.setItem('user', JSON.stringify(currentUser));
        updateUser(currentUser);
        navigate('/')

      } else {
        toast.error('Database not responding!', { theme: 'colored' })
      }
    } else {
      const list = { serviceList: serviceList.value };

      const res = await fetch(baseUrl + '/api/workers/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...Inputs, ...list })
      });

      if (res.status === 201) {
        localStorage.clear();
        const data = await res.json();
        localStorage.clear();
        login();
        const currentUser = { id: data._id, name: data.name, email: data.email, imageUrl: data.imageUrl, userType: data.userType }
        localStorage.setItem('user', JSON.stringify(currentUser));
        updateUser(currentUser)
        toast.success('Register Successfully!', { theme: 'colored' });
        navigate('/');
      }
      else
        toast.error("Error!")
    }
  }
  return (
    <>
      <Nav />
      <div className="register-box">
        <Divider>Register</Divider>
        <form onSubmit={UserRegister}>
          <div className="register-form">
            <div className="input-text">
              <p>Type <span>*</span></p>
              <Select
                name="type"
                options={userTypes}
                className="basic-single"
                classNamePrefix="select"
                onChange={setUserType}
              />
            </div>
            <div className="input-text">
              <p>Name <span>*</span></p>
              <Input id='name' type="text" name="name" value={Inputs.name} onChange={inputEvent} />
            </div>
            <div className="input-text">
              <p>Phone <span>*</span></p>
              <Input id='phone' type="number" name="phone" value={Inputs.phone} onChange={inputEvent} />
            </div>
            <div className="input-text">
              <p>User Email <span>*</span></p>
              <Input id='email' type="email" name="email" value={Inputs.email} onChange={inputEvent} />
            </div>
            <div className="input-text">
              <p>Address <span>*</span></p>
              <Input id='address' type="text" name="address" value={Inputs.address} onChange={inputEvent} />
            </div>
            <div className="input-text">
              <p>Password <span>*</span></p>
              <Input id='password' type="password" minLength="6" name="password" value={Inputs.password} onChange={inputEvent} />
            </div>

            <div className={`${worker ? "input-text" : "hide"}`}>
              <p>Occupation <span>*</span></p>
              <Input type="text" name="occupation" value={Inputs.occupation} onChange={inputEvent} />
            </div>
            
            <div className={`${worker ? "input-text" : "hide"}`}>
              <p>Service Provide <span>*</span></p>
              <Select
                name="services"
                options={serviceTypes}
                classNamePrefix="select"
                className="basic-select"
                onChange={setServiceList}
              />
            </div>
            <div className={`${worker ? "input-text" : "hide"}`}>
              <p>Write about your self <span>*</span></p>
              <textarea className="textarea" name="about" value={Inputs.about} onChange={inputEvent} />
            </div>
            <div className="input-text">
              <p>Profile Image <span>*</span></p>
              <Input type="file" name="profile image" onChange={inputImage} />
            </div>

          </div>

          <div className={`${otpsent && !verify ? "otp-field" : "hide"}`}>
            <p>OTP: </p>
            <input type="number" name="otp" value={otp} onChange={e => setOtp(e.target.value)} />
          </div>
          <div className={`${otpsent ? "hide" : "otp-btn"}`}>
            <Button loading={buttonLoading} type="button" buttonSize="btn--large" onClick={sendOtp}>OTP</Button>
          </div>
          <div className={`${otpsent && !verify ? "verify-btn" : "hide"}`}>
            <Button loading={buttonLoading} type="button" buttonSize="btn--large" onClick={verifyOtp}>Verify</Button>
          </div>
          <div className={`${verify ? "register-btn" : "hide"}`}>
            <Button loading={buttonLoading} type="submit" buttonSize="btn--large">Register</Button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}
export default Register