import React, { useRef } from "react";
import "./MainPage.css";
import UpperSection from "./UpperSection/UpperSection";
import MiddleSection from "./MiddleSection/MiddleSection.jsx";
import Loader from "../RegistrationPage/Loader";
import { useState, useEffect } from "react";
import Footer from "./Footer/Footer";

const MainPage = () => {
  const [loginreg, setloginreg] = useState(false);
  const [authenticatedUser, setAuthenticatedUser] = useState("");
  const [login, setlogin] = useState(false);

  const loginRef = useRef(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      const username = storedEmail.split("@")[0];
      setAuthenticatedUser(username);
      setlogin(false); // User is logged in
    }
  },[])

  const handleloginreg = () => {
    setloginreg(!loginreg);
  };

  const handleLogin = () => {
    setlogin(!login);
  };

  const handleSuccessfulLogin = (email) => {
    const username = email.split("@")[0];
    setAuthenticatedUser(username);
    setlogin(false);
  };

  const [loader, setloader] = useState(true);
  const [selectedJobs, setSelectedJobs] = useState([]);

  const handleFiltersChange = (jobs, locations) => {
    setSelectedJobs(jobs);
  };

  useEffect(() => {
    setInterval(() => {
      setloader(false);
    }, 2000);
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="outermostDiv">
          <article className="mainArticle">
            <UpperSection
              onFiltersChange={handleFiltersChange}
              loginreg={loginreg}
              authenticatedUser={authenticatedUser}
              login={login}
              handleLogin={handleLogin}
              handleSuccessfulLogin={handleSuccessfulLogin}
              handleloginreg={handleloginreg}
              loginRef={loginRef}
            />
            <MiddleSection
              selectedJobs={selectedJobs}
              authenticatedUser={authenticatedUser}
              setlogin={setlogin}
              loginRef={loginRef}
            />
          </article>

          <Footer />
        </div>
      )}
    </>
  );
};

export default MainPage;
