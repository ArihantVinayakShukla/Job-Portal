import React, { useState } from 'react'
import './Navbar.css'
import RegistrationPage from '../../../RegistrationPage/RegistrationPage';
import { Link } from 'react-router-dom';
import LoginPage from '../../LoginPage/LoginPage';



const Navbar = () => {

  const [loginreg , setloginreg] = useState(false);

  const handleloginreg = () => {
    setloginreg(!loginreg)
  }

  const [login , setlogin] = useState(false);

  const handleLogin = () => {
    setlogin(!login)
  }
  

  return (
    <>
    <section className="NavSection  ">
      <h3 className='logo'>JOBIVIST</h3>
      <div className="btnLoginReg">
      <button className='loginRegisterBtn' onClick={handleloginreg}>Login/Register</button>
      {
        loginreg && <div className='btns'>
                      <div tabindex="0" class="button-86" onClick={handleLogin}>
  <p class="button-86Text" >Login</p>
</div>
                        <Link to="/register" className='button-86' element={<RegistrationPage/>}><p className='button-86Text'>Register</p></Link>
                    </div>
      }
      </div>
    </section>
    {
      login && <LoginPage login={login} handleLogin={handleLogin}/> 
    }
    </>
  )
}

export default Navbar