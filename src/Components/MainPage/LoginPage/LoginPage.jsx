import React, { useState, useEffect, forwardRef } from 'react';
import "./LoginPage.css";
import { Link } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import axios from 'axios';

const LoginPage = forwardRef(({ login, handleLogin, handleSuccessfulLogin }, ref) => {
  const [password, setPassword] = useState(false);
  const [payload, updatePayload] = useState({
    email: "",
    password: "",
  });

  // Check if the user is already logged in
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      handleSuccessfulLogin(storedEmail);
    }
  }, [handleSuccessfulLogin]);

  const handlePassword = () => {
    setPassword(!password);
  };

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
          localStorage.setItem("email", res?.data?.data?.email);
          handleSuccessfulLogin(res?.data?.data?.name);
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
        <section id="re" className='containerr' ref={ref}>
          <RxCross1 className='x-mark' onClick={handleLogin} />
          <div className="lgn-container">
            <div className="circle circle-one"></div>
            <div className="form-container">
              <h1 className="opacity">LOGIN</h1>
              <form onSubmit={loginSubmitHandler} >
                <input type="email" id="email" placeholder="EMAIL" onChange={onChangeHandler} autoComplete='off' required />
                <div className='pass'>
                  <input id="password" type={password ? "text" : "password"} onChange={onChangeHandler} autoComplete="off" placeholder="PASSWORD" required />
                  <div>
                    {
                      password ? <AiFillEye onClick={handlePassword} /> : <AiFillEyeInvisible onClick={handlePassword} />
                    }
                  </div>
                </div>
                <input type='submit' value="submit" className="opacity submitBtn" />
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
  );
});

export default LoginPage;
