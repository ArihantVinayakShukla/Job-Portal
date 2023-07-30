import React, { useState } from 'react'
import './Navbar.css'
import RegistrationPage from '../../../RegistrationPage/RegistrationPage';
import { Link } from 'react-router-dom';
import LoginPage from '../../LoginPage/LoginPage';
import { FaUser } from 'react-icons/fa';


const Navbar = () => {

  const [loginreg , setloginreg] = useState(false);
  const [authenticatedUser, setAuthenticatedUser] = useState('');

  const handleloginreg = () => {
    setloginreg(!loginreg)
  }

  const [login , setlogin] = useState(false);

  const handleLogin = () => {
    setlogin(!login)
  }
  
  const handleSuccessfulLogin = (email) => {
    // Extract the username from the email and set it in the state
    const username = email.split('@')[0];
    setAuthenticatedUser(username);
    // Close the login form after successful login
    setlogin(false);
  };
  return (
    <>
    <section className="NavSection  ">
      <h3 className='logo'>JOBIVIST</h3>
      {authenticatedUser ? ( // Display profile icon and user's email if authenticated
            <Link to="/Profile"><div className='profileContainer'>
              <FaUser className='profileIcon' />
              <p className='profileName'>{authenticatedUser}</p>
            </div></Link>):
      (<div className="btnLoginReg"> 
      <button className='loginRegisterBtn' onClick={handleloginreg}>Login/Register</button>
      {
        loginreg && <div className='btns'>
                      <div tabIndex="0" class="button-86" onClick={handleLogin} >
  <p class="button-86Text" >Login</p>
</div>
                        <Link to="/register" className='button-86' element={<RegistrationPage/>}><p className='button-86Text'>Register</p></Link>
                    </div>
      }
      </div>)
}
    </section>
    {
      login && <LoginPage login={login} handleLogin={handleLogin} handleSuccessfulLogin={handleSuccessfulLogin} /> 
    }
    </>
  )
}

export default Navbar