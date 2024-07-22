import "./Navbar.css";
import RegistrationPage from "../../../RegistrationPage/RegistrationPage";
import { Link } from "react-router-dom";
import LoginPage from "../../LoginPage/LoginPage";
import { FaUser } from "react-icons/fa";

const Navbar = ({
  loginreg,
  login,
  authenticatedUser,
  handleLogin,
  handleSuccessfulLogin,
  handleloginreg,
  loginRef
}) => {
  return (
    <>
      <section className="NavSection  ">
        <h3 className="logo">JOBIVIST</h3>
        {authenticatedUser ? ( // Display profile icon and user's email if authenticated
          <Link to="/Profile" className="ProfileLink">
            <div className="profileContainer">
              <FaUser className="profileIcon" />
              <p className="profileName">{authenticatedUser}</p>
            </div>
          </Link>
        ) : (
          <div className="btnLoginReg">
            <button className="loginRegisterBtn" onClick={handleloginreg}>
              Login/Register
            </button>
            {loginreg && (
              <div className="btns">
                <div tabIndex="0" class="button-86" onClick={handleLogin}>
                  <p class="button-86Text">Login</p>
                </div>
                <Link
                  to="/register"
                  className="button-86"
                  element={<RegistrationPage />}
                >
                  <p className="button-86Text">Register</p>
                </Link>
              </div>
            )}
          </div>
        )}
      </section>
      {login && (
        <LoginPage
          login={login}
          handleLogin={handleLogin}
          handleSuccessfulLogin={handleSuccessfulLogin}
          ref = {loginRef}
        />
      )}
    </>
  );
};

export default Navbar;
