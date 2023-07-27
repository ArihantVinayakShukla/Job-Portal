import React,{useState} from 'react';
import "./LoginPage.css";
import { Link } from 'react-router-dom';
import {RxCross1} from 'react-icons/rx';
import {AiFillEyeInvisible} from 'react-icons/ai';
import {AiFillEye} from 'react-icons/ai';

const LoginPage = ({login , handlelogin}) => {
 
  console.log(login);


  const [password , setpassword] = useState(false);

  const handlepassword = () => {
    setpassword(!password);
  }

  return (
    <>
      
    {
      <section id="re" className='containerr'>
        <RxCross1 className='x-mark' onClick={handlelogin} />
        <div className="lgn-container">
            <div className="circle circle-one"></div>
            <div className="form-container">
                <h1 className="opacity">LOGIN</h1>
                <form >
                    <input type="email" placeholder="EMAIL" />
                    <div className='pass'>
                      <input type={password ? "text":"password"} placeholder="PASSWORD" />
                      <div>
                          {
                            password ?  <AiFillEye onClick={handlepassword}/> : <AiFillEyeInvisible  onClick={handlepassword}/>
                          }
                      </div>
                    </div>
                    <button className="opacity">SUBMIT</button>
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