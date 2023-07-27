import React, { useState } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [btns , setbtns] = useState(false);

    const change = () => {
        setbtns(!btns);
    }


  return (
    <>
    <div className='nav'>
        <h1>JobiVist</h1>
        <button className='btn' onClick={change}>Login/Register</button>
        {
            btns && <>
            <div className='btns'>
                <i className="fa-solid fa-caret-up fa-xl up-arrow" style={{color: "#9bceef"}}></i>
                <div className=''>
                    <Link className='login-btn' to='/Login'>Login</Link> 
                    <Link className='register-btn' to='/Register'>Register</Link>
                </div>
            </div>
                </>
        }

    </div>

    </>
  )
}

export default Navbar