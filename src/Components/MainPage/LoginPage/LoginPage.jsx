import React,{useState} from 'react';
import "./LoginPage.css";
import { Link } from 'react-router-dom';
import {RxCross1} from 'react-icons/rx';
import {AiFillEyeInvisible} from 'react-icons/ai';
import {AiFillEye} from 'react-icons/ai';
import axios from 'axios';


const LoginPage = ({login , handleLogin}) => {
 
  console.log(login);


  const [password , setpassword] = useState(false);
  const [payload, updatePayload] = useState({
    email: "",
    password: "",
  });

  const handlepassword = () => {
    setpassword(!password);
  }

  function onChangeHandler(event) {
    let id = event?.target?.id;
    let value = event?.target?.value;
    let updatedPayload = { ...payload };
    updatedPayload[id] = value;
    updatePayload(updatedPayload);
    console.log('payload: ', payload);
  }

  const loginSubmitHandler = (event) => {
    event.preventDefault();

    const url = `${window.API_URL}/login`;

    axios.post(url, payload)
    .then((res) => {
      if (res?.status === 200) {
        alert(res?.data?.msg);
        sessionStorage.setItem("email", res?.data?.data?.email);
      } else if (res?.status === 401) {
        alert(res?.data?.msg);
        } else {
          alert(res?.data?.msg);
        }
      })
      .catch((err) => {
        if (err?.response?.status === 401) {
          alert("Password is incorrect. Please enter the correct password.");
        } else {
          alert(err?.response?.data?.msg);
        }
      });
      console.log('payload: ', payload);
  };
  return (
    <>
      
    {
      <section id="re" className='containerr'>
        <RxCross1 className='x-mark' onClick={handleLogin} />
        <div className="lgn-container">
            <div className="circle circle-one"></div>
            <div className="form-container">
                <h1 className="opacity">LOGIN</h1>
                <form onSubmit={loginSubmitHandler}>
                    <input type="email" id="email" placeholder="EMAIL" onChange={onChangeHandler} autoComplete='off' required/>
                    <div className='pass'>
                      <input id="password" type={password ? "text":"password"} onChange={onChangeHandler} autoComplete = "off" placeholder="PASSWORD" required />
                      <div>
                          {
                            password ?  <AiFillEye onClick={handlepassword}/> : <AiFillEyeInvisible  onClick={handlepassword}/>
                          }
                      </div>
                    </div>
                    <input type='submit' value="submit" className="opacity submitBtn"/>
                </form>
                <div className="register-forget opacity">
                    <p>New to Jobivist?</p>
                    <Link to="/register" className='style-reg' >Register</Link>
                </div>
            </div>
            <div className="circle circle-two"></div>
        </div>
        <div className="theme-btn-container"></div>
    </section>
    }
  
    </>
  )
}

export default LoginPage